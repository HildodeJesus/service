import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { GetPrismaClient } from "@/utils/getPrismaClient";

const prisma = GetPrismaClient.main();

const handler = NextAuth({
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

				if (
					credentials &&
					user &&
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
});

export { handler as GET, handler as POST };
