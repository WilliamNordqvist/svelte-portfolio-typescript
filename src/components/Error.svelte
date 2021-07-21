<script lang="ts">
  import GithubSVG from '../icons/github.svelte'
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Lato:400,700");

 .error-box {
	 position: absolute;
	 width: 350px;
	 height: 350px;	 
}

 .face {
	 position: absolute;
	 width: 22%;
	 height: 22%;
	 background: #fcfcfc;
	 border-radius: 50%;
	 border: 1px solid #777;
	 top: 11%;
	 animation: roll 3s ease-in-out infinite;
}
 .eye {
	 position: absolute;
	 width: 5px;
	 height: 5px;
	 background: #777;
	 border-radius: 50%;
	 top: 40%;
	 left: 20%;
}
 .right {
	 left: 68%;
}
 .mouth {
	 position: absolute;
	 top: 43%;
	 left: 41%;
	 width: 7px;
	 height: 7px;
	 border-radius: 50%;
	 border: 2px solid;
	 border-color: #777 transparent transparent #777;
	 transform: rotate(45deg);
}

 .shadow {
	 position: absolute;
	 width: 21%;
	 height: 3%;
	 opacity: 0.5;
	 background: #777;
	 left: 40%;
	 top: 36%;
	 border-radius: 50%;
}
 .move {
	 animation: move 3s ease-in-out infinite;
}
 .message {
	 position: absolute;
	 width: 100%;
	 text-align: center;
	 height: 40%;
	 bottom: 20px;
}

 @keyframes roll {
	 0% {
		 transform: rotate(0deg);
		 left: 25%;
	}
	 50% {
		 left: 60%;
		 transform: rotate(168deg);
	}
	 100% {
		 transform: rotate(0deg);
		 left: 25%;
	}
}
 @keyframes move {
	 0% {
		 left: 25%;
	}
	 50% {
		 left: 60%;
	}
	 100% {
		 left: 25%;
	}
} 
</style>


  <div class="error-box ">
    <div class="face">
      <div class="eye"></div>
      <div class="eye right"></div>
      <div class="mouth sad"></div>
    </div>
    <div class="shadow move"></div>
    <div class="message ">
      <h3 class="Title">Error!</h3>
      <p class="Text">oh no, my work could not fetch. Checkout my github instead.</p>
        <a class="pointer" target="_blank" rel="noopener noreferrer" href="https://github.com/WilliamNordqvist">
          <GithubSVG/>
      </a>
      </div>
  </div>
