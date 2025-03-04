import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CreateDishInput } from "@/common/schemas/dish";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface DishFormFieldsProps {
	register: UseFormRegister<CreateDishInput>;
	errors: FieldErrors<CreateDishInput>;
}

export default function DishFormFields({
	register,
	errors,
}: DishFormFieldsProps) {
	return (
		<div className="flex flex-col gap-2 flex-1">
			<div>
				<Label htmlFor="name">Nome</Label>
				<Input
					id="name"
					{...register("name")}
					placeholder="Nome do prato"
					className="mt-1"
					autoComplete="off"
				/>
				{errors.name && (
					<span className="text-red-500 text-sm">{errors.name.message}</span>
				)}
			</div>

			<div className="grid grid-cols-2 gap-2">
				<div>
					<Label htmlFor="price">Preço</Label>
					<Input
						id="price"
						{...register("price", { valueAsNumber: true })}
						placeholder="Preço"
						className="mt-1"
						autoComplete="off"
						type="number"
						step="0.01"
						min={0}
					/>
					{errors.price && (
						<span className="text-red-500 text-sm">{errors.price.message}</span>
					)}
				</div>
				<div>
					<Label htmlFor="cost">Custo</Label>
					<Input
						id="cost"
						{...register("cost", { valueAsNumber: true })}
						placeholder="Custo"
						className="mt-1"
						autoComplete="off"
						type="number"
						step="0.01"
						min={0}
						readOnly
					/>
					{errors.cost && (
						<span className="text-red-500 text-sm">{errors.cost.message}</span>
					)}
				</div>
			</div>
		</div>
	);
}
