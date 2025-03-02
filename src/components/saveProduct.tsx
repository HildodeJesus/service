"use client";

import { PlusCircle } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	CreateProductInput,
	createProductSchema,
} from "@/common/schemas/product";
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
import { Button } from "./ui/button";
import { ApiResponse } from "@/utils/ApiResponse";
import { toast } from "sonner";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { ProductsApi } from "@/lib/api/Products";
import { IProduct } from "@/common/interfaces/Product";

interface SaveProductProps {
	defaultValue?: IProduct;
	onAction: () => void;
}

export default function SaveProduct({
	defaultValue,
	onAction,
}: SaveProductProps) {
	const { data: sessionData } = useSession();
	const [isSubmiting, setIsSubmiting] = useState(false);
	const [unit, setUnit] = useState(defaultValue?.unit || ProductUnit.UNIT);

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(createProductSchema),
		defaultValues: {
			name: defaultValue?.name || "",
			price: defaultValue?.price || 0,
			quantity: defaultValue?.quantity || 0,
			unit: defaultValue?.unit || unit,
			minimumQuantity: defaultValue?.minimumQuantity || 0,
		},
	});

	const onSubmit: SubmitHandler<CreateProductInput> = async data => {
		try {
			setIsSubmiting(true);
			if (!sessionData?.user.name) return;

			const api = new ProductsApi(sessionData?.user.name);

			if (defaultValue) {
				await api.update(defaultValue.id, { ...data, unit });
				toast("Produto atualizado com sucesso!");
			} else {
				await api.create({ ...data, unit });
				toast("Produto criado com sucesso!");
			}

			reset();
			onAction();
		} catch (e) {
			console.log(e);
			if (e instanceof ApiResponse) toast(e.message);
		} finally {
			setIsSubmiting(false);
		}
	};

	return (
		<>
			<Dialog>
				<DialogTrigger className="bg-orange-500 hover:bg-orange-700 flex items-center py-2 px-3 gap-3 rounded-lg text-white font-bold">
					<PlusCircle />
					{defaultValue ? "Editar produto" : "Adicionar produto"}
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>
							{defaultValue ? "Editar produto" : "Criar produto"}
						</DialogTitle>
					</DialogHeader>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="grid grid-cols-2 gap-3"
					>
						<div className="col-span-2">
							<Label htmlFor="name">Nome</Label>
							<Input
								id="name"
								{...register("name")}
								placeholder="Nome do produto "
								className="mt-1"
								autoComplete="off"
							/>
							{errors.name && (
								<span className="text-red-500 text-sm">
									{errors.name.message}
								</span>
							)}
						</div>
						<div>
							<Label htmlFor="price">Preço</Label>
							<Input
								id="price"
								{...register("price", { valueAsNumber: true })}
								placeholder="Preço "
								className="mt-1"
								autoComplete="off"
								type="number"
								step="0.01"
								min={0}
							/>
							{errors.price && (
								<span className="text-red-500 text-sm">
									{errors.price.message}
								</span>
							)}
						</div>
						<div>
							<Label htmlFor="unit">Unidade</Label>
							<Select
								name="unit"
								defaultValue={unit}
								onValueChange={e => setUnit(e as ProductUnit)}
							>
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
							{errors.unit && (
								<span className="text-red-500 text-sm">
									{errors.unit.message}
								</span>
							)}
						</div>

						<div className="col-span-1">
							<Label>Quantidade</Label>
							<Input
								id="quantity"
								{...register("quantity", { valueAsNumber: true })}
								placeholder="Quantidade"
								className="mt-1"
								autoComplete="off"
								type="number"
								step="0.01"
							/>
							{errors.quantity && (
								<span className="text-red-500 text-sm">
									{errors.quantity.message}
								</span>
							)}
						</div>
						<div className="col-span-1">
							<Label>Quantidade mínima</Label>
							<Input
								id="minimumQuantity"
								{...register("minimumQuantity", { valueAsNumber: true })}
								placeholder="Quantidade mínima"
								className="mt-1"
								autoComplete="off"
								step="0.01"
								type="number"
							/>
							{errors.minimumQuantity && (
								<span className="text-red-500 text-sm">
									{errors.minimumQuantity.message}
								</span>
							)}
						</div>

						<Button
							type="submit"
							disabled={isSubmiting}
							className={`ml-auto col-span-2 font-bold ${
								isSubmiting
									? "bg-orange-400"
									: "bg-orange-500 hover:bg-orange-600"
							}`}
						>
							{isSubmiting
								? defaultValue
									? "Atualizando..."
									: "Salvando..."
								: defaultValue
								? "Atualizar"
								: "Salvar"}
						</Button>
					</form>
				</DialogContent>
			</Dialog>
		</>
	);
}
