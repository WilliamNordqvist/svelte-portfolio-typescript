<script lang="ts">
  import Particles from "svelte-particles";
  import { isMobile } from "./store"

 const particlesConfig = {
    particles: {
      number: {
        value: $isMobile ? 100 : 250,
        density: {
          enable: true,
          value_area: 1710.2328774690454,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        polygon: {
          nb_sides: 1,
        },
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: $isMobile ? 1 : 1.5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.3,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 60,
        color: "#f9f1e9",
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: $isMobile ? 0.3 : 0.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce",
        bounce: true,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 868.0624057955,
        },
      },
    },
    retina_detect: true,
  };
</script>

<style>
  :global(#tsparticles) {
		height: 100%;
    width:100%;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    overflow: scroll;
	}
</style>

<div>
  <Particles
    id="tsparticles"
    options={particlesConfig}
    />
  <slot />
</div>