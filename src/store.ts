import { writable,Writable } from 'svelte/store';

export type worksProps = undefined | {
  description:string,
  github:string,
  id:number,
  img:string,
  link:string,
  name:string
}

export const pageHeight: Writable<number> = writable(0);
export const isMobile: Writable<Boolean> = writable(false);
export const isError: Writable<Boolean> = writable(false);
export const isLoading: Writable<Boolean> = writable(false);
export const storeData:Writable <worksProps[]> = writable(undefined);

export const fetchData = async ()  => {
  isLoading.set(true)
  try {
    const response = await fetch("http://wnordqvist.com/data/db.json");
    if (response.ok) {
      let responseData = await response.json()	
      storeData.set(responseData)
    }
  } catch (error) {
    console.log("FAILING FETCHING DATA FROM http://wnordqvist.com/data/db.json")
    isError.set(true)
    storeData.set([
      {
        "id":1,
        "name":"stureplansgruppen",
        "img":"http://wnordqvist.com/img/spg.jpg",
        "link":"https://www.stureplansgruppen.se/",
        "github":"https://github.com/Stureplansgruppen/stureplansgruppen",
        "description":" <p>Stureplansgruppen wanted to change their current website that was built into Wordpress to a more modern and flexible CMS where they can have more flexibility and ownership over the content and layout. <br/> I decided therefore, to build up a new site for them using React and Contentful/Gatsby as a CSM. You can read more about <a href={'https://www.contentful.com/'}>Contentful</a> and <a href={'https://www.gatsbyjs.org/'}> Gatsby</a> here. </p>"
      },
      {
        "id":2,
        "name":"insurely-kartan",
        "img":"http://wnordqvist.com/img/insurelykarta.jpg",
        "link":"http://karta.insurely.se/",
        "github":null,
        "description":"<p>The Insurely map was my final exams in school where I decided to build an insurance map for Insurley. The map purpose is to help consumers to compare their insurance expenses with others in same or similar areas. <br/> The map is built with React.</p>"
      },
      {
        "id":3,
        "name":"natten",
        "img":"http://wnordqvist.com/img/natten.jpg",
        "link":"https://www.natten.eu/",
        "github":"https://github.com/JohnArtur/natten",
        "description":"<p>Natten is one of Stockholms most popular nightclubs. They wanted an easy CMS to be able to change and update the site. <br/> I decided, therefore, to build up a new simple site for them using React and Contentful/Gatsby as a CSM. <br/> You can read more about <a href={'https://www.contentful.com/'}>Contentful</a> and <a href={'https://www.gatsbyjs.org/'}> Gatsby</a> here.  </p>"
      },
      {
        "id":4,
        "name":"Portfolio",
        "img":"http://wnordqvist.com/img/portfolio.jpg",
        "link":"https://www.wnordqvist.com",
        "github":null,
        "description":"<p>My portfolio created in Svelte where I add all my work for job searching purpose.</p>"
      },
      {
        "id":5,
        "name":"Angular Todo-list",
        "img":"http://wnordqvist.com/img/angular-list.jpg",
        "link":"http://wnordqvist.com/angular-todo/",
        "github":"https://github.com/WilliamNordqvist/angular-todo-list",
        "description":"<p>Todo app created in Angular and Firebase.</p>"
      },
      {
        "id":6,
        "name":"MovieSearch",
        "img":"http://wnordqvist.com/img/moviesearch.jpg",
        "link":"https://www.wnordqvist.com/moviesearch",
        "github":"https://github.com/WilliamNordqvist/moovieSearch",
        "description":"<p>Movie search app in React, using themoviedb API </p>"
      },
      {
        "id":7,
        "name":"React-Native-Chart",
        "img":"http://wnordqvist.com/img/react-native-list.jpg",
        "link":"https://github.com/WilliamNordqvist/react-native-cart",
        "github":null,
        "description":"<p>Shoppinglist created with React Native</p>"
      },
      {
        "id":8,
        "name":"Udemy - Svelte course",
        "img":"http://wnordqvist.com/img/svelte-course.jpg",
        "link":"http://wnordqvist.com/svelte-course/",
        "github":null,
        "description":"<p>This was a Svelte course I took to improve my skills. You can read more about the course <a href={'https://www.udemy.com/course/sveltejs-the-complete-guide/'}> here</a>. </p>"
      },
      {
        "id":9,
        "name":"Portfolio 2.0",
        "img":"http://wnordqvist.com/img/portfolio2.jpg",
        "link":"http://wnordqvist.com/portfolio2.0/",
        "github":"https://github.com/WilliamNordqvist/Portfolio-React",
        "description":"<p> The first project created with React. Basic portfolio using react-router, Particles background effect and a simple weather API request. </p> "
      },
      {
        "id":10,
        "name":"Beerhunter - app",
        "img":"http://wnordqvist.com/img/beerhunter.jpg",
        "link":"https://github.com/WilliamNordqvist/Beerhunter",
        "github":null,
        "description":"<p> One of our final React course project where we got assigned to create a GPS Web-based application together with google  <a href='https://firebase.google.com/'>firebase</a> backend. <br/> Beerhunter is simply an app where you can check-in/Rate different bar. You can also easily see where your friends are and what bar they recommend. </p>"
      },
      {
        "id":11,
        "name":"Character - Generator",
        "img":"http://wnordqvist.com/img/charactergenerator.jpg",
        "link":"http://wnordqvist.com/character-generator/",
        "github":"https://github.com/WilliamNordqvist/Character-Genererator-Local-Storage",
        "description":"<p>Final project in vanilla js / HTML, where our task was to build a project and focus on map, filter and foreach before the React courses.</p>"
      },
      {
        "id":12,
        "name":"Texteditor",
        "img":" http://wnordqvist.com/img/texteditor.jpg",
        "link":"http://wnordqvist.com/texteditor/",
        "github":"https://github.com/WilliamNordqvist/Quire-by-Capricorn",
        "description":"<p> One of the first projects I got assigned in school, where our task was to create a text editor in vanilla js together with localstorage. </p>"
      },
      {
        "id":13,
        "name":"Portfolio 1.0",
        "img":"http://wnordqvist.com/img/portfolio1.jpg",
        "link":"http://wnordqvist.com/portfolio1.0/",
        "github":"https://github.com/WilliamNordqvist/portfolio-school",
        "description":"<p> One of the first projects created in school where our task was to build a portfolio in vanilla js and HTML.</p>"
      }
    ])
  }
  isLoading.set(false)
}

