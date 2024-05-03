import { defineStore } from 'pinia';
import type { IItem, IState } from '~/types/dto';

export const useProductsStore = defineStore({
	id: 'products',
	state: (): IState => ({
		items: [],
		cart: [],
		favorites: [],
	}),
	actions: {
		addToCart(item: IItem) {
			this.cart.push(item);
		},
		removeFromCart(item: IItem) {
			this.cart.splice(this.cart.indexOf(item), 1);
		},

		async fetchItems() {
			try {
				const data: IItem[] = await $fetch('https://97414763bdeb5f30.mokky.dev/items');
				this.items = data;
			} catch (err) {
				console.error(err);
			}
		},
	},
});
