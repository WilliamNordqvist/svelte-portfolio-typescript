<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import { onMount } from "svelte";
  import ArrowDownIcon from "../icons/arrow-down-icon.svelte";
  import { isMobile } from "../store"

  let visible:boolean = false;

  onMount(() => {
    setTimeout(() => (visible = true), 9500);
  });
</script>

<style>
  .william {
    animation: firstname 10s ease-out;
  }
  .nordqvist {
    animation: lastname 10s ease-out;
  }

  @keyframes firstname {
    0% {
      opacity: 0;
      transform: scale(1.5) translateY(-0.75em);
    }
    20% {
      opacity: 1;
    }
    90% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: translateZ(-1000em);
    }
  }

  @keyframes lastname {
    0% {
      opacity: 0;
      transform: scale(1.5) translateY(0.5em);
    }
    20% {
      opacity: 1;
    }
    90% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: translateZ(-1000em);
    }
  }

  .hero-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    perspective: 800px;
    z-index: 99;
  }

  .text {
    color: #f9f1e9;
    text-align: center;
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  h1 {
    font-size: 4.5em;
    margin: 0;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 4em;
    }
    p {
      font-size: 1.5em;
    }
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 3em;
    }
    p {
      font-size: 1.2em;
    }
  }
</style>

<section class="hero-container">
  <h1 class="william text">William</h1>
  <h1 class="nordqvist text">Nordqvist</h1>

  {#if visible}
    <p transition:fly={{ y: 200, duration: 2000 }} class="text">
      FrontEnd Developer
    </p>

    <div transition:fade={{ delay: 200, duration: 3000 }}>
      <ArrowDownIcon scrollTo="skills" positionY={$isMobile ? 30 : 15} size={30} />
    </div>
  {/if}
</section>
