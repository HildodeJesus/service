import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { LoadingProvider } from "@/hooks/use-loading";

const geistSans = Inter({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Cardapiou dashboard",
	description:
		"o Dashboard que Transforma a experiência do seu restaurante com um cardápio digital moderno, interativo e fácil de usar. Gerencie pratos, mesas, pedidos e comandas com um sistema ágil e integrado. Experimente agora!",
	keywords: ["dashboard cardápio digital", "dashboard cardápio online"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section className={`${geistSans.variable} antialiased`}>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<LoadingProvider>{children}</LoadingProvider>
				</SidebarInset>
			</SidebarProvider>
			<Toaster />
		</section>
	);
}
