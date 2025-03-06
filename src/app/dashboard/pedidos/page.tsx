import Header from "@/components/header";
import OrderTable from "./components/OrderTable";

export default function Page() {
	return (
		<>
			<Header />
			<main className="p-3 lg:p-6 w-full h-full ">
				<div className="w-full h-full mx-auto flex flex-col">
					<h1 className="text-xl lg:text-2xl font-bold">Pedidos</h1>
					<OrderTable />
				</div>
			</main>
		</>
	);
}
