<script setup lang="ts">
import { useProductsStore } from '~/stores/products';
import { storeToRefs } from 'pinia';

const props = defineProps({
	params: String,
});

const store = useProductsStore();
store.fetchItems(props.params ? `category=${props.params}` : '');
const { items } = storeToRefs(store);
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
