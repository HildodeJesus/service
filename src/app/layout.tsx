import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Inter({
	variable: "--font-geist-sans",
	subsets: ["latin"],
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
		<html lang="en">
			<body className={`${geistSans.variable} antialiased`}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
