<script lang="ts">
  import LinkedInSVG from "../icons/linkedIn.svelte";
  import GithubSVG from '../icons/github.svelte'
  import GmailSVG from '../icons/gmail.svelte'
</script>

<style>
  footer {
    background: linear-gradient( 180deg, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 50% );
    height: 100px;
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: 20px;
  }

  a {
    margin: 0 15px;
  }
</style>

<footer class="flex">
    <a class="pointer" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/william-nordqvist-7221b340/">
        <LinkedInSVG/>
    </a>
    <a class="pointer" target="_blank" rel="noopener noreferrer" href="https://github.com/WilliamNordqvist">
        <GithubSVG/>
    </a>
    <a class="pointer" href="mailto:wnordqvist@gmail.com">
        <GmailSVG />
    </a>
</footer>
