<script lang="ts">
  export let size:number;
  export let scrollTo:string = "home";
  export let positionY:number = 0;

  const startScroll = () => {
    document.getElementById(scrollTo).scrollIntoView({ behavior: "smooth" });
  };
</script>

<style>
  .arrow-down-icon {
    position: absolute;
    border: 2px solid #f9f1e9;
    border-radius: 50%;
    -webkit-animation: shake 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite
      both;
    animation: shake 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite both;
    transform: translate3d(0, 0, 0);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
  }

  @keyframes shake {
    1%,
    6%,
    10% {
      transform: translate3d(0, 0, 0);
    }

    4%,
    9% {
      transform: translate3d(0, 8px, 0);
    }
  }
</style>

<div class="flex">
  <div
    style={`bottom: ${positionY}%`}
    class="arrow-down-icon pointer flex"
    on:click={startScroll}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-chevrons-down"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#f9f1e9"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="7 7 12 12 17 7" />
      <polyline points="7 13 12 18 17 13" />
    </svg>
  </div>
</div>
