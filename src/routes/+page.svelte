<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
	import Movies from '$lib/components/Movie.svelte';
</script>
<head>
	<title>Home page</title>
</head>

<section style="background-color: white;border-radius: 10px;">
	<h1 style="text-align: center; color: black;margin-bottom: 10px; font-size: large;">Upcoming Movies</h1>
	<script>
		import Movies from '../components/Movies.svelte';
	</script>

	<Movies />
</section>

