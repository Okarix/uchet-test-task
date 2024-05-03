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

	function sort(sortBy: 'price' | '-price' | 'name') {
		switch (sortBy) {
			case 'price':
				items.value.sort((a, b) => a.price - b.price);
				break;
			case '-price':
				items.value.sort((a, b) => b.price - a.price);
				break;
			case 'name':
				items.value.sort((a, b) => a.title.localeCompare(b.title));
				break;
			default:
				console.error('Invalid sorting parameter');
		}
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
		sort,
		favorites,
		addToCart,
		removeFromCart,
		fetchItems,
	};
});
