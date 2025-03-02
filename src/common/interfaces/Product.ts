import { ProductUnit } from "../constants/ProductUnit";

export interface IProduct {
	id: string;
	name: string;
	picture?: string;
	quantity: number;
	minimumQuantity: number;
	unit: ProductUnit;
	price: number;
	createdAt?: Date;
	updatedAt?: Date;
}
