<script setup lang="ts">
import { useProductsStore } from '#imports';
import type { IProduct, MergedProduct } from '~/types/dto';
const store = useProductsStore();
store.fetchItems();
store.fetchFavorites();
const { items } = storeToRefs(store);

const addToFavorite = store.addToFavorite;

const onClickPlus = (item: MergedProduct) => {
	if (!item.isAdded) {
		store.addToCart(item);
	} else {
		store.removeFromCart(item);
	}
};
</script>

<template>
	<div class="py-14">
		<div class="pl-40 flex justify-between">
			<h2 class="text-2xl font-bold">Все</h2>
			<div class="flex gap-3"><Search /> <Sort /></div>
		</div>
		<main class="flex gap-8">
			<Sidebar />
			<CardItemList
				:items="items"
				@add-to-favorite="addToFavorite"
				@add-to-cart="onClickPlus"
			/>
		</main>
	</div>
</template>
