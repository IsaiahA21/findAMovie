<!-- page.svelte recieves its data from a load function defined inside +page.js -->
<script>
	/** @type {import('./$types').PageData} */
	export let data;
	let { movieId } = data.props;
	let selectedMovie = {

	}
</script>

<h1>{movieId}</h1>
<!-- <div>{@html data.content}</div> -->
<section style="background-color: white;border-radius: 10px;">
	<h1 style="text-align: center; color: black;margin-bottom: 10px; font-size: large;"></h1>

</section>