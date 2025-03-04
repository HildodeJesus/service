import { FieldErrors } from "react-hook-form";

import { ICategory } from "@/common/interfaces/Category";
import { CreateDishInput } from "@/common/schemas/dish";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import SaveCategory from "@/components/saveCategory";

interface CategorySelectorProps {
	categories: ICategory[];
	selectedCategoryId: string;
	handleCategoryChange: (value: string) => void;
	errors: FieldErrors<CreateDishInput>;
	fetchCategories: () => Promise<void>;
}

export default function CategorySelector({
	categories,
	selectedCategoryId,
	handleCategoryChange,
	errors,
	fetchCategories,
}: CategorySelectorProps) {
	return (
		<div className="col-span-2">
			<Label>Categoria</Label>
			<div className="flex gap-2 items-center">
				<Select value={selectedCategoryId} onValueChange={handleCategoryChange}>
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
	);
}
