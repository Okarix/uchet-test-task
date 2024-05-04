<script lang="ts" setup>
import { useProductsStore } from '#imports';
import type { MergedProduct } from '~/types/dto';

const store = useProductsStore();

const { cart, items, totalPrice, isCreating } = storeToRefs(store);

const cartIsEmpty = computed(() => cart.value.length === 0);

const btnDisabled = computed(() => isCreating.value || cartIsEmpty.value);

watch(cart, () => {
	items.value = items.value.map((item: MergedProduct) => ({
		...item,
		isAdded: false,
	}));
});
</script>

<template>
	<CartItemList :items="cart" />
	<div>
		<div class="flex flex-col gap-4 mt-7">
			<div class="flex gap-2 mb-6">
				<span>Итого:</span>
				<div class="flex-1 border-b border-dashed"></div>
				<b>{{ totalPrice }} тг.</b>
			</div>

			<button
				:disabled="btnDisabled"
				@click="store.createOrder"
				class="bg-zinc-800 w-full rounded-xl py-3 text-white hover:bg-zinc-900 transition active:bg-zinc-950 disabled:bg-zinc-500 disabled:text-slate-600 cursor-pointer"
			>
				Оформить заказ
			</button>
		</div>
	</div>
</template>
