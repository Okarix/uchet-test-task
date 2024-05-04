import { defineStore } from 'pinia';
import type { IProduct, MergedProduct } from '~/types/dto';

export const useProductsStore = defineStore('products', () => {
	const items = ref<MergedProduct[]>([]);
	const cart = ref<MergedProduct[]>([]);
	const favorites = ref<MergedProduct[]>([]);

	function addToCart(item: MergedProduct) {
		cart.value = [...cart.value, item];
	}

	function removeFromCart(item: MergedProduct) {
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
		try {
			const data = (await $fetch(`https://97414763bdeb5f30.mokky.dev/items?${params || ''}`)) as any;

			items.value = data.map((obj: IProduct) => ({
				...obj,
				isFavorite: false,
				isAdded: false,
				favoriteId: null,
			}));
		} catch (err) {
			console.error(err);
		}
	}

	async function fetchFavorites() {
		try {
			const data = (await $fetch('https://157b2cf8830f04b6.mokky.dev/favorites')) as any;

			items.value = items.value.map(item => {
				const favorite = data.find((favorite: any) => favorite.item_id === item.id);

				if (!favorite) {
					return item;
				}

				return {
					...item,
					isFavorite: true,
					favoriteId: favorite.id,
				};
			});
		} catch (err) {
			console.error(err);
		}
	}

	async function fetchFavoritesOnPage() {
		try {
			const data = (await $fetch(`https://97414763bdeb5f30.mokky.dev/favorites?_relations=items`)) as any;

			favorites.value = data.map((item: any) => item.item);
		} catch (err) {
			console.log(err);
		}
	}

	const addToFavorite = async (item: MergedProduct) => {
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
			console.log(err);
		}
	};

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
		fetchFavoritesOnPage,
	};
});
