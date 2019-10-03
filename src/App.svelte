<script>
	export let name;
	import { onMount } from 'svelte';
	import getCategories from "./api.js";
	import categories from "./categorystore.js";

	onMount(() => {
		categories.set( getCategories());
	});
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>
{#each $categories as cat}
	<p>Something went wrong: {cat}</p>
{/each}
