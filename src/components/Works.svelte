<script lang="ts">
  import ErrorComponent from "./Error.svelte"
  import { isMobile, storeData, isError } from "../store";
  import type {worksProps} from '../store'
  import ArrowDownIcon from "../icons/arrow-down-icon.svelte";
  import Overlay from "./Overlay.svelte"

  let selectedWork: worksProps;
  let toggleOverlay:boolean = false;

  const openOverlay = (work:worksProps) => {
    selectedWork = work;
    toggleOverlay = true;
  };

  const closeOverlay = () => {
    selectedWork = undefined;
    toggleOverlay = false;
  };

</script>

<style>
  ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card {
    z-index: 2;
    height: 14em;
    width: 24em;
    margin: 1em;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    overflow: hidden;
    transition: 0.3s all ease-in-out;
  }

  .cardImg {
    height: 100%;
    background-repeat: round;
    transition: 0.3s all ease;
  }

  .gradient {
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.7) 70%
    );
    transform: translateY(1000px);
    transition: 0.3s all ease-in-out;
  }

  .text {
    text-transform: uppercase;
    height: 100%;
    justify-content: flex-end;
  }

  .title {
    color: #f9f1e9;
    font-weight: 400;
    letter-spacing: 0.1em;
  }

  .card:hover {
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
      0 2px 2px rgba(255, 255, 255, 0.1), 0 4px 4px rgba(255, 255, 255, 0.1),
      0 8px 8px rgba(255, 255, 255, 0.1), 0 16px 16px rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  .cardImg:hover {
    transform: scale(1.01);
  }

  .cardImg:hover > .gradient {
    transform: translateY(0);
  }

  @media only screen and (max-width: 768px) {
    ul {
      width:100%;
    }

    .card {
      width:100%;
    }
    .cardImg:hover > .gradient {
      transform: translateY(1000px);
    }
  }

  .btn {
  color: #FFF;
  transition: all 0.5s;
  position: relative;
  padding:8px;
  margin-bottom: 20px;
}
.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255,255,255,0.1);
  transition: all 0.3s;
}
.btn:hover::before {
  opacity: 0 ;
  transform: scale(0.5,0.5);
}
.btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(255,255,255,0.5);
  transform: scale(1.2,1.2);
}
.btn:hover::after {
  opacity: 1;
  transform: scale(1,1);
}

span {
  padding: 10px;
}
</style>


<section class="flex" id="work">
  {#if $storeData}
  
  <h2 class="Title">My Work</h2>
  <ul>
    {#each $storeData as work (work.id)}
      <div class="card" on:click={$isMobile && (() => openOverlay(work))}>
        <div class="cardImg" style={`background-image:url(${work.img})`}>
          <div class="gradient">
            <div class="text flex">
              <h1 class="title">{work.name}</h1>
                <div class="btn" on:click={() => openOverlay(work)}>
                  <span>Läs mer</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </ul>
  <Overlay {selectedWork} {closeOverlay} {toggleOverlay} />
{/if}

{#if $isError}
<ErrorComponent/>
{/if}
<ArrowDownIcon scrollTo="skills" positionY={0} size={30} />
</section>
