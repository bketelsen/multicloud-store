<script>
	export let name;
	export let categories;
	import { onMount } from 'svelte';
	import getCategories from "./api.js";

	onMount(() => {
		categories = getCategories();
	});
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>
{#await categories}
	<!-- promise is pending -->
	<p>waiting for the promise to resolve...</p>
{:then value}
	<!-- promise was fulfilled -->
	<p>The value is {value}</p>
{:catch error}
	<!-- promise was rejected -->
	<p>Something went wrong: {error.message}</p>
{/await}