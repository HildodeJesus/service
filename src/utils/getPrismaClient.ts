import { PrismaClient as MainClient } from "../../prisma/generated/main";
import { PrismaClient as TenantClient } from "../../prisma/generated/tenant";

const prismaClientPropertyName = `__prevent-name-collision__prisma`;
type GlobalThisWithPrismaClient = typeof globalThis & {
	[prismaClientPropertyName]: MainClient;
};

const prismaClients: Record<string, TenantClient> = {};

export class GetPrismaClient {
	static main() {
		if (process.env.NODE_ENV === `production`) {
			return new MainClient();
		} else {
			const newGlobalThis = globalThis as GlobalThisWithPrismaClient;
			if (!newGlobalThis[prismaClientPropertyName]) {
				newGlobalThis[prismaClientPropertyName] = new MainClient({
					datasources: {
						db: {
							url: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:5432/cardapiou`,
						},
					},
				});
			}
			return newGlobalThis[prismaClientPropertyName];
		}
	}

	static tenant(database: string) {
		if (!prismaClients[database]) {
			prismaClients[database] = new TenantClient({
				datasources: {
					db: {
						url: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${database}?connection_limit=5`,
					},
				},
			});
		}
		return prismaClients[database];
	}
}
