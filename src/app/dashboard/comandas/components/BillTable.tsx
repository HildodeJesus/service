/* eslint-disable @typescript-eslint/no-explicit-any */
// BillTable.tsx (Main Component)
"use client";

import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { BillStatus } from "@/common/constants/BillStatus";
import { usePagination } from "@/hooks/use-pagination";
import StatusTabs from "./StatusTabs";
import { IBillWithItems } from "@/common/interfaces/BillWithItems";
import { BillsApi } from "@/lib/api/Bills";
import BillList from "./BillList";
import SelectedBill from "./SelectedBill";

export default function BillTable() {
	const { data } = useSession();
	const [bills, setBills] = useState<IBillWithItems[]>([]);
	const [selectedBill, setSelectedBill] = useState<IBillWithItems>();
	const [isLoading, setIsLoading] = useState(true);
	const { order, page, take } = usePagination();
	const [tab, setTab] = useState<keyof typeof BillStatus>("OPEN");

	const fetchBills = useCallback(async () => {
		try {
			setIsLoading(true);
			if (!data?.user.name) return;
			const billsRes = await new BillsApi(data?.user.name).getAll(
				{ order, page, take },
				BillStatus[tab]
			);

			console.log(billsRes);

			setBills(billsRes.data);
		} catch (error: any) {
			toast(error.data.message);
		} finally {
			setIsLoading(false);
		}
	}, [order, page, take, data?.user.name, tab]);

	useEffect(() => {
		fetchBills();
	}, [fetchBills]);

	const handleSelectBill = (bill: IBillWithItems) => {
		if (bill.id === selectedBill?.id) {
			setSelectedBill(undefined);
		} else {
			setSelectedBill(bill);
		}
	};

	return (
		<div className="w-full mt-5 flex-1 flex flex-col">
			<div className="flex mt-5 w-full gap-5 h-full">
				<div
					className={`${
						selectedBill ? "w-max" : "w-full"
					} border p-6 rounded-xl max-w-[900px] min-w-[300px] mx-auto shadow-md`}
				>
					<h2 className="text-lg font-bold mb-3">Faturas</h2>
					<StatusTabs activeTab={tab} onTabChange={setTab} />
					<BillList
						bills={bills}
						selectedBillId={selectedBill?.id}
						onSelectBill={handleSelectBill}
						isLoading={isLoading}
					/>
				</div>

				{selectedBill && <SelectedBill selected={selectedBill} />}
			</div>
		</div>
	);
}
