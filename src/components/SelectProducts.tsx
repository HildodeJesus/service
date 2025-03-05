/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { PlusCircle, ShoppingCart } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";

import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { IProduct } from "@/common/interfaces/Product";
import { usePagination } from "@/hooks/use-pagination";
import { ProductsApi } from "@/lib/api/Products";
import { handleShowUnit } from "@/utils/handleShowUnit";

interface SaveDishProps {
	selectedProducts: { product: IProduct; quantity: number }[];
	handleSelected: (produto: IProduct) => void;
}

export default function SelectedProduct({
	handleSelected,
	selectedProducts,
}: SaveDishProps) {
	const { data: sessionData } = useSession();
	const [products, setProducts] = useState<IProduct[] | []>([]);
	const { order, page, take } = usePagination();

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				if (!sessionData?.user.name) return;
				const productsRes = await new ProductsApi(
					sessionData?.user.name
				).getAll({
					order,
					page,
					take,
				});

				setProducts(productsRes.data);
			} catch (error: any) {
				toast(error.data.message);
			}
		};

		fetchProducts();
	}, [order, take, page, sessionData?.user.name]);

	return (
		<>
			<Dialog>
				<DialogTrigger className=" flex items-center gap-3 rounded-lg text-green-600 font-bold">
					<PlusCircle size={20} />
				</DialogTrigger>
				<DialogContent className="h-max">
					<DialogHeader>
						<DialogTitle>Selecionando produtos</DialogTitle>
					</DialogHeader>

					<ul className="w-full flex flex-col gap-2 max-h-[500px] h-full overflow-y-auto">
						{products.map(product => (
							<li
								key={product.id}
								className="py-2 px-3 flex cursor-pointer items-center justify-between border rounded-lg gap-2"
								onClick={() => handleSelected(product)}
							>
								<div className="flex gap-3 items-center">
									<ShoppingCart />
									<div className="flex flex-col">
										<span>{product.name}</span>
										<span className="text-sm">
											Qtd: {product.quantity} {handleShowUnit(product.unit)}
										</span>
									</div>
								</div>

								<div className="flex gap-2">
									<div className="flex text-sm gap-1">
										<span>
											{selectedProducts.find(
												pro => pro.product.id == product.id
											)?.quantity ?? 0}
										</span>
										<span>{handleShowUnit(product.unit)}</span>
									</div>
								</div>
							</li>
						))}
					</ul>
				</DialogContent>
			</Dialog>
		</>
	);
}
