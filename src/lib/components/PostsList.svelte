<script>
	import author_picture from "$lib/img/author_picture.webp";
	export let posts = [];
</script>

<ul class="flex verticalCenter">
	{#each posts as post}
		<li class="col-4-12 col-phone-1-1 col-phablet-1-2 col-tablet-1-2">
			<a href="/{post.slug}" class="box-77">
				<div class="thumbnail-77">
					<img
						src="{post.coverImage}"
						alt="{post.title}"
						class="wide"
					/>
				</div>
				<div class="details-77 equalElement" style="height: 180px;">
					<div class="table wide">
						<div class="cell">
							<div class="card_title">{post.title}</div>
							<div class="author-77">
								<img
									width="45"
									class="avatar-77"
									src={author_picture}
									alt="Patric Pförtner Male Psychologist at Psychology4.me"
								/>
								<div class="name-77">Patric Pförtner</div>
								<p class="specs-77">Psychologist (M. Sc.)</p>
							</div>
						</div>
					</div>
				</div>
			</a>
		</li>
	{/each}
</ul>