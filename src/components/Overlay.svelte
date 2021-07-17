<script lang="ts">
  import type {worksProps} from '../store'
  import CloseIcon from "../icons/closeIcon.svelte";
  import Github from '../icons/github.svelte'

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
    width: 80%;
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
      padding: 0px 8px;
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
      width: 100%;
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
    <div class="close pointer" on:click={() => closeOverlay()}>
      <CloseIcon size="20px" />
    </div>
    {#if selectedWork}
      <div class="content">

        <a class="pointer" target="_blank" rel="noopener noreferrer" href={selectedWork.link}>
          <img
            class="workImg"
            src={selectedWork.img}
            alt={`image of ${selectedWork.name}`} />
        </a>
        <h1>{selectedWork.name}</h1>

        <hr>

        <div class="contentText">
          {@html selectedWork.description}
        </div>
        {#if selectedWork.github}
          <a
            class="pointer"
            target="_blank"
            rel="noopener noreferrer"
            href={selectedWork.github}>
            <Github size="30px"/>
          </a>
        {/if}
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
      </div>
    {/if}

  </div>
</section>
