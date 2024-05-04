<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { type MergedProduct } from '~/types/dto';

const props = defineProps({
	items: Array<MergedProduct>,
	isFavorites: Boolean,
});

const emit = defineEmits(['addToFavorite', 'addToCart']);
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
				:is-favorite="item.isFavorite"
				:id="item.id"
				:on-click-favorite="isFavorites ? null : () => emit('addToFavorite', item)"
				:on-click-add="isFavorites ? null : () => emit('addToCart', item)"
				:is-added="item.isAdded"
			/>
		</div>
	</div>
</template>
