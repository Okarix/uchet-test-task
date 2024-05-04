<script setup lang="ts">
import { useProductsStore } from '~/stores/products';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const props = defineProps({
	params: String,
});

const route = useRoute();

const store = useProductsStore();

if (route.name === 'favorites') {
	store.fetchFavorites();
} else {
	store.fetchItems(props.params ? `category=${props.params}` : '');
}
const { items } = storeToRefs(store);
</script>

<template>
	<div>
		<div class="grid grid-cols-3 gap-5 mt-5">
			<CardItem
				v-for="item in items"
				:id="item.id"
				:key="item.id"
				:title="item.title"
				:image-url="item.imageUrl"
				:price="item.price"
			/>
		</div>
	</div>
</template>
