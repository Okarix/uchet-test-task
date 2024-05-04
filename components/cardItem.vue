<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
	id: Number,
	imageUrl: String,
	title: String,
	price: Number,
	isFavorite: Boolean,
	isAdded: Boolean,
	onClickFavorite: Function,
	onClickAdd: Function,
});
</script>

<template>
	<div class="relative bg-zinc-800 border border-zinc-800 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:shadow-zinc-800 transition">
		<img
			:src="imageUrl"
			alt="Product"
			class="rounded-md min-w-64 min-h-64 object-contain"
		/>

		<p class="mt-2">{{ title }}</p>

		<div class="flex justify-between mt-5">
			<div class="flex flex-col">
				<span class="text-slate-400">Цена:</span>
				<b>{{ price }} тг.</b>
			</div>

			<img
				@click="onClickAdd"
				src="../assets/icons/add.svg"
				alt="Add"
			/>
			<img
				src="../assets/icons/like_1.svg"
				alt="Like"
				@click="onClickFavorite"
			/>
		</div>
	</div>
</template>
