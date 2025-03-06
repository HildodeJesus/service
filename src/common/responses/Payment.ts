/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiResponse } from "@/utils/ApiResponse";
import { IPayment } from "../interfaces/Payment";

export interface ApiPaymentGetOne extends ApiResponse<any> {
	data: IPayment;
}

export interface ApiPaymentGetMany extends ApiResponse<any> {
	data: IPayment[];
}

export interface ApiPaymentCreate extends ApiResponse<any> {
	data: IPayment;
}

export interface ApiPaymentUpdate extends ApiResponse<any> {
	data: IPayment;
}

export interface ApiPaymentDelete extends ApiResponse<any> {
	data: IPayment;
}
