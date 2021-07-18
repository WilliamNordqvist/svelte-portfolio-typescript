<script lang="ts">
import { fetchData, isMobile, pageHeight } from "../store"
 fetchData();
let offsetHeight:number

$:pageHeight.set(offsetHeight)

let w:number
	$: if (w < 768) {
    isMobile.set(true);
  } else {
    isMobile.set(false);
  }	
</script>

<style>
	:global(body) {
		padding:0;

	}
	:global(section) {
		max-width: 1700px;
		position: relative;
		padding-bottom: 5em;
		min-height: 100vh;
	}

	:global(a) {
		color:inherit;
	}
	:global(.Title) {
  text-align: center;
  font-size: 3em;
  font-weight: 200;
  color: white;
  text-transform: uppercase;
  margin-top: 0;
	}

	:global(.flex) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
	}

	:global(.pointer) {
		cursor: pointer;
	}

</style>

<svelte:head>
	<title>William Nordqvist - FE</title>
	<meta name="description" content="William Nordqvist, Front end developer - Portfolio">
	<meta name="keywords" content="Sweden, Stockholm ,Frontend developer,HTML, CSS, JavaScript, React, Svelte">
	<meta name="og:title" property="og:title" content="William Nordqvist, FrontEnd Developer - Portfolio">
</svelte:head>

<svelte:window bind:innerWidth={w} />

<main bind:offsetHeight={offsetHeight}>
  <slot />
</main>