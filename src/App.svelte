<script lang="ts">
	import { isMobile } from "./store";
	import Background from "./Background.svelte"
	
	let w:number;

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
	main {
		height:100vh;
		
	}
</style>


<svelte:window bind:innerWidth={w} />
<main>
	<Background/>
</main>
