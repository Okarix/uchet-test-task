<template>
	<div class="py-14">
		<div class="pl-40 flex justify-between">
			<h2 class="text-2xl font-bold">Клавишные</h2>
			<div class="flex gap-3"><Search /> <Sort /></div>
		</div>
		<main class="flex gap-8">
			<Sidebar />
			<CardItemList />
		</main>
	</div>
</template>
