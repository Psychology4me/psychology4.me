<script>
	export let data
  	const { uniqueCategories } = data
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
	<title>Categories - Psychology4.me</title>
	<meta data-key="description" name="description" content="
	Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist.">
</svelte:head>
  <svelte:window bind:scrollY={scroll} />
  {#if onLoad && visible}
  <section class="padding-top-10">
	  <div class="content">
		  <div class="container-l"> 
			<div class="container-m"> 
			<h1 class="heading-5 text-center padding-top-10" class:hidden={visible} in:fly="{{ y: 120, duration: 1500, easing: circInOut }}">Blog - Categories</h1>
			<p class="padding-top-2-bigscreen text-center" in:fly="{{ y: 120, duration: 1500, delay: 300, easing: circInOut }}">
				Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist.
			</p>
			</div>
			<ul class="grid" in:fly="{{ y: 120, duration: 1500, delay: 500, easing: circInOut }}">
				{#each uniqueCategories as category}
				<li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1">
					<p>
					<a href="/blog/category/{category.title}" class="link-underlined">
						{ category.title } 
						({category.count})
					</a>
					</p> 
				</li>
				{/each}
			</ul>
		  </div>
	  </div>
  </section>
  {/if}