export interface IProduct {
	id: number;
	title: string;
	imageUrl: string;
	price: number;
}

export interface IProductAdditionalProp {
	isFavorite: boolean | null;
	isAdded: boolean | null;
	favoriteId: number | null;
}

export type MergedProduct = IProduct & IProductAdditionalProp;
