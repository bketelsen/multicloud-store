<script>
	import { onMount } from 'svelte';

	let products;


  onMount(async function() {
	products = await fetch(`https://bketelsen-eval-prod.apigee.net/multicloud/products/`).then(r => r.json());
  })


</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Product List</h1>
{#if products}
	{#each products.values as item}
		<li>{item.name} - {item.description}</li>	
	{/each}
{/if}