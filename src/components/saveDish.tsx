/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Camera, Edit2, PlusCircle } from "lucide-react";
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
import { useCallback, useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { CreateDishInput, CreateDishSchema } from "@/common/schemas/dish";
import { DishesApi } from "@/lib/api/Dishes";
import { ICategory } from "@/common/interfaces/Category";
import { Textarea } from "./ui/textarea";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import SaveCategory from "./saveCategory";
import { CategoriesApi } from "@/lib/api/Categories";
import SelectedProduct from "./SelectProducts";
import { IProduct } from "@/common/interfaces/Product";
import { handleShowUnit } from "@/utils/handleShowUnit";
import { Aws } from "@/lib/aws";
import Image from "next/image";
import { IDishWithItems } from "@/common/interfaces/DishWithItems";

interface SaveDishProps {
	defaultValue?: IDishWithItems;
	onAction?: () => Promise<void>;
}

export default function SaveDish({ defaultValue, onAction }: SaveDishProps) {
	const { data: sessionData } = useSession();
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [previewImage, setPreviewImage] = useState<string | null>(
		defaultValue?.picture ? Aws.getObjectUrl(defaultValue?.picture) : null
	);
	const [isSubmiting, setIsSubmiting] = useState(false);
	const [categories, setCategories] = useState<ICategory[] | []>([]);
	const [dishItems, setDishItems] = useState<
		{ product: IProduct; quantity: number }[] | []
	>(defaultValue?.dishItems || []);

	const fileInputRef = useRef<HTMLInputElement>(null);

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
					quantity: Number(item.quantity),
				})) || [],
		},
	});

	const selectedCategoryId = watch("categoryId");

	const fetchCategories = useCallback(async () => {
		try {
			if (!sessionData?.user.name) return;
			const productsRes = await new CategoriesApi(
				sessionData?.user.name
			).getAll();
			setCategories(productsRes.data);
		} catch (error: any) {
			toast(error.data.message);
		}
	}, [sessionData?.user.name]);

	useEffect(() => {
		fetchCategories();
	}, [fetchCategories]);

	const handleCategoryChange = (value: string) => {
		setValue("categoryId", value);
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			const file = event.target.files[0];

			if (!file.type.match("image.*")) {
				toast("Por favor, selecione apenas arquivos de imagem");
				return;
			}

			if (file.size > 2 * 1024 * 1024) {
				toast("A imagem não pode ser maior que 2MB");
				return;
			}

			setSelectedFile(file);

			const reader = new FileReader();
			reader.onload = e => {
				setPreviewImage(e.target?.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	useEffect(() => {
		const formattedDishItems = dishItems.map(item => ({
			productId: item.product.id,
			quantity: Number(item.quantity),
		}));
		setValue("dishItems", formattedDishItems);

		setValue(
			"cost",
			dishItems.reduce<number>((acc, cur) => {
				return acc + cur.product.price * cur.quantity;
			}, 0)
		);
	}, [dishItems, setValue]);

	const onSubmit: SubmitHandler<CreateDishInput> = async data => {
		try {
			setIsSubmiting(true);
			if (!sessionData?.user.name) return;

			let imageUrl = data.picture;
			if (selectedFile) {
				imageUrl = await new Aws(sessionData.user.name).uploadFile(
					selectedFile
				);
			}

			const api = new DishesApi(sessionData?.user.name);

			if (defaultValue) {
				await api.update(defaultValue.id, { ...data, picture: imageUrl });
				toast("Prato atualizado com sucesso!");
			} else {
				await api.create({ ...data, picture: imageUrl });
				toast("Prato criado com sucesso!");
			}

			reset();
			setDishItems([]);
			setSelectedFile(null);
			setPreviewImage(null);
			if (fileInputRef.current) {
				fileInputRef.current.value = "";
			}

			if (onAction) await onAction();
		} catch (e) {
			console.log(e);
			if (e instanceof ApiResponse) toast(e.message);
			else toast("Erro ao salvar o prato. Tente novamente.");
		} finally {
			setIsSubmiting(false);
		}
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
				item.product.id === productId
					? {
							...item,
							quantity: isNaN(quantity)
								? item.quantity
								: parseFloat(quantity.toFixed(2)),
					  }
					: item
			)
		);
	};

	return (
		<>
			<Dialog>
				<DialogTrigger className="bg-orange-500 hover:bg-orange-600 flex items-center py-2 text-sm px-3 gap-3 rounded-lg text-white font-bold">
					{defaultValue ? <Edit2 className="size-4" /> : <PlusCircle />}
					{defaultValue ? "Editar prato" : "Adicionar prato"}
				</DialogTrigger>
				<DialogContent className="">
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
								<div>
									<Label
										htmlFor="dish-image"
										className="w-[150px] cursor-pointer h-[150px] mx-auto flex items-center justify-center bg-gray-100 overflow-hidden rounded-lg"
									>
										{previewImage ? (
											<Image
												src={previewImage}
												alt="Preview"
												className="w-full h-full object-cover"
												width={150}
												height={150}
											/>
										) : (
											<Camera size={50} color="gray" />
										)}
									</Label>
									<Input
										type="file"
										id="dish-image"
										ref={fileInputRef}
										className="hidden"
										onChange={handleFileChange}
										accept="image/*"
									/>
									{selectedFile && (
										<p className="text-xs text-center mt-1 truncate w-[150px]">
											{selectedFile.name}
										</p>
									)}
								</div>
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
											<span className="text-red-500 text-sm">
												{errors.name.message}
											</span>
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
												<span className="text-red-500 text-sm">
													{errors.price.message}
												</span>
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
											/>
											{errors.cost && (
												<span className="text-red-500 text-sm">
													{errors.cost.message}
												</span>
											)}
										</div>
									</div>
								</div>
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

							<div className="col-span-2">
								<Label>Categoria</Label>
								<div className="flex gap-2 items-center">
									<Select
										value={selectedCategoryId}
										onValueChange={handleCategoryChange}
									>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Selecione a categoria" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												{categories.length > 0 ? (
													<>
														<SelectLabel>Categorias</SelectLabel>
														{categories.map(category => (
															<SelectItem
																className="cursor-pointer"
																key={category.id}
																value={category.id}
															>
																{category.name}
															</SelectItem>
														))}
													</>
												) : (
													<SelectLabel>Não há categorias</SelectLabel>
												)}
											</SelectGroup>
										</SelectContent>
									</Select>
									<SaveCategory style="outline" onAction={fetchCategories} />
								</div>
								{errors.categoryId && (
									<span className="text-red-500 text-sm">
										{errors.categoryId.message}
									</span>
								)}
							</div>

							<div className="col-span-2">
								<div className="flex gap-2 mb-2">
									<h2 className="font-bold">Ingredientes</h2>
									<SelectedProduct
										handleSelected={handleSelectItem}
										selectedProducts={dishItems}
									/>
								</div>
								<ul className="flex overflow-x-auto w-full gap-3 pb-2">
									{dishItems && dishItems.length > 0 ? (
										dishItems.map(item => (
											<li
												key={item.product.id}
												className="flex gap-1 flex-col border p-2 rounded-lg min-w-16 h-28"
												title={item.product.name}
											>
												<div className="w-full h-10 bg-[#f5f5f5]"></div>
												<span className="text-xs whitespace-nowrap overflow-hidden ">
													{item.product.name}
												</span>
												<div className="flex items-center gap-1">
													<button
														type="button"
														className="border rounded text-sm px-1"
														onClick={() =>
															updateProductQuantity(
																item.product.id,
																item.quantity - 1
															)
														}
													>
														-
													</button>
													<span className="text-xs whitespace-nowrap">
														{item.quantity} {handleShowUnit(item.product.unit)}
													</span>
													<button
														type="button"
														className="border rounded text-sm px-1"
														onClick={() =>
															updateProductQuantity(
																item.product.id,
																item.quantity + 1
															)
														}
													>
														+
													</button>
												</div>
											</li>
										))
									) : (
										<li className="mx-auto w-full py-2 text-sm text-black/60">
											Nenhum ingrediente selecionado
										</li>
									)}
								</ul>
								{errors.dishItems && (
									<span className="text-red-500 text-sm">
										É necessário adicionar pelo menos um ingrediente
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
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
