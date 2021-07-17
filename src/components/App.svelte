<script lang="ts">
	import GlobalWrapper from "./GlobalWrapper.svelte"
	import Background from "./Background.svelte"
	import StarWars from "./StarWars.svelte"
	import Skills from "./Skills.svelte"	
	import Works from "./Works.svelte"
</script>

<GlobalWrapper>
	<Background>
		<StarWars />
		<Works />
		<Skills/>
	</Background>
</GlobalWrapper>
