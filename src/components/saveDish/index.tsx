/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Edit2, PlusCircle } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { ApiResponse } from "@/utils/ApiResponse";
import { IDish } from "@/common/interfaces/Dish";
import { CreateDishInput, CreateDishSchema } from "@/common/schemas/dish";
import { DishesApi } from "@/lib/api/Dishes";
import { ICategory } from "@/common/interfaces/Category";
import { CategoriesApi } from "@/lib/api/Categories";
import { IProduct } from "@/common/interfaces/Product";
import { Aws } from "@/lib/aws";
import ImageUploader from "./components/ImageUploader";
import DishFormFields from "./components/DishForm";
import CategorySelector from "./components/CategorySelector";
import IngredientsList from "./components/IngredientList";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface SaveDishProps {
	defaultValue?: IDish & {
		dishItems: { product: IProduct; quantity: number }[];
	};
	onAction?: () => void;
}

export default function SaveDish({ defaultValue, onAction }: SaveDishProps) {
	const { data: sessionData } = useSession();
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [previewImage, setPreviewImage] = useState<string | null>(
		defaultValue?.picture || null
	);
	const [isSubmiting, setIsSubmiting] = useState(false);
	const [categories, setCategories] = useState<ICategory[] | []>([]);
	const [dishItems, setDishItems] = useState<
		{ product: IProduct; quantity: number }[] | []
	>(defaultValue?.dishItems || []);

	const {
		handleSubmit,
		register,
		reset,
		setValue,
		watch,
		formState: { errors },
	} = useForm<CreateDishInput>({
		resolver: zodResolver(CreateDishSchema),
		defaultValues: {
			name: defaultValue?.name || "",
			price: defaultValue?.price || 0,
			cost: defaultValue?.cost || 0,
			categoryId: defaultValue?.categoryId || "",
			description: defaultValue?.description || "",
			picture: defaultValue?.picture || "",
			dishItems:
				defaultValue?.dishItems?.map(item => ({
					productId: item.product.id,
					quantity: item.quantity,
				})) || [],
		},
	});

	const selectedCategoryId = watch("categoryId");

	const fetchCategories = async () => {
		try {
			if (!sessionData?.user.name) return;
			const productsRes = await new CategoriesApi(
				sessionData?.user.name
			).getAll();

			setCategories(productsRes.data);
		} catch (error: any) {
			toast(error.data.message);
		}
	};

	const handleSelectItem = (product: IProduct) => {
		setDishItems(prevItems => {
			const existingItemIndex = prevItems.findIndex(
				item => item.product.id === product.id
			);

			if (existingItemIndex !== -1) {
				return prevItems.map((item, index) =>
					index === existingItemIndex
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}

			return [...prevItems, { product, quantity: 1 }];
		});
	};

	const handleCategoryChange = (value: string) => {
		setValue("categoryId", value);
	};

	const removeProduct = (productId: string) => {
		setDishItems(prevItems =>
			prevItems.filter(item => item.product.id !== productId)
		);
	};

	const updateProductQuantity = (productId: string, quantity: number) => {
		if (quantity <= 0) {
			removeProduct(productId);
			return;
		}

		setDishItems(prevItems =>
			prevItems.map(item =>
				item.product.id === productId ? { ...item, quantity } : item
			)
		);
	};

	useEffect(() => {
		const formattedDishItems = dishItems.map(item => ({
			productId: item.product.id,
			quantity: item.quantity,
		}));
		setValue("dishItems", formattedDishItems);

		setValue(
			"cost",
			dishItems.reduce<any, any>((acc, cur) => {
				return acc + cur.product.price * cur.quantity;
			}, 0)
		);
	}, [dishItems, setValue]);

	useEffect(() => {
		fetchCategories();
	}, []);

	const onSubmit: SubmitHandler<CreateDishInput> = async data => {
		try {
			setIsSubmiting(true);
			if (!sessionData?.user.name) return;

			let imageUrl = data.picture;
			if (selectedFile) {
				imageUrl = await new Aws(sessionData.user.name).uploadFile(
					selectedFile
				);

				data.picture = imageUrl;
			}

			const api = new DishesApi(sessionData?.user.name);

			if (defaultValue) {
				await api.update(defaultValue.id, data);
				toast("Prato atualizado com sucesso!");
			} else {
				await api.create(data);
				toast("Prato criado com sucesso!");
			}

			reset();
			setDishItems([]);
			setSelectedFile(null);
			setPreviewImage(null);

			if (onAction) onAction();
		} catch (e) {
			console.log(e);
			if (e instanceof ApiResponse) toast(e.message);
			else toast("Erro ao salvar o prato. Tente novamente.");
		} finally {
			setIsSubmiting(false);
		}
	};

	return (
		<Dialog>
			<DialogTrigger className="bg-orange-500 hover:bg-orange-600 flex items-center py-2 text-sm px-3 gap-3 rounded-lg text-white font-bold">
				{defaultValue ? <Edit2 className="size-4" /> : <PlusCircle />}
				{defaultValue ? "Editar prato" : "Adicionar prato"}
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						{defaultValue ? "Editar prato" : "Criar prato"}
					</DialogTitle>
				</DialogHeader>
				<div className="flex gap-3">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="grid grid-cols-2 gap-2 w-full"
					>
						<div className="col-span-2 flex gap-3">
							<ImageUploader
								previewImage={previewImage}
								setPreviewImage={setPreviewImage}
								setSelectedFile={setSelectedFile}
							/>
							<DishFormFields register={register} errors={errors} />
						</div>

						<div className="col-span-2">
							<Label htmlFor="description">Descrição</Label>
							<Textarea
								id="description"
								{...register("description")}
								placeholder="Descrição do prato"
								className="mt-1"
							/>
							{errors.description && (
								<span className="text-red-500 text-sm">
									{errors.description.message}
								</span>
							)}
						</div>

						<CategorySelector
							categories={categories}
							selectedCategoryId={selectedCategoryId}
							handleCategoryChange={handleCategoryChange}
							errors={errors}
							fetchCategories={fetchCategories}
						/>

						<IngredientsList
							dishItems={dishItems}
							handleSelectItem={handleSelectItem}
							updateProductQuantity={updateProductQuantity}
							errors={errors}
						/>

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
				</div>
			</DialogContent>
		</Dialog>
	);
}
