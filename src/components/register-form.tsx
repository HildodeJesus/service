/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreateCompanyInput } from "@/common/schemas/company";
import Link from "next/link";
import { Auth } from "@/lib/api/Auth";
import { toast } from "sonner";
import { ApiResponse } from "@/utils/ApiResponse";
import { useRouter } from "next/navigation";

export function RegisterForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	const { handleSubmit, reset, register } = useForm<CreateCompanyInput>();
	const router = useRouter();

	const onSubmit: SubmitHandler<CreateCompanyInput> = async data => {
		try {
			await new Auth().create(data);

			toast("Usuário criado com sucesso!");
			reset();
			router.push("/login");
		} catch (e: any) {
			if (e instanceof ApiResponse) toast(e.message, { duration: 5000 });
			toast("Algum erro desconhecido ocorreu", { duration: 5000 });
		}
	};

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">Criar conta</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="m@example.com"
									{...register("email")}
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">name</Label>
								<Input
									id="name"
									type="name"
									placeholder="m@example.com"
									{...register("name")}
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									type="password"
									{...register("password")}
								/>
							</div>
							<Button type="submit" className="w-full">
								Cadastrar
							</Button>
						</div>
						<div className="mt-4 text-center text-sm">
							Já tem uma conta?{" "}
							<Link
								href="/login"
								className="underline underline-offset-4 text-orange-600"
							>
								entre
							</Link>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
