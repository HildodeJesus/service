import ShowProduct from "./components/ShowProduct";
import Header from "@/components/header";

export default function Page() {
	return (
		<div className="w-full p-3 lg:">
			<Header />
			<div className="flex flex-col p-6 gap-6 mx-auto max-w-[750px]">
				<ShowProduct />
			</div>
		</div>
	);
}
