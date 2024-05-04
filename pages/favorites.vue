<script setup lang="ts">
import { useProductsStore } from '#imports';
const store = useProductsStore();
store.fetchFavoritesOnPage();

const { favorites } = storeToRefs(store);
</script>

<template>
	<main class="py-14">
		<h2 class="text-2xl font-bold">Избранное</h2>
		<CardItemList
			:items="favorites"
			:is-favorites="true"
		/>
	</main>
</template>
