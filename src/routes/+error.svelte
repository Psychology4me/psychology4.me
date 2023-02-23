<script>
	let scroll;     
	  import { onMount } from 'svelte';
	  import { fly } from 'svelte/transition';
	  import { circInOut } from 'svelte/easing';  
	  let visible = true,
			  onLoad = false
	  onMount(() => {
		  setTimeout(() => onLoad = true, 50)
	  }) 
  </script>
  <svelte:head>
	  <title>404 - Psychology4.me</title>
   </svelte:head>
  <svelte:window bind:scrollY={scroll} />
  {#if onLoad && visible}
  <section class="padding-top-10">
	  <div class="content">
		  <div class="container-l"> 
			<div class="container-m"> 
			<h1 class="heading-5 text-center padding-top-10" class:hidden={visible} in:fly="{{ y: 120, duration: 1500, easing: circInOut }}">404 - Not found</h1>
			<p class="padding-top-2-bigscreen text-center" in:fly="{{ y: 120, duration: 1500, delay: 300, easing: circInOut }}">
				<strong>Sorry!</strong> Maybe try one of these links?
			</p>
			<ul style="list-style: none; font-size: 20px" class="text-center">
				<li in:fly="{{ duration: 1500, delay: 2000, easing: circInOut, y: 15 }}"><a href="/about" class="link-underlined">About</a></li>
				<li in:fly="{{ duration: 1500, delay: 2100, easing: circInOut, y: 15 }}"><a href="/individual" class="link-underlined">Individual</a></li>
				<li in:fly="{{ duration: 1500, delay: 2200, easing: circInOut, y: 15 }}"><a href="/couple" class="link-underlined">Couple</a></li>
				<li in:fly="{{ duration: 1500, delay: 2300, easing: circInOut, y: 15 }}"><a href="/price" class="link-underlined">Price</a></li>
				<li in:fly="{{ duration: 1500, delay: 2400, easing: circInOut, y: 15 }}"><a href="/blog" class="link-underlined">Blog</a></li>
				<li in:fly="{{ duration: 1500, delay: 2500, easing: circInOut, y: 15 }}"><a href="/contact" class="link-underlined">Contact</a></li>
			</ul>
			</div>
		  </div>
	  </div>
  </section>
  {/if}