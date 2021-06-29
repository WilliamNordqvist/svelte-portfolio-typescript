<script lang="ts">
	import { isMobile, fetchData } from "./store";
	import Background from "./Background.svelte"
	
	let w:number;

	$: if (w < 768) {
    isMobile.set(true);
  } else {
    isMobile.set(false);
  }
	
	fetchData();
</script>

<style>
	:global(body) {
		padding:0;
	}
	main {
		height:100vh;
		
	}
</style>

<svelte:head>
	<title>William Nordqvist - FE</title>
	<meta name="description" content="William Nordqvist, Front end developer - Portfolio">
	<meta name="keywords" content="Sweden, Stockholm ,Frontend developer,HTML, CSS, JavaScript, React, Svelte">
	<meta name="og:title" property="og:title" content="William Nordqvist, FrontEnd Developer - Portfolio">
</svelte:head>

<svelte:window bind:innerWidth={w} />
<main>
	<Background/>
</main>
