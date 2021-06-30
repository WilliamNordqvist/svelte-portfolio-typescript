<script lang="ts">
	import GlobalWrapper from "./GlobalWrapper.svelte"
	import Background from "./Background.svelte"
	import StarWars from "./StarWars.svelte"
	import Skills from "./Skills.svelte"	
</script>

<GlobalWrapper>
	<Background>
		<StarWars />
		<StarWars />
		<Skills/>
	</Background>
</GlobalWrapper>
