// OrderList.tsx
import { format } from "date-fns";
import { ArrowRightCircle } from "lucide-react";
import { IOrderWithItems } from "@/common/interfaces/OrderWithItems";
import { Skeleton } from "@/components/ui/skeleton";

interface OrderListProps {
	orders: IOrderWithItems[];
	selectedOrderId?: string;
	onSelectOrder: (order: IOrderWithItems) => void;
	isLoading: boolean;
}

export default function OrderList({
	orders,
	selectedOrderId,
	onSelectOrder,
	isLoading,
}: OrderListProps) {
	if (isLoading) {
		return (
			<li
				className={`border py-3 px-4 gap-5 rounded-xl w-full flex justify-between items-center`}
			>
				<div className="flex flex-col">
					<Skeleton className="w-[150px] h-5" />
					<Skeleton className="w-[170px] h-5" />
				</div>
				<div className="flex items-center gap-4">
					<Skeleton className="w-[50px] h-5" />

					<Skeleton className="w-[20px] h-5" />
				</div>
			</li>
		);
	}

	if (!orders || orders.length === 0) {
		return (
			<div className="w-full py-6">
				<span className="text-black/60">Não há produtos</span>
			</div>
		);
	}

	return (
		<ul className="w-full flex flex-col justify-start gap-3 overflow-y-auto">
			{orders.map(order => (
				<OrderItem
					key={order.id}
					order={order}
					isSelected={order.id === selectedOrderId}
					onSelect={() => onSelectOrder(order)}
				/>
			))}
		</ul>
	);
}

interface OrderItemProps {
	order: IOrderWithItems;
	isSelected: boolean;
	onSelect: () => void;
}

function OrderItem({ order, isSelected, onSelect }: OrderItemProps) {
	const totalPrice = order.orderItems
		.reduce<number>((prev, acc) => {
			return prev + acc.quantity * acc.dish.price;
		}, 0)
		.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
		});

	return (
		<li
			onClick={onSelect}
			className={`border shadow-md cursor-pointer py-3 px-4 gap-5 rounded-xl w-full flex justify-between items-center hover:border hover:border-orange-500 hover:text-orange-500 transition-colors ${
				isSelected ? "border-orange-500 text-orange-500" : ""
			}`}
		>
			<div className="flex flex-col">
				<span>
					Pedido de {order.client ? order.client.name : "desconhecido"}
				</span>
				<span className="text-black/60 text-sm">
					{format(order.createdAt, "dd 'de' MMMM 'às' HH:mm")}
				</span>
			</div>
			<div className="flex items-center gap-3">
				<span className="font-bold">{totalPrice}</span>
				<span
					className={`font-bold ${
						isSelected ? "text-orange-500" : "text-black/60"
					}`}
				>
					<ArrowRightCircle />
				</span>
			</div>
		</li>
	);
}
