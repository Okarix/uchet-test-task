<script setup lang="ts">
const store = useProductsStore();
const items = ref();

onMounted(() => {
	items.value = store.items;
});
</script>

<template>
	<div>
		<div class="grid grid-cols-3 gap-5 mt-5">
			<CardItem
				v-for="item in items"
				:key="item.id"
				:title="item.title"
				:image-url="item.imageUrl"
				:price="item.price"
			/>
		</div>
	</div>
</template>
