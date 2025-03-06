/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { PlusCircle, Edit2 } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { CreateOrderInput, CreateOrderSchema } from "@/common/schemas/order";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

import { IClient } from "@/common/interfaces/Client";
import { IDish } from "@/common/interfaces/Dish";
import { OrderType } from "@/common/constants/OrderType";
import { OrderStatus } from "@/common/constants/OrderStatus";
import { ClientsApi } from "@/lib/api/Client";

import { OrdersApi } from "@/lib/api/Orders";
import { handleShowOrderType } from "@/utils/handleShowOrderTypes";
import { handleShowOrderStatus } from "@/utils/handleShowOrderStatus";
import { IOrderWithItems } from "@/common/interfaces/OrderWithItems";
import SelectDishes from "./SelectDishes";
import { IOrderItem } from "@/common/interfaces/OrderItem";
import SaveClient from "./saveClient";

interface SaveOrderProps {
	defaultValue?: IOrderWithItems;
	onAction?: () => Promise<void>;
}

export default function SaveOrder({ defaultValue, onAction }: SaveOrderProps) {
	const { data: sessionData } = useSession();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [clients, setClients] = useState<IClient[]>([]);
	const [orderItems, setOrderItems] = useState<IOrderItem[]>(
		defaultValue?.orderItems || []
	);

	const {
		handleSubmit,
		reset,
		setValue,
		watch,
		formState: { errors },
	} = useForm<CreateOrderInput>({
		resolver: zodResolver(CreateOrderSchema),
		defaultValues: {
			clientId: defaultValue?.clientId || "",
			orderType: (defaultValue?.orderType as OrderType) || "dine-in",
			status: (defaultValue?.status as OrderStatus) || "pending",
			orderItems:
				defaultValue?.orderItems?.map(item => ({
					dishId: item.dish?.id,
					quantity: Number(item.quantity),
				})) || [],
		},
	});

	const selectedClientId = watch("clientId");
	const selectedOrderType = watch("orderType");
	const selectedStatus = watch("status");

	const fetchClients = useCallback(async () => {
		try {
			if (!sessionData?.user.name) return;
			const clientsRes = await new ClientsApi(sessionData?.user.name).getAll();
			setClients(clientsRes.data);
		} catch (error: any) {
			toast(error.data.message);
		}
	}, [sessionData?.user.name]);

	useEffect(() => {
		fetchClients();
	}, [fetchClients]);

	useEffect(() => {
		const formattedOrderItems = orderItems.map(item => ({
			dishId: item.dish?.id as string,
			quantity: Number(item.quantity),
		}));
		setValue("orderItems", formattedOrderItems);

		setValue("orderType", selectedOrderType || OrderType.DINE_IN);
		setValue("status", selectedStatus || OrderStatus.PENDING);
	}, [orderItems, setValue, selectedOrderType, selectedStatus]);

	const handleSelectDish = (dish: IDish) => {
		setOrderItems(prevItems => {
			const existingItemIndex = prevItems.findIndex(
				item => item.dish.id === dish.id
			);

			if (existingItemIndex !== -1) {
				return prevItems.map((item, index) =>
					index === existingItemIndex
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}

			return [...prevItems, { dish, quantity: 1 }];
		});
	};

	const removeOrderItem = (dishId: string) => {
		setOrderItems(prevItems =>
			prevItems.filter(item => item.dish.id !== dishId)
		);
	};

	const updateOrderItemQuantity = (dishId: string, quantity: number) => {
		if (quantity <= 0) {
			removeOrderItem(dishId);
			return;
		}

		setOrderItems(prevItems =>
			prevItems.map(item =>
				item.dish.id === dishId
					? {
							...item,
							quantity: isNaN(quantity)
								? item.quantity
								: parseFloat(quantity.toFixed(2)),
					  }
					: item
			)
		);
	};

	const onSubmit: SubmitHandler<CreateOrderInput> = async data => {
		try {
			console.log(data);
			setIsSubmitting(true);
			if (!sessionData?.user.name) return;

			const api = new OrdersApi(sessionData?.user.name);

			if (defaultValue?.id) {
				await api.update(defaultValue.id, data);
				toast("Pedido atualizado com sucesso!");
			} else {
				await api.create(data);
				toast("Pedido criado com sucesso!");
			}

			reset();
			setOrderItems([]);
			if (onAction) await onAction();
		} catch (e: any) {
			console.error(e);
			toast(e.message || "Erro ao salvar o pedido. Tente novamente.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Dialog>
			<DialogTrigger className="bg-orange-500 hover:bg-orange-600 flex items-center py-2 text-sm px-3 gap-3 rounded-lg text-white font-bold">
				{defaultValue?.id ? <Edit2 className="size-4" /> : <PlusCircle />}
				{defaultValue?.id ? "Editar pedido" : "Adicionar pedido"}
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						{defaultValue?.id ? "Editar pedido" : "Criar pedido"}
					</DialogTitle>
				</DialogHeader>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="grid grid-cols-2 gap-4"
				>
					<div>
						<Label>Tipo de Pedido</Label>
						<Select
							value={selectedOrderType}
							onValueChange={value => setValue("orderType", value as OrderType)}
						>
							<SelectTrigger>
								<SelectValue placeholder="Selecione o tipo" />
							</SelectTrigger>
							<SelectContent>
								{Object.keys(OrderType).map(ty => (
									<SelectItem
										key={ty}
										value={OrderType[ty as keyof typeof OrderType]}
									>
										{handleShowOrderType(
											OrderType[ty as keyof typeof OrderType]
										)}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						{errors.orderType && (
							<span className="text-red-500 text-sm">
								{errors.orderType.message}
							</span>
						)}
					</div>

					<div>
						<Label>Status do Pedido</Label>
						<Select
							value={watch("status")}
							onValueChange={value => setValue("status", value as OrderStatus)}
						>
							<SelectTrigger>
								<SelectValue placeholder="Selecione o status" />
							</SelectTrigger>
							<SelectContent>
								{Object.keys(OrderStatus).map(ty => (
									<SelectItem
										key={ty}
										value={OrderStatus[ty as keyof typeof OrderStatus]}
									>
										{handleShowOrderStatus(
											OrderStatus[ty as keyof typeof OrderStatus]
										)}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						{errors.status && (
							<span className="text-red-500 text-sm">
								{errors.status.message}
							</span>
						)}
					</div>

					<div className="col-span-2">
						<Label>Cliente</Label>
						<div className="flex items-center gap-2">
							<Select
								value={selectedClientId}
								onValueChange={value => setValue("clientId", value)}
							>
								<SelectTrigger>
									<SelectValue placeholder="Selecione o cliente" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										{clients.length > 0 ? (
											clients.map(client => (
												<SelectItem key={client.id} value={client.id}>
													{client.name}
												</SelectItem>
											))
										) : (
											<SelectLabel>Não há clientes</SelectLabel>
										)}
									</SelectGroup>
								</SelectContent>
							</Select>
							<SaveClient onAction={fetchClients} style="outline" />
						</div>
						{errors.clientId && (
							<span className="text-red-500 text-sm">
								{errors.clientId.message}
							</span>
						)}
					</div>

					<div className="col-span-2">
						<div className="flex gap-2 mb-2">
							<h2 className="font-bold">Itens do Pedido</h2>
							<SelectDishes
								handleSelected={handleSelectDish}
								selectedDishes={orderItems}
							/>
						</div>
						<ul className="flex overflow-x-auto w-full gap-3 pb-2">
							{orderItems.length > 0 ? (
								orderItems.map(item => (
									<li
										key={item.dish.id}
										className="flex gap-1 flex-col border p-2 rounded-lg w-16 h-28"
										title={item.dish.name}
									>
										<div className="w-full h-10 bg-[#f5f5f5]"></div>
										<span className="text-xs whitespace-nowrap overflow-hidden">
											{item.dish.name}
										</span>
										<div className="flex items-center gap-1">
											<button
												type="button"
												className="border rounded text-sm px-1"
												onClick={() =>
													updateOrderItemQuantity(
														item.dish.id,
														item.quantity - 1
													)
												}
											>
												-
											</button>
											<span className="text-xs whitespace-nowrap">
												{item.quantity}
											</span>
											<button
												type="button"
												className="border rounded text-sm px-1"
												onClick={() =>
													updateOrderItemQuantity(
														item.dish.id,
														item.quantity + 1
													)
												}
											>
												+
											</button>
										</div>
									</li>
								))
							) : (
								<li className="mx-auto w-full py-2 text-sm text-black/60">
									Nenhum item selecionado
								</li>
							)}
						</ul>
						{errors.orderItems && (
							<span className="text-red-500 text-sm">
								É necessário adicionar pelo menos um item
							</span>
						)}
					</div>

					<Button
						type="submit"
						disabled={isSubmitting}
						className={`ml-auto col-span-2 font-bold ${
							isSubmitting
								? "bg-orange-400"
								: "bg-orange-500 hover:bg-orange-600"
						}`}
					>
						{isSubmitting
							? defaultValue?.id
								? "Atualizando..."
								: "Salvando..."
							: defaultValue?.id
							? "Atualizar"
							: "Salvar"}
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
