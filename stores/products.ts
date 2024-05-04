import { defineStore } from 'pinia';
import type { IProduct, MergedProduct } from '~/types/dto';

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

	function sortBy(sortBy: 'price' | '-price' | 'name') {
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
		const { data, error } = (await useFetch(`https://97414763bdeb5f30.mokky.dev/items?${params || ''}`)) as any;
		if (error.value) {
			console.error(error);
		}

		items.value = data.value.map((obj: any) => ({
			...obj,
			isFavorite: false,
			isAdded: false,
			favoriteId: null,
		}));
	}

	async function fetchFavorites() {
		const { data, error } = (await useFetch(`https://97414763bdeb5f30.mokky.dev/favorites?_relations=items`)) as any;
		if (error.value) {
			console.error(error);
		}

		items.value = data.value.map((item: any) => {
			return {
				...item.item,
				isFavorite: true,
				favoriteId: item.id,
			};
		});
	}

	async function addToFavorite(item: MergedProduct) {
		try {
			if (!item.isFavorite) {
				const obj = {
					item_id: item.id,
				};

				item.isFavorite = true;

				const data = (await $fetch('https://97414763bdeb5f30.mokky.dev/favorites', {
					method: 'POST',
					body: JSON.stringify(obj),
					headers: {
						'Content-Type': 'application/json',
					},
				})) as any;

				item.favoriteId = data.id;
			} else {
				item.isFavorite = false;
				await $fetch(`https://97414763bdeb5f30.mokky.dev/favorites/${item.favoriteId}`, {
					method: 'DELETE',
				});
				item.favoriteId = null;
			}
		} catch (err) {
			console.error(err);
		}
	}

	return {
		items,
		cart,
		sortBy,
		favorites,
		addToCart,
		removeFromCart,
		addToFavorite,
		fetchItems,
		fetchFavorites,
	};
});
