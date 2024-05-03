<script setup lang="ts">
import { useProductsStore } from '#imports';

const { sortBy } = useProductsStore();

const onChangeSelect = (event: any) => {
	sortBy(event.target.value);
};
</script>

<template>
	<select
		@change="onChangeSelect"
		class="py-2 px-3 bg-gray-900 border border-slate-700 rounded-md outline-none"
	>
		<option value="name">Все</option>
		<option value="-price">По цене (дорогие)</option>
		<option value="price">По цене (дешевые)</option>
	</select>
</template>
