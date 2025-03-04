import { Camera } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ImageUploaderProps {
	previewImage: string | null;
	setPreviewImage: (preview: string | null) => void;
	setSelectedFile: (file: File | null) => void;
}

export default function ImageUploader({
	previewImage,
	setPreviewImage,
	setSelectedFile,
}: ImageUploaderProps) {
	const fileInputRef = useRef<HTMLInputElement>(null);

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

	return (
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
			{fileInputRef.current?.files?.[0] && (
				<p className="text-xs text-center mt-1 truncate w-[150px]">
					{fileInputRef.current.files[0].name}
				</p>
			)}
		</div>
	);
}
