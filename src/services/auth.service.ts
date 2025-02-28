import { ICompany } from "@/common/interfaces/Company";
import { GetPrismaClient } from "@/utils/getPrismaClient";
import bcrypt from "bcryptjs";
import { DefaultSession, NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const prisma = GetPrismaClient.main();

declare module "next-auth" {
	interface Session extends DefaultSession {
		user: ICompany;
	}
}

export class AuthService {
	authOptions: NextAuthOptions = {
		providers: [
			Credentials({
				name: "Credentials",
				credentials: {
					email: { label: "E-mail" },
					password: { label: "Password", type: "password" },
				},

				async authorize(credentials) {
					const user = await prisma.company.findUnique({
						where: { email: credentials?.email },
					});

					if (!user) return null;

					if (
						credentials &&
						(await bcrypt.compare(credentials?.password, user.password))
					) {
						return { id: user.id, name: user.name, email: user.email };
					} else {
						return null;
					}
				},
			}),
		],

		pages: {
			signIn: "/login",
		},

		callbacks: {
			async session({ session, token }) {
				return {
					...session,
					user: {
						...session.user,
						id: token.sub,
					},
				};
			},
		},

		session: {
			strategy: "jwt",
		},
	};
}
