import { CreateCompanyInput } from "@/common/schemas/company";
import { ApiResponse } from "@/utils/ApiResponse";
import { GetPrismaClient } from "@/utils/getPrismaClient";
import bcrypt from "bcryptjs";
import { TenantDatabaseService } from "./tenant.service";

export class CompanyService {
	async create({ email, name, password }: CreateCompanyInput) {
		const prisma = GetPrismaClient.main();

		const alredyExists = await prisma.company.findUnique({
			where: { email: email },
		});

		if (alredyExists)
			throw (
				(ApiResponse.error("Email já usado anteriormente", 400),
				{ status: 400 })
			);

		const hashedPassword = await bcrypt.hash(password, 8);

		const company = await prisma.company.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		});

		await TenantDatabaseService.createTenantDatabase(company.id);

		return ApiResponse.success("Criado com sucesso!", null, 200);
	}

	async getOne(id: string) {
		const prisma = GetPrismaClient.main();

		const company = await prisma.company.findUnique({
			where: { id: id },
		});

		if (!company)
			throw (
				(ApiResponse.error("Compania não encontrada", 400), { status: 400 })
			);

		return new ApiResponse<typeof company>("Criado com sucesso!", company, 200);
	}

	async getTenantOfUser(id: string) {
		const prisma = GetPrismaClient.main();

		const tenant = await prisma.tenant.findFirst({
			where: { companyId: id },
		});

		if (!tenant)
			throw (ApiResponse.error("Tenant não encontrado", 400), { status: 400 });

		return new ApiResponse<typeof tenant>("Criado com sucesso!", tenant, 200);
	}
}
