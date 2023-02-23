<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	export let data 
  </script>
  <svelte:head>
	<title>Blog - Psychology4.me</title>
	<meta data-key="description" name="description" content="
	Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist.">
</svelte:head>
  <section class="padding-top-10">
	  <div class="content">
		  <div class="container-l"> 
			<div class="container-m"> 
			<h1 class="heading-5 text-center padding-top-10">Blog of Psychology4.me</h1>
			<p class="padding-top-2-bigscreen text-center">
				Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist. You may want to visit the <a href="/blog/category/" class="link-underlined">Categories</a> page, too.
			</p>
			</div>
			<PostsList posts={data.posts} />

			<Pagination currentPage={1} totalPosts={data.total} />
		  </div>
	  </div>
  </section>