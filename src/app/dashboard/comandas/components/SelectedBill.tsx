/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { OrderStatus } from "@/common/constants/OrderStatus";
import { IBillWithItems } from "@/common/interfaces/BillWithItems";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { BillService } from "@/services/bill.service";
import { handleShowOrderStatus } from "@/utils/handleShowOrderStatus";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

interface SelectedOrderProps {
	selected?: IBillWithItems;
}
export default function SelectedBill({ selected }: SelectedOrderProps) {
	const isMobile = useIsMobile();
	const { data: session } = useSession();

	const handleCancel = async () => {
		try {
			if (!selected?.id || !session?.user.name) {
				toast("Inválido ordem");
				return;
			}
			await new BillService(session?.user.name).deleteOrder(selected?.id);

			toast("deletado com sucesso!");
			toast("Recarregue a página!");
		} catch (error: any) {
			toast(error.message);
		}
	};

	// const handlePayment = async () => {
	// 	try {
	// 		if (!selected?.id || !session?.user.name) {
	// 			toast("Inválido ordem");
	// 			return;
	// 		}
	// 		await new BillService(session?.user.name).updateBillStatus(selected?.id, {
	// 			status: BillStatus.CLOSED,
	// 		});

	// 		toast("deletado com sucesso!");
	// 		toast("Recarregue a página!");
	// 	} catch (error: any) {
	// 		toast(error.message);
	// 	}
	// };

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
				<h1 className="text-lg font-bold">Detalhes da comanda</h1>
				<div className=" rounded-xl p-2 flex flex-col h-full">
					<div className="border-b p-3">
						<div className="flex justify-between items-center">
							<div className="flex flex-col items-center">
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
					<div className="border-b p-3 flex-1">
						<ul className="w-full h-full overflow-y-auto">
							{selected?.billItems.map(item => (
								<li
									className="flex px-2 py-3 items-center justify-between"
									key={item.order?.id}
								>
									<div className="flex gap-3 items-center">
										<div>#{item.order?.id.substring(0, 10)}</div>
										<div className="flex flex-col">
											<span
												className={`font-bold py-1 px-3 rounded-md ${
													item.order?.status == OrderStatus.PENDING
														? "bg-yellow-200 border border-yellow-600 text-yellow-600"
														: "bg-blue-200 border border-blue-600 text-blue-600"
												}`}
											>
												{handleShowOrderStatus(item.order?.status as string)}
											</span>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="p-3 flex items-center justify-between">
						<span className="">Total</span>
						<span className="font-bold text-lg">
							{Number(selected?.total)?.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
						</span>
					</div>
				</div>
				<div className="w-full py-3 flex items-center justify-end gap-2">
					{selected?.status == "open" && (
						<Button variant="destructive" onClick={() => handleCancel()}>
							<Trash2 />
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
