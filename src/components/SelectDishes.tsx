/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { PlusCircle, UtensilsCrossed } from "lucide-react";
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

import { usePagination } from "@/hooks/use-pagination";
import { IDish } from "@/common/interfaces/Dish";
import { DishesApi } from "@/lib/api/Dishes";
import { IOrderWithItems } from "@/common/interfaces/OrderWithItems";

interface SaveDishProps {
	selectedDishes: IOrderWithItems["orderItems"];
	handleSelected: (dish: IDish) => void;
}

export default function SelectDishes({
	handleSelected,
	selectedDishes,
}: SaveDishProps) {
	const { data: sessionData } = useSession();
	const [dishes, setDishes] = useState<IDish[] | []>([]);
	const { order, page, take } = usePagination();

	useEffect(() => {
		const fetchDishes = async () => {
			try {
				if (!sessionData?.user.name) return;
				const productsRes = await new DishesApi(sessionData?.user.name).getAll({
					order,
					page,
					take,
				});

				setDishes(productsRes.data);
			} catch (error: any) {
				toast(error.data.message);
			}
		};

		fetchDishes();
	}, [order, take, page, sessionData?.user.name]);

	return (
		<>
			<Dialog>
				<DialogTrigger className=" flex items-center gap-3 rounded-lg text-green-600 font-bold">
					<PlusCircle size={20} />
				</DialogTrigger>
				<DialogContent className="h-max">
					<DialogHeader>
						<DialogTitle>Selecionando Pratos</DialogTitle>
					</DialogHeader>

					<ul className="w-full flex flex-col gap-2 max-h-[500px] h-full overflow-y-auto">
						{dishes.map(dish => (
							<li
								key={dish.id}
								className="py-2 px-3 flex cursor-pointer items-center justify-between border rounded-lg gap-2"
								onClick={() => handleSelected(dish)}
							>
								<div className="flex gap-3 items-center">
									<UtensilsCrossed />
									<div className="flex flex-col">
										<span>{dish.name}</span>
										<span className="text-sm">
											{dish.price.toLocaleString("pt-BR", {
												style: "currency",
												currency: "BRL",
											})}
										</span>
									</div>
								</div>

								<div className="flex gap-2">
									<div className="flex text-sm gap-1">
										<span>
											{selectedDishes.find(dis => dis.dish.id == dish.id)
												?.quantity ?? 0}
										</span>
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
