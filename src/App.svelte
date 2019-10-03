<script>
	export let name;
	import { onMount } from 'svelte';
	import getCategories from "./api.js";
	//import categories from "./categorystore.js";

	
	const promise = getCategories();



</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>
{#await promise}
	<!-- promise is pending -->
	<p>waiting for the promise to resolve...</p>
{:then value}
	<!-- promise was fulfilled -->
	<p>The value is {value}</p>
{/await}
