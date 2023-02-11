<script lang="ts">
	import GlobalWrapper from "./GlobalWrapper.svelte"
	import Background from "./Background.svelte"
	import StarWars from "./StarWars.svelte"
	import Skills from "./Skills.svelte"	
	import Works from "./Works.svelte"
	import Cv from "./Cv.svelte"
	import Footer from "./Footer.svelte"
	import { inject } from '@vercel/analytics';

  inject();


</script>


<GlobalWrapper>
	<Background>
		<StarWars />
		<Works />
		<Skills/>
		<Cv />
		<Footer />
	</Background>
</GlobalWrapper>
