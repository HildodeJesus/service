import { BillStatus } from "@/common/constants/BillStatus";

export function handleShowBillStatus(unit: string) {
	return unit == BillStatus.CLOSED ? "Fechado" : "Aberto";
}
