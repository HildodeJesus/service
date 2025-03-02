import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export class Aws {
	private s3: S3Client;
	public sizeImage: number;
	public sizeVideo: number;
	public folder: string;

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

		this.folder = subdomain;
		this.sizeImage = 2 * 1024 * 1024;
		this.sizeVideo = 10 * 1024 * 1024;
	}

	async getUploadUrl(fileName: string, mimeType: string) {
		return await getSignedUrl(
			this.s3,
			new PutObjectCommand({
				Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!,
				Key: `${this.folder}/${fileName}`,
				ContentType: mimeType,
			}),
			{ expiresIn: 60 }
		);
	}
}
