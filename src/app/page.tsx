import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
	const data = await getServerSession();

	const dashboardUrl = data ? `/dashboard` : "/login";

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col items-center justify-center">
				<h1>Seja bem-vindo ao Cardápiou</h1>
				<Link href={dashboardUrl} className="text-orange-600">
					Acessar sistema
				</Link>
			</main>
		</div>
	);
}
