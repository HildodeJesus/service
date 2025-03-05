import Header from "@/components/header";

export default function Page() {
	return (
		<>
			<Header />
			<main className="p-3 lg:p-6 w-full h-full">
				<div className="w-full h-full max-w-[900px] mx-auto">
					<h1 className="text-xl lg:text-2xl font-bold">Produtos</h1>
					<p className="text-sm text-orange-500">
						Gerencie seus produtos em estoque
					</p>
				</div>
			</main>
		</>
	);
}
