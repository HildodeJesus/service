import { ProductUnit } from "@/common/constants/ProductUnit";

export function handleShowUnit(unit: string) {
	return unit == ProductUnit.LITER
		? "Litros"
		: unit == ProductUnit.UNIT
		? "Unidade"
		: "kg";
}
