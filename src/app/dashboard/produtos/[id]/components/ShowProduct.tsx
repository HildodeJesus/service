/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { IDish } from "@/common/interfaces/Dish";
import { IProduct } from "@/common/interfaces/Product";
import SaveProduct from "@/components/saveProduct";
import { ProductsApi } from "@/lib/api/Products";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import DeleteButton from "./DeleteButton";
import { ProductUnit } from "@/common/constants/ProductUnit";
import { Skeleton } from "@/components/ui/skeleton";

export default function ShowProduct() {
	const { data: session } = useSession();
	const { id } = useParams<{ id: string }>();
	const [product, setProduct] = useState<IProduct | null>(null);
	// const [dishes, setDishes] = useState<IDish[] | []>([]);

	useEffect(() => {
		if (!id || !session?.user.name) return;
		const fetchData = async () => {
			try {
				const resProduct = await new ProductsApi(session?.user.name).getOne(id);
				console.log(resProduct);

				setProduct(resProduct.data);
			} catch (e: any) {
				console.log(e);
				toast(e.message);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<div className="flex w-full gap-5">
				{product ? (
					<>
						<div className="w-[250px] h-[250px] bg-gray-100 overflow-hidden rounded-lg"></div>
						<div className="flex-1 flex gap-3 flex-col ">
							<div className="w-full flex gap-4 justify-end">
								{product && <SaveProduct defaultValue={product} />}
								<DeleteButton />
							</div>
							<div className="flex items-end">
								<span className="text-3xl font-bold">
									{Number(product?.price).toLocaleString("pt-BR", {
										style: "currency",
										currency: "BRL",
									})}
								</span>

								<span className="text-xl lowercase">
									{" "}
									/
									{product?.unit == ProductUnit.LITER
										? "Litro"
										: product?.unit == ProductUnit.UNIT
										? "Unidade"
										: "KG"}
								</span>
							</div>

							<div className="flex justify-between w-full">
								<div className="flex flex-col">
									<span>Quantidade:</span>
									<span className="text-green-400">
										{Number(product?.quantity)}{" "}
										{product?.unit == ProductUnit.LITER
											? "Litro"
											: product?.unit == ProductUnit.UNIT
											? "Unidade"
											: "kg"}
									</span>
								</div>
								<div className="flex flex-col">
									<span>Quantidade miníma:</span>
									<span className="text-red-400">
										{Number(product?.minimumQuantity)}{" "}
										{product?.unit == ProductUnit.LITER
											? "Litro"
											: product?.unit == ProductUnit.UNIT
											? "Unidade"
											: "kg"}
									</span>
								</div>
							</div>
						</div>
					</>
				) : (
					<>
						<Skeleton className="h-[250px] w-[250px] rounded-xl" />
						<div className="flex-1 flex gap-3 flex-col ">
							<div className="w-full flex gap-4 justify-end">
								<Skeleton className="h-[30px] w-[250px] rounded-xl" />
							</div>
							<div className="flex items-end">
								<Skeleton className="h-[30px] w-[50px] rounded-xl" />
							</div>

							<div className="flex justify-between w-full">
								<div className="flex flex-col">
									<Skeleton className="h-[20px] w-[70px] rounded-xl" />
								</div>
								<div className="flex flex-col">
									<Skeleton className="h-[20px] w-[70px] rounded-xl" />
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
}
