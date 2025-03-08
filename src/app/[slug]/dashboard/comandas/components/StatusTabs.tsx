// StatusTabs.tsx
import { BillStatus } from "@/common/constants/BillStatus";
import { handleShowBillStatus } from "@/utils/handleShowBillStatus";

interface StatusTabsProps {
	activeTab: keyof typeof BillStatus;
	onTabChange: (tab: keyof typeof BillStatus) => void;
}

export default function StatusTabs({
	activeTab,
	onTabChange,
}: StatusTabsProps) {
	return (
		<ul className="flex mx-auto justify-center mb-5 rounded-lg overflow-hidden w-min">
			{Object.keys(BillStatus).map(key => (
				<li
					className={`px-3 py-1 cursor-pointer whitespace-nowrap ${
						activeTab === key ? "bg-orange-400 text-white" : "bg-gray-100"
					}`}
					key={key}
					onClick={() => onTabChange(key as keyof typeof BillStatus)}
				>
					{handleShowBillStatus(BillStatus[key as keyof typeof BillStatus])}
				</li>
			))}
		</ul>
	);
}
