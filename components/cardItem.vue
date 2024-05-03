<script setup>
defineProps({
	id: Number,
	imageUrl: String,
	title: String,
	price: String,
	isFavorite: Boolean,
	isAdded: Boolean,
});
</script>

<template>
	<div class="relative bg-zinc-800 border border-zinc-800 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:shadow-zinc-800 transition">
		<img
			:src="imageUrl"
			alt="Sneaker"
			class="rounded-md"
		/>

		<p class="mt-2">{{ title }}</p>

		<div class="flex justify-between mt-5">
			<div class="flex flex-col">
				<span class="text-slate-400">Цена:</span>
				<b>{{ price }} тг.</b>
			</div>

			<img
				src="../assets/icons/add.svg"
				alt="Add"
			/>
			<img
				src="../assets/icons/like_1.svg"
				alt="Like"
			/>
		</div>
	</div>
</template>
