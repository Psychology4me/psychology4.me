<!-- Renders posts listed by category -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { postsPerPage } from '$lib/config'

	export let data
	const { page, category, totalPosts, posts } = data 

	$: lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1
	$: upperBound = Math.min(page * postsPerPage, totalPosts)
</script>


<svelte:head>
	<title>Blog Category {category} - page {page}</title>
	<meta data-key="description" name="description" content="
	Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist.">
</svelte:head>


<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
{#if posts && posts.length}
<section class="padding-top-10">
	<div class="content">
		<div class="container-l">   
			<div class="container-m"> 
				<h1 class="heading-5 text-center padding-top-10">Category: {category}</h1>
				<p class="padding-top-2-bigscreen text-center">
					Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist.
				</p>
				</div>

			<PostsList {posts} />
 			<Pagination currentPage={page} {totalPosts} path="/blog/category/{category}/page" />
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