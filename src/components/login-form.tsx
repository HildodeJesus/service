/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

import { ApiResponse } from "@/utils/ApiResponse";
import { LoginCompanyInput } from "@/common/schemas/company";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function LoginForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	const { handleSubmit, reset, register } = useForm<LoginCompanyInput>();
	const router = useRouter();

	const onSubmit: SubmitHandler<LoginCompanyInput> = async data => {
		try {
			const res = await signIn("credentials", {
				redirect: false,
				...data,
				callbackUrl: "/dashboard",
			});

			if (!res?.ok) throw new Error(res?.error || "");

			toast("Logado com sucesso!", { duration: 5000 });

			router.push("/dashboard");
			reset();
		} catch (e: any) {
			toast("Algum erro nas credentias ocurreu", { duration: 5000 });
		}
	};

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">Login</CardTitle>
					<CardDescription>
						Entre com o email e senha da sua conta
					</CardDescription>
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
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
									<a
										href="/forgot-password"
										className="ml-auto text-orange-600 inline-block text-sm underline-offset-4 hover:underline"
									>
										Esqueceu a senha?
									</a>
								</div>
								<Input
									id="password"
									type="password"
									{...register("password")}
								/>
							</div>
							<Button type="submit" className="w-full">
								Entrar
							</Button>
						</div>
						<div className="mt-4 text-center text-sm">
							Não tem uma conta?{" "}
							<a
								href="/register"
								className="underline underline-offset-4 text-orange-600"
							>
								Crie
							</a>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
