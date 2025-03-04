"use client";

import { Edit2, PlusCircle } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "./ui/label";
import { Input } from "./ui/input";

import { Button } from "./ui/button";
import { ApiResponse } from "@/utils/ApiResponse";
import { toast } from "sonner";
import { useState } from "react";
import { useSession } from "next-auth/react";

import { ICategory } from "@/common/interfaces/Category";
import {
	CreateCategoryInput,
	CreateCategorySchema,
} from "@/common/schemas/category";
import { CategoriesApi } from "@/lib/api/Categories";
import clsx from "clsx";

interface SaveDishProps {
	defaultValue?: ICategory;
	onAction?: () => void;
	style?: "outline" | "solid";
}

const triggerStyle = {
	outline:
		"border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white",
	solid: "bg-orange-500 hover:bg-orange-600 text-white",
};

export default function SaveCategory({
	defaultValue,
	style = "solid",
	onAction,
}: SaveDishProps) {
	const { data: sessionData } = useSession();
	const [isSubmiting, setIsSubmiting] = useState(false);

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(CreateCategorySchema),
		defaultValues: {
			name: defaultValue?.name || "",
		},
	});

	const onSubmit: SubmitHandler<CreateCategoryInput> = async data => {
		try {
			setIsSubmiting(true);
			if (!sessionData?.user.name) return;

			const api = new CategoriesApi(sessionData?.user.name);

			if (defaultValue) {
				await api.update(defaultValue.id, { ...data });
				toast("Categoria atualizada com sucesso!");
			} else {
				await api.create({ ...data });
				toast("Categoria criada com sucesso!");
			}

			reset();
			if (onAction) onAction();
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
				<DialogTrigger
					className={clsx(
						"whitespace-nowrap transition-colors flex items-center py-2 text-sm px-3 gap-3 rounded-lg font-bold",
						triggerStyle[style as keyof typeof triggerStyle]
					)}
				>
					{defaultValue ? <Edit2 className="size-4" /> : <PlusCircle />}
					{defaultValue ? "Editar categoria" : "Adicionar categoria"}
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>
							{defaultValue ? "Editar categoria" : "Criar categoria"}
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
