/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { ProductsApi } from "@/lib/api/Products";
import { Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DeleteButton() {
	const { data: session } = useSession();
	const { id } = useParams<{ id: string }>();
	const router = useRouter();

	const handleDelete = async () => {
		try {
			if (!session?.user.name) return;
			await new ProductsApi(session?.user.name).delete(id);

			toast("deletado com sucesso!");

			return router.push("/dashboard/produtos");
		} catch (e: any) {
			console.log(e);
			toast(e.message);
		}
	};

	return (
		<Button
			onClick={() => handleDelete()}
			className="bg-red-500 hover:bg-red-600 w-max"
		>
			<Trash2 />
			Deletar
		</Button>
	);
}
