<script lang="ts">
  import CloseIcon from "../icons/closeIcon.svelte";
  import Github from '../icons/github.svelte'
  import type { worksProps } from "../services/casesService";

  export let selectedWork:worksProps;
  export let closeOverlay:() => void;
  export let toggleOverlay:boolean;

</script>

<style>
  section {
    width: 100%; 
    height: 100%;
    position: fixed;
    overflow: scroll;
    z-index: 2;
    transition: 0.3s all ease-in-out;
    color: white;
  }
  .contentContainer {
    position: relative;
    width: 100%;
    height: 100%;
    background: #485460;
    overflow: scroll;
  }

  .close {
    background: transparent;
    border:none;
    position: absolute;
    left: 10px;
    top: 10px;
  }

  .content {
    margin-top: 2em;
    text-align: center;
  }

  h1 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 3em;
  }

  hr {
    width: 80%;
  }

  .workImg {
    width: 50%;
    box-shadow: 0 10px 20px -6px #000;
  }

  .contentText {
    width: 80%;
    margin: 2em auto;
    line-height: 1.4;
    text-align: center;
  }

  a {
    text-decoration: none;
    color:white;
  }

  .visistLink:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    .contentContainer {
      width: 100%;
      height: 100%;
    }

    .close {
      left:49%;
    }

    .content {
      margin-top: 50px;
    }

    h1 {
      font-size: 2em;
    }
    hr {
      width:100%;
    }
    .workImg {
      width: 90%;
    }
    .contentText {
      width: auto;
      margin: 0;
      text-align: center;
      padding: 0px 1em;
    }
  }
</style>

<section
  class="section"
  style={`top:${toggleOverlay ? '0' : '100%'}`}
  >
  <div class="contentContainer">
    <button class="close pointer" on:click={() => closeOverlay()}>
      <CloseIcon size="20px" />
    </button>
    {#if selectedWork}
      <div class="content">

        <a class="pointer" target="_blank" rel="noopener noreferrer" href={selectedWork.link || selectedWork.githubLink}>
          <img
            class="workImg"
            src={selectedWork.image.url}
            alt={`image of ${selectedWork.name}`} />
        </a>
        <h1>{selectedWork.name}</h1>

        <hr>

        <div class="contentText">
          {@html selectedWork.description}
        </div>
        {#if selectedWork.githubLink}
          <a
            class="pointer"
            target="_blank"
            rel="noopener noreferrer"
            href={selectedWork.githubLink}>
            <Github />
          </a>
        {/if}

        {#if selectedWork.link}
        <p>
          <b>
            <a
              target="_blank"
              rel="noopener noreferrer"
              class="visistLink pointer"
              href={selectedWork.link}>
              {selectedWork.link}
            </a>
          </b>
        </p>
        {/if}
       
      </div>
    {/if}

  </div>
</section>
