import { defineStore } from 'pinia';
import type { IProduct } from '~/types/dto';

export const useProductsStore = defineStore('products', () => {
	const items = ref<IProduct[]>([]);
	const cart = ref<IProduct[]>([]);
	const favorites = ref<IProduct[]>([]);

	function addToCart(item: IProduct) {
		cart.value = [...cart.value, item];
	}

	function removeFromCart(item: IProduct) {
		cart.value.splice(cart.value.indexOf(item), 1);
	}

	async function fetchItems(params: string | null = null) {
		const { data, error } = await useFetch(`https://97414763bdeb5f30.mokky.dev/items?${params || ''}`);
		items.value = data.value as IProduct[];
		if (error.value) {
			console.error(error);
		}
	}

	return {
		items,
		cart,
		favorites,
		addToCart,
		removeFromCart,
		fetchItems,
	};
});
