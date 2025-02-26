import { PaymentMethod } from "../constants/PaymentMethod";
import { PaymentStatus } from "../constants/PaymentStatus";

export interface IPayment {
	id: string;
	billId: string;
	amount: number;
	paymentMethod: PaymentMethod;
	status: PaymentStatus;
	createdAt: Date;
	updatedAt: Date;
}
