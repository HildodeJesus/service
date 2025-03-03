"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";

import { ProductUnit } from "@/common/constants/ProductUnit";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { IProduct } from "@/common/interfaces/Product";

interface ShowProductProps {
	selectedProduct: IProduct;
}

export default function ShowProduct({ selectedProduct }: ShowProductProps) {
	return (
		<>
			<Dialog>
				<DialogTrigger className="border shadow-md cursor-pointer py-3 px-4 rounded-xl w-full max-w-[290px] flex  flex-col transition-colors hover:scale-105 duration-150 gap-1 transition-none">
					<div className="w-full h-[250px] bg-gray-100 overflow-hidden rounded-lg"></div>

					<span className="">{selectedProduct.name}</span>
					<div>
						<span className="text-lg font-bold">
							{Number(selectedProduct.price).toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
							<strong className="font-normal text-sm">
								/
								{selectedProduct.unit == ProductUnit.LITER
									? "litro"
									: selectedProduct.unit == ProductUnit.UNIT
									? "unidade"
									: "KG"}
							</strong>
						</span>
					</div>
					<div className="flex text-sm items-center justify-between w-full">
						<div className="flex gap-2">
							<span>Qtd:</span>
							<span>
								{selectedProduct.quantity}{" "}
								<span className="font-normal text-sm">
									{selectedProduct.unit == ProductUnit.LITER
										? "litro"
										: selectedProduct.unit == ProductUnit.UNIT
										? "unidade"
										: "KG"}
								</span>
							</span>
						</div>

						<div className="flex gap-2">
							<span>min:</span>
							<span>
								{selectedProduct.minimumQuantity}{" "}
								<span className="font-normal text-sm">
									{selectedProduct.unit == ProductUnit.LITER
										? "litro"
										: selectedProduct.unit == ProductUnit.UNIT
										? "unidade"
										: "KG"}
								</span>
							</span>
						</div>
					</div>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Visualizando produto</DialogTitle>
						<Dialog></Dialog>
					</DialogHeader>

					<div className="grid grid-cols-2 gap-3">
						<div className="col-span-2">
							<span>Nome:</span>
							<span>{selectedProduct.name}</span>
						</div>
						<div>
							<Label htmlFor="price">Preço</Label>
							<Input
								id="price"
								placeholder="Preço "
								className="mt-1"
								autoComplete="off"
								type="number"
								step="0.01"
								min={0}
							/>
						</div>
						<div>
							<Label htmlFor="unit">Unidade</Label>
							<Select name="unit">
								<SelectTrigger>
									<SelectValue placeholder="Selecione a unidade" />
								</SelectTrigger>
								<SelectContent>
									{Object.keys(ProductUnit).map(unit => (
										<SelectItem
											key={unit}
											value={ProductUnit[unit as keyof typeof ProductUnit]}
										>
											{unit}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<div className="col-span-1">
							<Label>Quantidade</Label>
							<Input
								id="quantity"
								placeholder="Quantidade"
								className="mt-1"
								autoComplete="off"
								type="number"
								step="0.01"
							/>
						</div>
						<div className="col-span-1">
							<Label>Quantidade mínima</Label>
							<Input
								id="minimumQuantity"
								placeholder="Quantidade mínima"
								className="mt-1"
								autoComplete="off"
								step="0.01"
								type="number"
							/>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
