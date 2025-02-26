import { ReferenceType } from "../constants/ReferenceType";
import { StockMovementType } from "../constants/StockMovementType";

export interface IStockMovement {
	id: string;
	productId: string;
	quantity: number;
	movementType: StockMovementType;
	referenceId: string;
	referenceType: ReferenceType;
	createdAt: Date;
	updatedAt: Date;
}
