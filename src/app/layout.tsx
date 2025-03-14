import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import AuthSessionProvider from "@/components/AuthSessionProvider";

const inter = Inter({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Cardapiou",
	description:
		"Transforme a experiência do seu restaurante com um cardápio digital moderno, interativo e fácil de usar. Gerencie pratos, mesas, pedidos e comandas com um sistema ágil e integrado. Experimente agora!",
	keywords: [
		"cardápio digital",
		"cardápio online",
		"menu digital",
		"sistema para restaurantes",
		"gestão de pedidos",
		"comanda digital",
		"pedidos online",
		"restaurante delivery",
		"automação para restaurantes",
		"criar cardápio digital",
		"melhor sistema de cardápio online",
		"software para restaurantes",
		"cardápio digital para delivery",
		"app de cardápio digital",
		"sistema de pedidos para restaurante",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${inter.className} antialiased`}>
				<AuthSessionProvider>
					<Suspense>{children}</Suspense>
				</AuthSessionProvider>

				<Toaster />
			</body>
		</html>
	);
}
