/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { IOrderWithItems } from "@/common/interfaces/OrderWithItems";
import SaveOrder from "@/components/saveOrder";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { OrdersApi } from "@/lib/api/Orders";
import { Aws } from "@/lib/aws";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { toast } from "sonner";

interface SelectedOrderProps {
	selected?: IOrderWithItems;
}
export default function SelectedOrder({ selected }: SelectedOrderProps) {
	const isMobile = useIsMobile();
	const { data: session } = useSession();

	const total = selected?.orderItems.reduce<number>((acc, cur) => {
		return acc + cur.quantity * cur.dish.price;
	}, 0);

	const handleCancel = async () => {
		try {
			if (!selected?.id || !session?.user.name) {
				toast("Inválido ordem");
				return;
			}
			await new OrdersApi(session?.user.name).update(selected?.id, {
				status: "canceled",
			});

			toast("deletado com sucesso!");
			toast("Recarregue a página!");
		} catch (error: any) {
			toast(error.message);
		}
	};

	return (
		<div
			className={`${
				selected
					? isMobile
						? "w-full absolute bg-black/60"
						: "flex-1"
					: "w-0 h-0"
			} transition-all duration-300 h-full rounded-xl flex flex-col gap-5`}
		>
			<div
				className={`h-full border p-5 rounded-xl flex flex-col shadow-md gap-5 ${
					isMobile ? "bg-white" : "transparent"
				}`}
			>
				<h1 className="text-lg font-bold">Detalhes do pedido</h1>
				<div className="border rounded-xl p-2 flex flex-col h-full">
					<div className="border-b p-3">
						<div className="flex justify-between">
							<div className="flex flex-col">
								<span>
									Pedido de{" "}
									{selected?.client ? selected.client.name : "desconhecido"}
								</span>
								{selected && (
									<span className="text-black/60 text-sm">
										{format(selected.createdAt, "dd 'de' MMMM 'às' HH:mm")}
									</span>
								)}
							</div>
							<div className="flex items-center gap-2">
								{selected?.client ? (
									<>
										<Avatar>
											<AvatarFallback>
												{selected?.client.name?.substring(0, 2)}
											</AvatarFallback>
										</Avatar>
										<span className="text-sm">{selected?.client.name}</span>
									</>
								) : (
									<span>Cliente desconhecido</span>
								)}
							</div>
						</div>
					</div>
					<div className="border-b p-3">
						<div className="flex">
							<div className="flex flex-col">
								<span>Endereço de Entrega</span>
								<span className="text-sm text-black/60">
									Sistema de entrega ainda não disponível
								</span>
							</div>
						</div>
					</div>
					<div className="border-b p-3 flex-1">
						<ul className="w-full h-full overflow-y-auto">
							{selected?.orderItems.map(item => (
								<li
									className="flex px-2 py-3 items-center justify-between"
									key={item.dish.id}
								>
									<div className="flex gap-3">
										{item.dish.picture && (
											<Image
												alt="Imagem do prato"
												height={70}
												width={70}
												className="h-full"
												src={Aws.getObjectUrl(item.dish.picture)}
											/>
										)}
										<div className="flex flex-col">
											<span className="font-bold">{item.dish.name}</span>
											<span className="text-black/60 text-sm">
												x{item.quantity}
											</span>
										</div>
									</div>
									<div className="flex gap-1">
										<strong className="text-green-600">+</strong>
										{(item.quantity * item.dish.price).toLocaleString("pt-BR", {
											style: "currency",
											currency: "BRL",
										})}
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="p-3 flex items-center justify-between">
						<span className="">Total</span>
						<span className="font-bold text-lg">
							{total?.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
						</span>
					</div>
				</div>
				<div className="w-full py-3 flex items-center justify-end gap-2">
					{selected?.status == "pending" && (
						<Button variant="destructive" onClick={() => handleCancel()}>
							<Trash2 />
						</Button>
					)}

					<SaveOrder defaultValue={selected} />
				</div>
			</div>
		</div>
	);
}
