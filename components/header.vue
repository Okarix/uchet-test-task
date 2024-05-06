<script lang="ts" setup>
import { useProductsStore } from '../.nuxt/imports';

const store = useProductsStore();

const { cart } = storeToRefs(store);

watch(cart.value, () => {
	console.log(cart.value);
});
</script>

<template>
	<header class="px-8 flex items-center justify-between mx-auto w-11/12 h-200px bg-zinc-800 rounded-md shadow-md shadow-zinc-800">
		<div class="flex items-center gap-6">
			<img
				src="../assets/icons/logo.svg"
				alt="Logo"
				class="w-14 h-14"
			/>
			<p class="text-xl font-bold">test-task</p>
		</div>
		<div class="flex items-center gap-6">
			<switcher />
			<nuxt-link to="/">
				<img
					src="../assets/icons/home.svg"
					alt="Home"
					class="w-8 h-8 cursor-pointer hover:opacity-10"
			/></nuxt-link>
			<nuxt-link to="/favorites">
				<img
					src="../assets/icons/heart.svg"
					alt="Favorites"
					class="w-8 h-8 cursor-pointer hover:opacity-10"
				/>
			</nuxt-link>
			<nuxt-link
				to="/cart"
				class="relative"
			>
				<img
					src="../assets/icons/cart.svg"
					alt="Cart"
					class="w-8 h-8 cursor-pointer hover:opacity-10"
				/>
				<div
					v-if="cart.length > 0"
					class="absolute top-5 w-5 h-5 bg-white bg-opacity-80 rounded-2xl text-red-800 pl-1 font-bold"
				>
					{{ cart.length }}
				</div>
			</nuxt-link>
		</div>
	</header>
</template>
