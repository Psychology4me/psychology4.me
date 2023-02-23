<!-- This file handles any /blog/page/x route for pagination -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { postsPerPage } from '$lib/config'

	export let data
	const { page, totalPosts, posts } = data

	$: lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1
	$: upperBound = Math.min(page * postsPerPage, totalPosts)


</script>


<svelte:head>
	<title>Posts {lowerBound}–{upperBound} of {totalPosts} - Psychology4.me</title>
	<meta data-key="description" name="description" content="
	Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist.">
</svelte:head>

 
{#if posts.length}
<section class="padding-top-10">
	<div class="content">
		<div class="container-l">   
			<div class="container-m"> 
				<h1 class="heading-5 text-center padding-top-10">Blog of Psychology4.me</h1>
				<p class="padding-top-2-bigscreen text-center">
					Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist. You may want to visit the <a href="/blog/category/" class="link-underlined">Categories</a> page, too.
				</p>
				</div>

			<PostsList {posts} />

			<Pagination currentPage={page} {totalPosts} />
		</div>
	</div>
</section> 
{:else}
<section class="padding-top-10 padding-bottom-10">
	<div class="content">
		<div class="container-l text-center">   
		  <h1 class="heading-5 padding-top-10">Oops!</h1>

		 <p>Sorry, no posts to show here. <a href="/blog" class="link-underlined">Bring me back</a></p>
	  
		</div>
	</div>
</section>  
{/if}