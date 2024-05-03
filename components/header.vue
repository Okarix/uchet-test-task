<script lang="ts" setup></script>

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
			<nuxt-link to="/cart">
				<img
					src="../assets/icons/cart.svg"
					alt="Cart"
					class="w-8 h-8 cursor-pointer hover:opacity-10"
				/>
			</nuxt-link>
		</div>
	</header>
</template>
