/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiResponse } from "@/utils/ApiResponse";
import { GetPrismaClient } from "@/utils/getPrismaClient";
import bcrypt from "bcryptjs";
import { CompanyService } from "./company.service";

const prisma = GetPrismaClient.main();

export class TenantDatabaseService {
	static async createTenantDatabase(
		companyId: string,
		companyName: string
	): Promise<void> {
		const databaseName = `tenant_${companyId.replace(/-/g, "_")}`;
		const databaseUser = `user_tenant_${companyId.replace(/-/g, "_")}`;
		const databasePassword = `${companyId}`;
		const subdomain = companyName;
		try {
			const existingDb: any[] = await prisma.$queryRawUnsafe(
				`SELECT datname FROM pg_database WHERE datname = '${databaseName}'`
			);

			if (existingDb.length > 0) {
				console.log(`Banco de dados ${databaseName} já existe.`);
				return;
			}

			await prisma.$executeRawUnsafe(`CREATE DATABASE ${databaseName};`);
			console.log(`Banco de dados ${databaseName} criado com sucesso.`);

			const tenantPrisma = GetPrismaClient.tenant(databaseName);

			await tenantPrisma.$transaction(async (tx: any) => {
				await tx.$executeRawUnsafe(`
  CREATE TABLE IF NOT EXISTS "User" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'waiter',
    "createdAt" TIMESTAMP DEFAULT now(),
    "updatedAt" TIMESTAMP DEFAULT now()
  );
`);

				await tx.$executeRawUnsafe(`
  CREATE TABLE IF NOT EXISTS "Client" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" TEXT,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT now(),
    "updatedAt" TIMESTAMP DEFAULT now()
  );
`);

				await tx.$executeRawUnsafe(`
  CREATE TABLE IF NOT EXISTS "Table" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "number" INT NOT NULL,
    "qrcode" TEXT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT now(),
    "updatedAt" TIMESTAMP DEFAULT now()
  );
`);

				await tx.$executeRawUnsafe(`
  CREATE TABLE IF NOT EXISTS "Category" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT now(),
    "updatedAt" TIMESTAMP DEFAULT now()
  );
`);

				await tx.$executeRawUnsafe(`
  CREATE TABLE IF NOT EXISTS "Product" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "quantity" DECIMAL NOT NULL,
    "unit" TEXT NOT NULL DEFAULT 'unit',
    "price" DECIMAL NOT NULL,
    "createdAt" TIMESTAMP DEFAULT now(),
    "updatedAt" TIMESTAMP DEFAULT now()
  );
`);

				await tx.$executeRawUnsafe(`
  CREATE TABLE IF NOT EXISTS "Dish" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DECIMAL NOT NULL,
    "cost" DECIMAL NOT NULL,
    "categoryId" UUID NOT NULL,
    "createdAt" TIMESTAMP DEFAULT now(),
    "updatedAt" TIMESTAMP DEFAULT now(),
    FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE
  );
`);

				await tx.$executeRawUnsafe(`
  CREATE TABLE IF NOT EXISTS "DishItem" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "dishId" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "quantity" DECIMAL NOT NULL,
    "createdAt" TIMESTAMP DEFAULT now(),
    "updatedAt" TIMESTAMP DEFAULT now(),
    FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE CASCADE,
    FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE
  );
`);

				await tx.$executeRawUnsafe(`
  CREATE TABLE IF NOT EXISTS "Order" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "tableId" UUID,
    "clientId" UUID,
    "orderType" TEXT NOT NULL DEFAULT 'dine_in',
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP DEFAULT now(),
    "updatedAt" TIMESTAMP DEFAULT now(),
    FOREIGN KEY ("tableId") REFERENCES "Table"("id") ON DELETE SET NULL,
    FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL
  );
`);

				await tx.$executeRawUnsafe(`
  CREATE TABLE IF NOT EXISTS "OrderItem" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "orderId" UUID NOT NULL,
    "dishId" UUID NOT NULL,
    "quantity" INT NOT NULL,
    "price" DECIMAL NOT NULL,
    "createdAt" TIMESTAMP DEFAULT now(),
    "updatedAt" TIMESTAMP DEFAULT now(),
    FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE,
    FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE CASCADE
  );
`);

				await tx.$executeRawUnsafe(`
  CREATE TABLE IF NOT EXISTS "Bill" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "tableId" UUID NOT NULL,
    "clientId" UUID,
    "status" TEXT NOT NULL DEFAULT 'open',
    "total" DECIMAL NOT NULL,
    "createdAt" TIMESTAMP DEFAULT now(),
    "updatedAt" TIMESTAMP DEFAULT now(),
    FOREIGN KEY ("tableId") REFERENCES "Table"("id") ON DELETE CASCADE,
    FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL
  );
`);

				await tx.$executeRawUnsafe(`
  CREATE TABLE IF NOT EXISTS "BillItem" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "billId" UUID NOT NULL,
    "orderId" UUID NOT NULL,
    "createdAt" TIMESTAMP DEFAULT now(),
    "updatedAt" TIMESTAMP DEFAULT now(),
    FOREIGN KEY ("billId") REFERENCES "Bill"("id") ON DELETE CASCADE,
    FOREIGN KEY ("orderId") REFERENCES "OrderItem"("id") ON DELETE CASCADE
  );
`);

				await tx.$executeRawUnsafe(`
  CREATE TABLE IF NOT EXISTS "Payment" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "billId" UUID NOT NULL,
    "amount" DECIMAL NOT NULL,
    "paymentMethod" TEXT NOT NULL DEFAULT 'cash',
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP DEFAULT now(),
    "updatedAt" TIMESTAMP DEFAULT now(),
    FOREIGN KEY ("billId") REFERENCES "Bill"("id") ON DELETE CASCADE
  );
`);

				await tx.$executeRawUnsafe(`
  CREATE TABLE IF NOT EXISTS "StockMovement" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "productId" UUID NOT NULL,
    "quantity" DECIMAL NOT NULL,
    "movementType" TEXT NOT NULL DEFAULT 'in',
    "referenceId" UUID NOT NULL,
    "referenceType" TEXT NOT NULL DEFAULT 'order',
    "createdAt" TIMESTAMP DEFAULT now(),
    "updatedAt" TIMESTAMP DEFAULT now(),
    FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE
  );
`);
			});

			console.log(`Migrations aplicadas com sucesso no banco ${databaseName}.`);

			const hashedPassword = await bcrypt.hash(databasePassword, 8);

			await prisma.tenant.create({
				data: {
					companyId,
					subdomain,
					databaseName,
					databaseUser,
					databasePassword: hashedPassword,
				},
			});

			console.log(
				`Usuário do Postgres ${databaseUser} criado com sucesso com permissão no banco ${databaseName}.`
			);
		} catch (error) {
			console.error(
				`Erro ao criar banco de dados do tenant (${databaseName}):`,
				error
			);
			throw ApiResponse.error("Erro ao criar o banco de dados do tenant", 500);
		}
	}

	static async recreateTenantDatabase(companyId: string, companyName: string) {
		await this.dropTenant(companyId);

		await this.createTenantDatabase(companyId, companyName);
	}

	static async getTenantBySubdomain(subdomain: string) {
		try {
			const tenant = await prisma.tenant.findUnique({
				where: { subdomain },
				select: { companyId: true, databaseName: true },
			});

			return tenant;
		} catch (e) {
			console.log(e);
		}
	}

	static async dropTenant(companyId: string) {
		const currentTenant = await new CompanyService().getTenantOfUser(companyId);

		if (!currentTenant.data) {
			throw ApiResponse.error("Tenant não encontrado, logo não deletado", 400);
		}

		if (Array.isArray(currentTenant.data))
			await prisma.$executeRawUnsafe(
				`DROP DATABASE IF EXISTS ${currentTenant.data[0].databaseName};`
			);
		else
			await prisma.$executeRawUnsafe(
				`DROP DATABASE IF EXISTS ${currentTenant.data.databaseName};`
			);

		return;
	}
}
