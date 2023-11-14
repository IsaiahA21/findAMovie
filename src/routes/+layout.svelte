
<script>
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import logo from '$lib/images/popcorn.png';
	import { AppShell,AppBar } from '@skeletonlabs/skeleton';
	import  git  from '$lib/images/github_icon.png';
	
</script>

<div class="app">
	<header>
		<h3 class="h3" style="margin:40px 0px; text-align: center;">Welcome to Find A Movie</h3>
		<img src={logo} alt="Logo is a bucket of porcorn" style="width: 8%; margin-left: auto; margin-right: auto;" /> 
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p style="text-align: center;"> visit <a class="atag" href="https://github.com/IsaiahA21">github.com/IsaiahA21</a> and <a class="atag" href="https://www.linkedin.com/in/isaiah-a-2001">linkedin.com/in/isaiah-a-2001</a></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
	.atag{
		font-style: italic;
		text-decoration: underline;
		color:aqua;
	}
</style>


