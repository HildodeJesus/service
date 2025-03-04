export interface IDish {
	id: string;
	name: string;
	description: string;
	picture?: string;
	price: number;
	cost: number;
	categoryId: string;
	createdAt: Date;
	updatedAt: Date;
}
