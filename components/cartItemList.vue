<script setup lang="ts">
import { useProductsStore } from '#imports';
import { type MergedProduct } from '~/types/dto';

const props = defineProps({
	items: Array<MergedProduct>,
});

const { removeFromCart } = useProductsStore();
</script>

<template>
	<div class="grid grid-cols-3 mt-10 gap-3">
		<CartItem
			v-for="item in items"
			:key="item.id"
			:id="item.id"
			:title="item.title"
			:image-url="item.imageUrl"
			:price="item.price"
			@on-click-remove="() => removeFromCart(item)"
		/>
	</div>
</template>
