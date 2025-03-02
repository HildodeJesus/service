/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { IPaginationClient } from "@/common/interfaces/Pagination";
import { IProduct } from "@/common/interfaces/Product";
import SaveProduct from "@/components/saveProduct";
import ShowProduct from "@/components/showProduct";
import { Input } from "@/components/ui/input";
import { ProductsApi } from "@/lib/api/Products";
import { ArrowDown01, ArrowUp01 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useReducer, useState } from "react";
import { toast } from "sonner";

type PaginationAction =
	| { type: "change_order" }
	| { type: "increment_page" }
	| { type: "decrement_page" }
	| { type: "set_take"; payload: number };

function reducer(
	state: IPaginationClient,
	action: PaginationAction
): IPaginationClient {
	switch (action.type) {
		case "change_order":
			return { ...state, order: state.order === "desc" ? "asc" : "desc" };
		case "increment_page":
			return { ...state, page: state.page + 1 };
		case "decrement_page":
			return { ...state, page: Math.max(1, state.page - 1) };
		case "set_take":
			return { ...state, take: action.payload };
		default:
			return state;
	}
}

export default function ProductsTable() {
	const { data } = useSession();
	const [search, setSearch] = useState("");
	const [products, setProducts] = useState<IProduct[]>([]);
	const [state, dispatch] = useReducer(reducer, {
		order: "desc",
		take: 10,
		page: 1,
	});

	const fetchProducts = async () => {
		try {
			if (!data?.user.name) return;
			const productsRes = await new ProductsApi(data?.user.name).getAll(
				state,
				search
			);

			setProducts(productsRes.data);
		} catch (error: any) {
			toast(error.data.message);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, [state, data?.user.name, search]);

	return (
		<div className="w-full h-max mt-5">
			<div className="flex justify-between items-center w-full flex-wrap gap-5">
				<div className="flex items-center gap-3 ">
					<Input
						type="text"
						value={search}
						onChange={e => setSearch(e.target.value)}
						placeholder="Pesquisar..."
						className="bg-[#f5f5f5] w-64 lg:w-auto"
					/>
					<div onClick={() => dispatch({ type: "change_order" })}>
						{state.order == "desc" ? <ArrowUp01 /> : <ArrowDown01 />}
					</div>
				</div>

				<div className="flex">
					<SaveProduct onAction={fetchProducts} />
				</div>

				<ul className="w-full flex justify-center flex-wrap gap-3">
					{products.map(product => (
						<ShowProduct key={product.id} selectedProduct={product} />
					))}
				</ul>
			</div>
		</div>
	);
}
