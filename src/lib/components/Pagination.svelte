<script>
	import { postsPerPage } from '$lib/config'

	export let currentPage
	export let totalPosts
	export let path = '/blog/page'
	
	let pagesAvailable
	$: pagesAvailable = Math.ceil(totalPosts / postsPerPage)

	const isCurrentPage = (page) => page == currentPage
</script>

{#key currentPage}
	{#if pagesAvailable > 1}
	<div class="navpill2">
		<ul class="flex2">
			{#each Array.from({length: pagesAvailable}, (_, i) => i + 1) as page} 
			{#if isCurrentPage(page)}
			<li style="font-weight:600;">{page}</li>
			{:else} 
			<li><a href="{path}/{page}">{page}</a></li>
			{/if} 
			{/each}
		</ul>
		</div>
	{/if}
{/key}