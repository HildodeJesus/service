// StatusTabs.tsx
import { OrderStatus } from "@/common/constants/OrderStatus";
import { handleShowOrderStatus } from "@/utils/handleShowOrderStatus";

interface StatusTabsProps {
	activeTab: keyof typeof OrderStatus;
	onTabChange: (tab: keyof typeof OrderStatus) => void;
}

export default function StatusTabs({
	activeTab,
	onTabChange,
}: StatusTabsProps) {
	return (
		<ul className="flex mx-auto justify-center mb-5 rounded-lg overflow-hidden w-min">
			{Object.keys(OrderStatus).map(key => (
				<li
					className={`px-3 py-1 cursor-pointer whitespace-nowrap ${
						activeTab === key ? "bg-orange-400 text-white" : "bg-gray-100"
					}`}
					key={key}
					onClick={() => onTabChange(key as keyof typeof OrderStatus)}
				>
					{handleShowOrderStatus(OrderStatus[key as keyof typeof OrderStatus])}
				</li>
			))}
		</ul>
	);
}
