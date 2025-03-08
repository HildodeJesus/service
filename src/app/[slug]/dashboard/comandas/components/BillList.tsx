import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { IBillWithItems } from "@/common/interfaces/BillWithItems";
import { ArrowRightCircle } from "lucide-react";

interface BillListProps {
	bills: IBillWithItems[];
	selectedBillId?: string;
	onSelectBill: (Bill: IBillWithItems) => void;
	isLoading: boolean;
}

export default function BillList({
	bills,
	selectedBillId,
	onSelectBill,
	isLoading,
}: BillListProps) {
	if (isLoading) {
		return (
			<li
				className={`border py-3 px-4 gap-5 rounded-xl w-full flex justify-between items-center min-w-[350px]`}
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

	if (!bills || bills.length === 0) {
		return (
			<div className="w-full py-6">
				<span className="text-black/60">Não há comandas</span>
			</div>
		);
	}

	return (
		<ul className="w-full flex flex-col justify-start gap-3 overflow-y-auto  min-w-[350px]">
			{bills.map(bill => (
				<BillItem
					key={bill.id}
					bill={bill}
					isSelected={bill.id === selectedBillId}
					onSelect={() => onSelectBill(bill)}
				/>
			))}
		</ul>
	);
}

interface BillItemProps {
	bill: IBillWithItems;
	isSelected: boolean;
	onSelect: () => void;
}

function BillItem({ bill, isSelected, onSelect }: BillItemProps) {
	return (
		<li
			onClick={onSelect}
			className={`border shadow-md cursor-pointer py-3 px-4 gap-5 rounded-xl w-full flex justify-between items-center hover:border hover:border-orange-500 hover:text-orange-500 transition-colors ${
				isSelected ? "border-orange-500 text-orange-500" : ""
			}`}
		>
			<div className="flex flex-col">
				<span>
					Comanda {bill.client ? `de ${bill.client.name}` : "de desconhecido"}
				</span>
				<span className="text-black/60 text-sm">
					{format(bill.createdAt, "dd 'de' MMMM 'às' HH:mm")}
				</span>
			</div>
			<div className="flex items-center gap-3">
				<span className="font-bold">
					{Number(bill.total).toLocaleString("pt-BR", {
						style: "currency",
						currency: "BRL",
					})}
				</span>
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
