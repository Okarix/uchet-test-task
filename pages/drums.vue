<script setup lang="ts">
import { useProductsStore } from '#imports';
const store = useProductsStore();
store.fetchItems('category=drums');
const { items } = storeToRefs(store);
</script>

<template>
	<div class="py-14">
		<div class="pl-40 flex justify-between">
			<h2 class="text-2xl font-bold">Ударные</h2>
			<div class="flex gap-3"><Search /> <Sort /></div>
		</div>
		<main class="flex gap-8">
			<Sidebar />
			<CardItemList :items="items" />
		</main>
	</div>
</template>
