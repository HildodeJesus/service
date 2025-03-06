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
		const subdomain = companyName.toLowerCase();
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
          CREATE TYPE role AS ENUM ('admin', 'waiter', 'kitchen');
        `);

				await tx.$executeRawUnsafe(`
          CREATE TYPE unit AS ENUM ('unit', 'kg', 'liter');
        `);
				await tx.$executeRawUnsafe(`
          CREATE TYPE order_type AS ENUM ('dine_in', 'takeout', 'delivery');
        `);
				await tx.$executeRawUnsafe(`
          CREATE TYPE order_status AS ENUM ('pending', 'preparing', 'delivered', 'canceled');
        `);
				await tx.$executeRawUnsafe(`
          CREATE TYPE bill_status AS ENUM ('open', 'closed');
        `);
				await tx.$executeRawUnsafe(`
          CREATE TYPE payment_method AS ENUM ('cash', 'card', 'pix');
        `);
				await tx.$executeRawUnsafe(`
          CREATE TYPE payment_status AS ENUM ('pending', 'paid');
        `);
				await tx.$executeRawUnsafe(`
          CREATE TYPE movement_type AS ENUM ('in', 'out');
        `);
				await tx.$executeRawUnsafe(`
          CREATE TYPE reference_type AS ENUM ('order', 'manual_adjustment');
        `);

				await tx.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS "User" (
            "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            "name" VARCHAR(255) NOT NULL,
            "email" VARCHAR(255) NOT NULL,
            "password" VARCHAR(255) NOT NULL,
            "role" role DEFAULT 'waiter',
            "createdAt" TIMESTAMP DEFAULT now(),
            "updatedAt" TIMESTAMP DEFAULT now()
          );
        `);

				await tx.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS "Client" (
            "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            "name" VARCHAR(255),
            "phone" VARCHAR(255) NOT NULL,
            "createdAt" TIMESTAMP DEFAULT now(),
            "updatedAt" TIMESTAMP DEFAULT now()
          );
        `);

				await tx.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS "Table" (
            "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            "number" INT NOT NULL,
            "qrcode" VARCHAR(255) NOT NULL,
            "createdAt" TIMESTAMP DEFAULT now(),
            "updatedAt" TIMESTAMP DEFAULT now()
          );
        `);

				await tx.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS "Category" (
            "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            "name" VARCHAR(255) NOT NULL,
            "createdAt" TIMESTAMP DEFAULT now(),
            "updatedAt" TIMESTAMP DEFAULT now()
          );
        `);

				await tx.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS "Product" (
            "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            "name" VARCHAR(255) NOT NULL,
            "quantity" DECIMAL NOT NULL,
            "minimumQuantity" DECIMAL DEFAULT 0,
            "unit" unit NOT NULL DEFAULT 'unit',
            "price" DECIMAL NOT NULL,
            "picture" VARCHAR(255),
            "createdAt" TIMESTAMP DEFAULT now(),
            "updatedAt" TIMESTAMP DEFAULT now()
          );
        `);

				await tx.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS "Dish" (
            "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            "name" VARCHAR(255) NOT NULL,
            "description" TEXT,
            "price" DECIMAL NOT NULL,
            "cost" DECIMAL NOT NULL,
            "categoryId" UUID NOT NULL,
            "picture" VARCHAR(255),
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
            "orderType" order_type NOT NULL DEFAULT 'dine_in',
            "status" order_status NOT NULL DEFAULT 'pending',
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
            "createdAt" TIMESTAMP DEFAULT now(),
            "updatedAt" TIMESTAMP DEFAULT now(),
            FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE,
            FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE CASCADE
          );
        `);

				await tx.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS "Bill" (
            "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            "tableId" UUID,
            "clientId" UUID NOT NULL,
            "status" bill_status NOT NULL DEFAULT 'open',
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
            FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE
          );
        `);

				await tx.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS "Payment" (
            "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            "billId" UUID NOT NULL,
            "amount" DECIMAL NOT NULL,
            "paymentMethod" payment_method NOT NULL DEFAULT 'cash',
            "status" payment_status NOT NULL DEFAULT 'pending',
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
            "movementType" movement_type NOT NULL DEFAULT 'in',
            "referenceId" UUID,
            "referenceType" reference_type NOT NULL DEFAULT 'order',
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
		const tenant = await prisma.tenant.findUnique({
			where: { subdomain },
			select: { companyId: true, databaseName: true },
		});

		console.log(tenant);

		if (!tenant) throw ApiResponse.error("Banco tenant não criado!", 400);

		return tenant;
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
