import { FieldErrors } from "react-hook-form";
import { IProduct } from "@/common/interfaces/Product";
import { handleShowUnit } from "@/utils/handleShowUnit";
import { CreateDishInput } from "@/common/schemas/dish";
import SelectedProduct from "@/components/SelectProducts";

interface IngredientsListProps {
	dishItems: { product: IProduct; quantity: number }[];
	handleSelectItem: (product: IProduct) => void;
	updateProductQuantity: (productId: string, quantity: number) => void;
	errors: FieldErrors<CreateDishInput>;
}

export default function IngredientsList({
	dishItems,
	handleSelectItem,
	updateProductQuantity,
	errors,
}: IngredientsListProps) {
	return (
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
						<IngredientItem
							key={item.product.id}
							item={item}
							updateProductQuantity={updateProductQuantity}
						/>
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
	);
}

interface IngredientItemProps {
	item: { product: IProduct; quantity: number };
	updateProductQuantity: (productId: string, quantity: number) => void;
}

function IngredientItem({ item, updateProductQuantity }: IngredientItemProps) {
	return (
		<li
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
						updateProductQuantity(item.product.id, item.quantity - 1)
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
						updateProductQuantity(item.product.id, item.quantity + 1)
					}
				>
					+
				</button>
			</div>
		</li>
	);
}
