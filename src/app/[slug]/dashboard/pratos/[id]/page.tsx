import Header from "@/components/header";
import ShowDish from "./components/ShowDishes";

export default function Page() {
	return (
		<div className="w-full p-3 lg:">
			<Header />
			<div className="flex flex-col p-6 gap-6 mx-auto max-w-[750px]">
				<ShowDish />
			</div>
		</div>
	);
}
