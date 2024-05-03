<script setup lang="ts">
const links = [
	{
		label: 'Все',
		to: '/',
	},
	{
		label: 'Гитары',
		to: '/guitars',
	},
	{
		label: 'Ударные',
		to: '/drums',
	},
	{
		label: 'Клавишные',
		to: '/keys',
	},
];
</script>

<template>
	<UVerticalNavigation :links="links">
		<template #default="{ link }">
			<span class="group-hover:text-primary relative text-lg">{{ link.label }}</span>
		</template>
	</UVerticalNavigation>
</template>
