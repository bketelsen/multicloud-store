<script>
	export let name;
	import { onMount } from 'svelte';
	import getCategories from "./api.js";
	//import categories from "./categorystore.js";

	export let cats;


 $: cats = getCategories();


</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>
{#await cats then cat}
	<p> {cat}</p>
{/await}
