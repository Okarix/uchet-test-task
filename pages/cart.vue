<template>
	<CartItemList />
	<div>
		<div class="flex flex-col gap-4 mt-7">
			<div class="flex gap-2 mb-6">
				<span>Итого:</span>
				<div class="flex-1 border-b border-dashed"></div>
				<b>100 тг.</b>
			</div>

			<button class="bg-zinc-800 w-full rounded-xl py-3 text-white hover:bg-zinc-900 transition active:bg-zinc-950 disabled:bg-slate-400 cursor-pointer">Оформить заказ</button>
		</div>
	</div>
</template>
