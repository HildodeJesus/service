/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { IProduct } from "@/common/interfaces/Product";
import SaveProduct from "@/components/saveProduct";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { usePagination } from "@/hooks/use-pagination";
import { ProductsApi } from "@/lib/api/Products";
import { handleShowUnit } from "@/utils/handleShowUnit";
import { ArrowDown01, ArrowUp01 } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ProductsTable() {
	const { data } = useSession();
	const [search, setSearch] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState<IProduct[]>([]);
	const { order, page, take, changeOrder } = usePagination();

	const fetchProducts = async () => {
		try {
			setIsLoading(true);
			if (!data?.user.name) return;
			const productsRes = await new ProductsApi(data?.user.name).getAll(
				{ order, page, take },
				search
			);

			setProducts(productsRes.data);
		} catch (error: any) {
			toast(error.data.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, [order, page, take, search]);

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
					<div onClick={() => changeOrder()}>
						{order == "desc" ? <ArrowUp01 /> : <ArrowDown01 />}
					</div>
				</div>

				<div className="flex">
					<SaveProduct onAction={fetchProducts} />
				</div>

				<ul className="w-full flex justify-center flex-wrap gap-3">
					{isLoading ? (
						Array.from({ length: 9 }).map((_, i) => (
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
						))
					) : products && products.length > 0 ? (
						products.map(product => (
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
											/{handleShowUnit(product.unit)}
										</strong>
									</span>
								</div>
								<div className="flex text-sm items-center justify-between w-full">
									<div className="flex gap-2">
										<span>Qtd:</span>
										<span>
											{product.quantity}{" "}
											<span className="font-normal text-sm">
												{handleShowUnit(product.unit)}
											</span>
										</span>
									</div>

									<div className="flex gap-2">
										<span>min:</span>
										<span>
											{product.minimumQuantity}{" "}
											<span className="font-normal text-sm">
												{handleShowUnit(product.unit)}
											</span>
										</span>
									</div>
								</div>
							</Link>
						))
					) : (
						<div className="w-full py-6">
							<span className="text-black/60">Não há produtos</span>
						</div>
					)}
				</ul>
			</div>
		</div>
	);
}
