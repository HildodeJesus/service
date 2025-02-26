import { ProductUnit } from "../constants/ProductUnit";

export interface IProduct {
	id: string;
	name: string;
	quantity: number;
	unit: ProductUnit;
	price: number;
	createdAt: Date;
	updatedAt: Date;
}
