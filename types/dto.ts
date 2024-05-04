export interface IProduct {
	id: number;
	title: string;
	imageUrl: string;
	price: number;
}

export interface IProductAdditionalProp {
	isFavorite: boolean | undefined;
	isAdded: boolean | undefined;
	favoriteId: number | null;
	onClickFavorite: (() => void) | undefined;
	onClickAdd: (() => void) | undefined;
}

export type MergedProduct = IProduct & IProductAdditionalProp;
