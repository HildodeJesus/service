/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { IDish } from "@/common/interfaces/Dish";
import SaveDish from "@/components/saveDish";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { usePagination } from "@/hooks/use-pagination";
import { DishesApi } from "@/lib/api/Dishes";
import { ArrowDown01, ArrowUp01 } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export default function DishesTable() {
	const { data } = useSession();
	const [search, setSearch] = useState("");
	const [dishes, setDishes] = useState<IDish[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const { order, page, take, changeOrder } = usePagination();

	const fetchDishes = useCallback(async () => {
		try {
			setIsLoading(true);
			if (!data?.user.name) return;
			const productsRes = await new DishesApi(data?.user.name).getAll(
				{ order, page, take },
				search
			);

			setDishes(productsRes.data);
		} catch (error: any) {
			console.log(error);
			toast(error.data.message);
		} finally {
			setIsLoading(false);
		}
	}, [order, page, take, search, data?.user.name]);

	useEffect(() => {
		fetchDishes();
	}, [order, page, take, search, fetchDishes]);

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
					<SaveDish onAction={fetchDishes} />
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
					) : dishes && dishes.length > 0 ? (
						dishes.map(dish => (
							<Link
								key={dish.id}
								href={`pratos/${dish.id}`}
								className="border shadow-md cursor-pointer py-3 px-4 rounded-xl w-full max-w-[290px] flex  flex-col transition-colors hover:scale-105 duration-150 gap-1 transition-none"
							>
								<div className="w-full h-[250px] bg-gray-100 overflow-hidden rounded-lg"></div>

								<span className="">{dish.name}</span>
								<div>
									<span className="text-lg font-bold">
										{Number(dish.price).toLocaleString("pt-BR", {
											style: "currency",
											currency: "BRL",
										})}
									</span>
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
