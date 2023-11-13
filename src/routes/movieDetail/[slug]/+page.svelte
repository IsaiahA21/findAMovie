<!-- page.svelte recieves its data from a load function defined inside +page.js -->
<script>
	import MovieDesc from '$lib/components/MovieDesc.svelte';

	/** @type {import('./$types').PageData} */

	// data is the object returned from the load function
	export let data;
	// selectedMovie is the object returned from the load function in +page.ts
	let { selectedMovie } =data.props;
	let isLoading = true;


  $: {
    // Check if selectedMovie is not null to determine loading state
        isLoading = !selectedMovie;
  }

</script>

{#if isLoading}
<!-- If isLoading is true -->
<h1 style="color: red;text-align: center;">Loading...</h1>

{:else}
<section style="background-color: white;border-radius: 10px;">
	<h1 style="text-align: center; color: black;margin-bottom: 10px; font-size: large;"></h1>
	<section>
		<MovieDesc {selectedMovie} />
	</section>
</section>
{/if}