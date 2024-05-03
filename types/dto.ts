export interface IItem {
	id: number;
	title: string;
	imageUrl: string;
	price: number;
}

export interface IState {
	items: IItem[];
	cart: IItem[];
	favorites: IItem[];
}
