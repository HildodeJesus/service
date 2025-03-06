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

import clsx from "clsx";
import { IClient } from "@/common/interfaces/Client";
import { CreateClientInput, CreateClientSchema } from "@/common/schemas/client";
import { ClientsApi } from "@/lib/api/Client";

interface SaveClientProps {
	defaultValue?: IClient;
	onAction?: () => Promise<void>;
	style?: "outline" | "solid";
}

const triggerStyle = {
	outline:
		"border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white",
	solid: "bg-orange-500 hover:bg-orange-600 text-white",
};

export default function SaveClient({
	defaultValue,
	style = "solid",
	onAction,
}: SaveClientProps) {
	const { data: sessionData } = useSession();
	const [isSubmiting, setIsSubmiting] = useState(false);

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(CreateClientSchema),
		defaultValues: {
			name: defaultValue?.name || "",
			phone: defaultValue?.phone || "",
		},
	});

	const onSubmit: SubmitHandler<CreateClientInput> = async data => {
		try {
			setIsSubmiting(true);
			if (!sessionData?.user.name) return;

			const api = new ClientsApi(sessionData?.user.name);

			if (defaultValue) {
				await api.update(defaultValue.id, { ...data });
				toast("Cliente atualizado com sucesso!");
			} else {
				await api.create({ ...data });
				toast("Cliente criado com sucesso!");
			}

			reset();
			if (onAction) await onAction();
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
					{defaultValue ? "Editar cliente" : "Adicionar cliente"}
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>
							{defaultValue ? "Editar cliente" : "Criar cliente"}
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
								placeholder="Nome do cliente"
								className="mt-1"
								autoComplete="off"
							/>
							{errors.name && (
								<span className="text-red-500 text-sm">
									{errors.name.message}
								</span>
							)}
						</div>
						<div className="col-span-2">
							<Label htmlFor="name">Celular</Label>
							<Input
								id="phone"
								{...register("phone")}
								placeholder="Telefone do cliente"
								className="mt-1"
								autoComplete="off"
							/>
							{errors.phone && (
								<span className="text-red-500 text-sm">
									{errors.phone.message}
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
