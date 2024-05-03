<script setup>
defineProps({
	id: Number,
	imageUrl: String,
	title: String,
	price: Number,
});
</script>

<template>
	<div class="flex w-96 border items-center border-slate-200 p-4 rounded-xl gap-4 shadow-slate-200 shadow-sm">
		<img
			class="w-16 h-16"
			:src="imageUrl"
			alt="Item"
		/>

		<div class="flex flex-col justify-between flex-1">
			<p class="text-sm">{{ title }}</p>

			<div class="flex justify-between mt-2">
				<b class="mt-2">{{ price }} тг.</b>
				<input
					type="number"
					value="1"
					min="1"
					max="10"
					class="pl-2 w-14 border rounded-md border-white"
				/>
				<img
					class="opacity-40 hover:opacity-100 cursor-pointer transition"
					src="../assets/icons/close.svg"
					alt="Close"
				/>
			</div>
		</div>
	</div>
</template>
