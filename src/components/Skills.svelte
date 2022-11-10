<script lang="ts">
  import ArrowDownIcon from "../icons/arrow-down-icon.svelte";
  import { onMount } from 'svelte';
  import { pageHeight } from "../store";

  type skillProps = {
    title:string,
    skill:number
  }

  const william:skillProps[] = [
    { title: "Javascript", skill: 90 },
    { title: "Typescript", skill: 80 },
    { title: "React", skill: 90 },
    { title: "HTML", skill: 90 },
    { title: "CSS", skill: 80 },
    { title: "Svelte", skill:80 },
    { title: "Java", skill: 20 },
    { title: "SQL", skill: 30 },
  ];

  let showSkillbar:Boolean;
  let scrollYPosition: number;
  let cvSectionHeight:number;
   
  onMount(() => {
    cvSectionHeight =  document.getElementById("cv").getBoundingClientRect().height * 2.5;    
  })


  $:if(scrollYPosition > ($pageHeight - cvSectionHeight)){
    showSkillbar = true
  } else {
    showSkillbar = false
  } 
</script>

<svelte:window bind:scrollY={scrollYPosition}/>

<style>
  section {
    position: relative;
  }

  .bars {
    width: 90%;
    max-width: 900px;
  }

  .bar {
    position: relative;
    background: rgba(245, 245, 245, 0.85);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
      0 2px 2px rgba(255, 255, 255, 0.1), 0 4px 4px rgba(255, 255, 255, 0.1),
      0 8px 8px rgba(255, 255, 255, 0.1), 0 16px 16px rgba(255, 255, 255, 0.1);
    height: 1.5em;
    margin: 0.3em 0 0.7em 0;
    border-radius: 5px;
    padding: 1px;
    -moz-padding:1px;
  }

  .barText {
    margin: 0;
    color: white;
    font-weight: 400;
    font-size: 16px;
  }

  progress[value] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    height: 100%;
  }

  progress[value]::-webkit-progress-bar {
    background-color: transparent;
  }
  progress[value]::-moz-progress-bar {
    background-color: black;
    border-radius: 5px;
   
  }

  progress[value]::-webkit-progress-value {
    background: black;
    border-radius: 5px;
    transition: width 2s;
  }

  span {
    position: absolute;
    left: 5px;
    top: 5px;
    color: white;
    font-size: 14px;
    font-weight: 100;
  }

  .progress-bar {
    background-color: whiteSmoke;
    border-radius: 2px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25) inset;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .progress-bar > span {
    background-color: blue;
    border-radius: 2px;
    display: block;
    text-indent: -9999px;
  }

  @media only screen and (max-width: 768px) {
    span {
      font-weight: 400;
    }
  }
</style>



<section id="skills" class="skills flex">
  <h2 class="Title">My Skills</h2>
  <div class="bars">
    {#each william as i (i.title)}
      <div class="barContainer" >
        <h3 class="barText">{i.title}</h3>
        <div class="bar flex">
          <span>{i.skill}%</span>
          <progress max="100" value={ showSkillbar ? i.skill : 0 }>
            <div class="progress-bar flex">
              <span style={`width: ${i.skill}%;`}>Progress:{i.skill}%</span>
            </div>
          </progress>
        </div>
      </div>
    {/each}
  </div>
  <ArrowDownIcon scrollTo="cv" positionY={0} size={30} />
</section>
