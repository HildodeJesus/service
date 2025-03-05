import { IDish } from "./Dish";
import { IProduct } from "./Product";

export interface IDishWithItems extends IDish {
	dishItems: { product: IProduct; quantity: number }[];
}
