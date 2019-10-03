<script>
	export let name;
	export let categories;
	import { onMount } from 'svelte';
	import getCategories from "./api.js";

	onMount(() => {
		$categories = getCategories();
	});
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>
{#each $categories as cat}
	<!-- promise is pending -->
	<p>Something went wrong: {cat}</p>
{/each}
