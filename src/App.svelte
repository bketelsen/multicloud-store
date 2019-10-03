<script>
	export let name;
	import { onMount } from 'svelte';
	import getCategories from "./api.js";
	//import categories from "./categorystore.js";

	




</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>
{#await getCategories() then cats}
	<p> {cats}</p>
{/await}
