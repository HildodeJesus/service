import { ICompany } from "@/common/interfaces/Company";
import { GetPrismaClient } from "@/utils/getPrismaClient";
import bcrypt from "bcryptjs";
import { DefaultSession, getServerSession, NextAuthOptions } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";

const prisma = GetPrismaClient.main();

const isProduction = process.env.NODE_ENV === "production";
declare module "next-auth" {
	interface Session extends DefaultSession {
		user: Omit<
			ICompany,
			"createdAt" | "updatedAt" | "password" | "stripeCustomerId"
		>;
	}

	interface JWT extends DefaultJWT {
		id: string;
		name: string;
		email: string;
		subscriptionStatus: string;
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

					console.log(user);

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

		cookies: {
			sessionToken: {
				name: "next-auth.session-token",
				options: {
					httpOnly: true,
					secure: isProduction,
					sameSite: "lax",
					domain: isProduction ? `.${process.env.BASE_DOMAIN}` : undefined,
					path: "/",
				},
			},
		},

		callbacks: {
			async jwt({ token }) {
				const user = await prisma.company.findUnique({
					where: { email: token.email as string },
					select: {
						id: true,
						name: true,
						email: true,
						subscriptionStatus: true,
					},
				});

				if (!user) return {}; // Retorne o token original, não um objeto vazio

				return {
					...token,
					id: user.id,
					name: user.name,
					email: user.email,
					subscriptionStatus: user.subscriptionStatus,
				};
			},
			async session({ session, token }) {
				return {
					...session,
					user: {
						id: token.id,
						email: token.email,
						subscriptionStatus: token.subscriptionStatus,
						name: token.name,
					},
				};
			},
		},

		jwt: {
			maxAge: 60 * 60 * 3,
		},

		session: {
			strategy: "jwt",
			maxAge: 60 * 60 * 3,
		},
	};

	async getServerAuthSession() {
		return await getServerSession(this.authOptions);
	}
}
