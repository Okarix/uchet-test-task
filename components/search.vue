<script setup lang="ts">
import { useProductsStore } from '#imports';

const { fetchItems } = useProductsStore();

const x = ref('');

watch(x, (val: string) => {
	fetchItems(`title=*${val}*`);
});
</script>

<template>
	<UInput
		icon="i-heroicons-magnifying-glass-20-solid"
		size="lg"
		color="white"
		:trailing="false"
		placeholder="Поиск..."
		v-model="x"
	/>
</template>
