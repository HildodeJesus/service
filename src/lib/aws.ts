import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import axios from "axios";

export class Aws {
	private s3: S3Client;
	public sizeImage: number;
	public sizeVideo: number;
	public subdomain: string;

	/**
	 * @param subdomain Subdomínio dos clientes. Será utilizado para gerar a pasta no s3.
	 */
	constructor(subdomain: string) {
		this.s3 = new S3Client({
			region: process.env.NEXT_PUBLIC_AWS_REGION as string,
			credentials: {
				accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY as string,
				secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY as string,
			},
		});

		this.subdomain = subdomain.toLowerCase();
		this.sizeImage = 2 * 1024 * 1024;
		this.sizeVideo = 10 * 1024 * 1024;
	}

	async getUploadUrl(fileName: string, mimeType: string) {
		return await getSignedUrl(
			this.s3,
			new PutObjectCommand({
				Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!,
				Key: fileName,
				ContentType: mimeType,
			}),
			{ expiresIn: 120 }
		);
	}

	async uploadFile(file: File, folder?: string) {
		try {
			if (!this.subdomain) {
				throw new Error("Usuário não autenticado");
			}

			console.log(file);

			const fileExtension = file.name.split(".").pop();

			const fileName = `${this.subdomain}/${folder ? `${folder}/` : ""}${
				file.name
			}-${Date.now()}-${Math.random()
				.toString(36)
				.substring(2, 15)}.${fileExtension}`;

			const uploadUrl = await this.getUploadUrl(fileName, file.type);

			await axios.put(uploadUrl, file, {
				headers: {
					"Content-Type": file.type,
				},
			});

			return fileName;
		} catch (error) {
			console.error("Erro ao enviar imagem:", error);
			throw error;
		}
	}

	static getObjectUrl(filename: string) {
		return `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.amazonaws.com/${filename}`;
	}
}
