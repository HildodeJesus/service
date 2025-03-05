import { AuthService } from "@/services/auth.service";
import NextAuth from "next-auth";

const authOptions = new AuthService().authOptions;

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
