/* eslint-disable @typescript-eslint/no-explicit-any */
// OrderTable.tsx (Main Component)
"use client";

import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { IOrderWithItems } from "@/common/interfaces/OrderWithItems";
import { OrderStatus } from "@/common/constants/OrderStatus";
import { OrdersApi } from "@/lib/api/Orders";
import { usePagination } from "@/hooks/use-pagination";
import SaveOrder from "@/components/saveOrder";
import SelectedOrder from "./SelectedOrder";
import OrderList from "./OrderList";
import StatusTabs from "./StatusTabs";

export default function OrderTable() {
	const { data } = useSession();
	const [orders, setOrders] = useState<IOrderWithItems[]>([]);
	const [selectedOrder, setSelectedOrder] = useState<IOrderWithItems>();
	const [isLoading, setIsLoading] = useState(true);
	const { order, page, take } = usePagination();
	const [tab, setTab] = useState<keyof typeof OrderStatus>("PENDING");

	const fetchOrders = useCallback(async () => {
		try {
			setIsLoading(true);
			if (!data?.user.name) return;
			const productsRes = await new OrdersApi(data?.user.name).getAll(
				{ order, page, take },
				OrderStatus[tab]
			);

			setOrders(productsRes.data);
		} catch (error: any) {
			toast(error.data.message);
		} finally {
			setIsLoading(false);
		}
	}, [order, page, take, data?.user.name, tab]);

	useEffect(() => {
		fetchOrders();
	}, [fetchOrders]);

	const handleSelectOrder = (order: IOrderWithItems) => {
		if (order.id === selectedOrder?.id) {
			setSelectedOrder(undefined);
		} else {
			setSelectedOrder(order);
		}
	};

	return (
		<div className="w-full mt-5 flex-1 flex flex-col">
			<div className="flex justify-between items-center w-full flex-wrap gap-5">
				<div className="flex w-full justify-end">
					<SaveOrder onAction={fetchOrders} />
				</div>
			</div>
			<div className="flex mt-5 w-full gap-5 h-full">
				<div
					className={`${
						selectedOrder ? "w-max" : "w-full"
					} border p-6 rounded-xl max-w-[900px] min-w-[300px] mx-auto shadow-md`}
				>
					<h2 className="text-lg font-bold mb-3">Pedidos</h2>
					<StatusTabs activeTab={tab} onTabChange={setTab} />
					<OrderList
						orders={orders}
						selectedOrderId={selectedOrder?.id}
						onSelectOrder={handleSelectOrder}
						isLoading={isLoading}
					/>
				</div>

				{selectedOrder && <SelectedOrder selected={selectedOrder} />}
			</div>
		</div>
	);
}
