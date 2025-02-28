import { AuthService } from "@/services/auth.service";
import NextAuth, { getServerSession } from "next-auth";

const authOptions = new AuthService().authOptions;

const handler = NextAuth(authOptions);

export const getServerAuthSession = () => getServerSession(authOptions);

export { handler as GET, handler as POST };
