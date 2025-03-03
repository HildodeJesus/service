/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ProductUnit } from "@/common/constants/ProductUnit";
import { IPaginationClient } from "@/common/interfaces/Pagination";
import { IProduct } from "@/common/interfaces/Product";
import SaveProduct from "@/components/saveProduct";
import ShowProduct from "@/components/showProduct";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductsApi } from "@/lib/api/Products";
import { ArrowDown01, ArrowUp01 } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
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
		take: 9,
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
					{products && products.length > 0
						? products.map(product => (
								<Link
									key={product.id}
									href={`/dashboard/produtos/${product.id}`}
									className="border shadow-md cursor-pointer py-3 px-4 rounded-xl w-full max-w-[290px] flex  flex-col transition-colors hover:scale-105 duration-150 gap-1 transition-none"
								>
									<div className="w-full h-[250px] bg-gray-100 overflow-hidden rounded-lg"></div>

									<span className="">{product.name}</span>
									<div>
										<span className="text-lg font-bold">
											{Number(product.price).toLocaleString("pt-BR", {
												style: "currency",
												currency: "BRL",
											})}
											<strong className="font-normal text-sm">
												/
												{product.unit == ProductUnit.LITER
													? "litro"
													: product.unit == ProductUnit.UNIT
													? "unidade"
													: "KG"}
											</strong>
										</span>
									</div>
									<div className="flex text-sm items-center justify-between w-full">
										<div className="flex gap-2">
											<span>Qtd:</span>
											<span>
												{product.quantity}{" "}
												<span className="font-normal text-sm">
													{product.unit == ProductUnit.LITER
														? "litro"
														: product.unit == ProductUnit.UNIT
														? "unidade"
														: "KG"}
												</span>
											</span>
										</div>

										<div className="flex gap-2">
											<span>min:</span>
											<span>
												{product.minimumQuantity}{" "}
												<span className="font-normal text-sm">
													{product.unit == ProductUnit.LITER
														? "litro"
														: product.unit == ProductUnit.UNIT
														? "unidade"
														: "KG"}
												</span>
											</span>
										</div>
									</div>
								</Link>
						  ))
						: Array.from({ length: 9 }).map((_, i) => (
								<div
									key={i}
									className="border shadow-md cursor-pointer py-3 px-4 rounded-xl w-full max-w-[290px] flex  flex-col transition-colors hover:scale-105 duration-150 gap-1 transition-none"
								>
									<Skeleton className="w-full h-[250px]" />
									<Skeleton className="w-[100px] h-[20px]" />
									<Skeleton className="w-[30px] h-[20px]" />
									<div className="flex text-sm items-center justify-between w-full">
										<div className="flex gap-2">
											<Skeleton className="w-[50px] h-[20px]" />
										</div>

										<div className="flex gap-2">
											<Skeleton className="w-[50px] h-[20px]" />
										</div>
									</div>
								</div>
						  ))}
				</ul>
			</div>
		</div>
	);
}
