/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import DeleteButton from "./DeleteButton";
import { Skeleton } from "@/components/ui/skeleton";
import { DishesApi } from "@/lib/api/Dishes";
import { IDishWithItems } from "@/common/interfaces/DishWithItems";
import Image from "next/image";
import { Camera } from "lucide-react";
import { Aws } from "@/lib/aws";
import SaveDish from "@/components/saveDish";

export default function ShowDish() {
	const { data: session } = useSession();
	const { id } = useParams<{ id: string }>();
	const [dish, setDish] = useState<IDishWithItems>();
	const [margin, setMargin] = useState<number>(0);

	useEffect(() => {
		if (!id || !session?.user.name) return;
		const fetchData = async () => {
			try {
				const resProduct = await new DishesApi(session?.user.name).getOne(id);

				setDish(resProduct.data);
				setMargin(Number(resProduct.data.price) - Number(resProduct.data.cost));
			} catch (e: any) {
				toast(e.message);
			}
		};

		fetchData();
	}, [id, session?.user.name]);

	return (
		<>
			<div className="flex w-full gap-5">
				{dish ? (
					<>
						<div className="w-[250px] h-[250px] bg-gray-100 overflow-hidden rounded-lg flex items-center justify-center">
							{dish.picture ? (
								<Image
									src={Aws.getObjectUrl(dish.picture)}
									width={250}
									height={250}
									alt=""
								/>
							) : (
								<span className="text-gray-400">
									<Camera size={50} />
								</span>
							)}
						</div>
						<div className="flex-1 flex gap-3 flex-col ">
							<div className="w-full flex gap-4 justify-end">
								{dish && <SaveDish defaultValue={dish} />}
								<DeleteButton />
							</div>

							<div className="flex items-end capitalize text-lg">
								<p className=" text-black">{dish.name}</p>
							</div>

							<div className="flex items-start gap-3">
								<span className="text-3xl font-bold">
									{Number(dish?.price).toLocaleString("pt-BR", {
										style: "currency",
										currency: "BRL",
									})}
								</span>
							</div>

							<div className="flex items-end">
								<p className=" text-black/60">{dish.description}</p>
							</div>

							<div className="flex items-center justify-between gap-3">
								<div className="font-bold">
									<span>Custo médio:</span>{" "}
									{Number(dish?.cost).toLocaleString("pt-BR", {
										style: "currency",
										currency: "BRL",
									})}
								</div>
								<div
									className={`${
										margin < 0 ? "text-red-500" : "text-green-500"
									}`}
								>
									<span>Margem de lucro:</span>{" "}
									<span>
										{margin.toLocaleString("pt-BR", {
											style: "currency",
											currency: "BRL",
										})}
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

			<div>
				<h2 className="text-lg font-bold">Ingredientes</h2>
				<ul className="flex w-full overflow-auto">
					{dish?.dishItems ? (
						dish?.dishItems.map(item => (
							<li
								key={item.product.id}
								className="flex flex-col p-2 w-24 h-auto text-sm border rounded-md shadow-xl"
							>
								<div className="w-20 h-20 bg-gray-200 rounded-md"></div>
								<span className="whitespace-nowrap overflow-hidden ">
									{item.product.name}
								</span>
								<span className="font-bold">
									{(Number(item.product.price) * item.quantity).toLocaleString(
										"pt-BR",
										{
											style: "currency",
											currency: "BRL",
										}
									)}
								</span>
							</li>
						))
					) : (
						<li></li>
					)}
				</ul>
			</div>
		</>
	);
}
