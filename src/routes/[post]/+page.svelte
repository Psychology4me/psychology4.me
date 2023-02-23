<script>
	import Time from "svelte-time";
  export let data
  import author from "$lib/img/author-small.webp";
  let scroll;     
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { circInOut } from 'svelte/easing';  
  let visible = true,
            onLoad = false
    onMount(() => {
        setTimeout(() => onLoad = true, 50)
    })
import author_picture from "$lib/img/author_picture.webp";
import blog_1 from "$lib/img/blog_1.webp"; 
import blog_2 from "$lib/img/blog_2.webp"; 
import blog_3 from "$lib/img/blog_3.webp"; 
const {
	title,
	excerpt,
	date,
	updated,
	coverImage,
	coverWidth,
	coverHeight,
	categories 
} = data.meta
const { PostContent } = data
</script>
<svelte:head> 
	<title>{title}</title>
	<meta data-key="description" name="description" content="{excerpt}">
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<meta property="og:image" content="{ coverImage }" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<meta name="twitter:image" content="{ coverImage }" /> -->
</svelte:head>
<svelte:window bind:scrollY={scroll} />

{#if onLoad && visible}
            <div id="page-header" class="ph-full ph-center" style="background: #D5C8BA;">
              <div class="page-header-inner tt-wrap">
                <div class="ph-caption">
					<p class="text-center" style="color:#783350" class:hidden={visible} in:fly="{{ y: 120, duration: 1500, delay: 250, easing: circInOut }}" style:transform={`translate3d(0, ${scroll * 0.05}px, 0)`}>
						<Time timestamp="{date}" format="MMM D, YYYY" />
					</p>
                  <h1 style="color:#783350" style:transform={`translate3d(0, ${scroll * -0.09}px, 0)`} class="hero_h1_max container-l" class:hidden={visible} in:fly="{{ y: 120, duration: 1500, easing: circInOut }}">{ title }</h1>
                  <div style:transform={`translate3d(0, ${scroll * 0.15}px, 0)`} in:fly="{{ y: 120, duration: 3000, delay: 350, easing: circInOut }}" class="ph-caption-title-ghost">{ title }</div>
                </div>
			<div class="credits__item " in:fly="{{ y: 120, duration: 1500, delay: 700, easing: circInOut }}" style:transform={`translate3d(0, ${scroll * 0.035}px, 0)`}>
				<img width="50" style="border-radius: 50%;" src="{ author_picture }" alt="Patric Pförtner Psychologist at Psychology4.me">
				<p style="line-height:1;font-size: 20px; font-weight:500"><a href="/about" class="link-underlined" style="padding:0; margin-bottom:5px">Patric Pförtner</a> <br/><span style="padding:0; font-size: 14px; font-weight:300">Psychologist (M. Sc.)</span></p> 
			</div>
			
              </div>
              <a in:fly="{{ x: -120, duration: 1500, delay: 1200, easing: circInOut }}" href="#page-content" class="scroll-down-circle"  data-offset="30" style="opacity: {1 - Math.max(0, scroll / 460)};"style:transform={`translate3d(${scroll * -0.2}px, 0, 0)`}>
                <div class="sdc-inner">
                  <div class="sdc-icon bounce">↓</div>
                  <svg viewBox="0 0 500 500">
                    <defs>
                      <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle"></path>
                    </defs>
                    <text dy="30">
                      <textPath xlink:href="#textcircle">Scroll down - Scroll down -</textPath>
                    </text>
                  </svg>
                </div>
              </a>
              <div in:fly="{{ y: 120, duration: 1500, delay: 1200, easing: circInOut }}" class="made-with-love " style="opacity: {1 - Math.max(0, scroll / 460)};"style:transform={`translate3d(0, ${scroll * 0.10}px, 0)`}>
                <div class="mwl-inner">
                  <div class="mwl-text">Made with</div>
                  <div class="mwl-icon">❤</div>
                </div>
              </div>
            </div>
            <div class="container-l" style="margin-top: -7%; z-index: 99" in:fly="{{ y: 120, duration: 1500, delay: 1500, easing: circInOut }}" style:transform={`translate3d(0, ${scroll * -0.015}px, 0)`}> 
				<img class="author1" src="{ coverImage }" alt="{ title }"/>
            </div>
<article class="article slide" style="padding:0; margin:0"> 
  <div class="content padding-top-3-bigscreen padding-top-2">
	<div class="container-m"> 
		<svelte:component this={PostContent} />
    {#if categories}
    <div class="post-footer"></div>
		<aside class="post-footer">
			<h2>Posted in:</h2>
				{#each categories as category}
        <a href="/blog/category/{category}/" class="link-underlined"  style="font-size:2rem; margin-left: 15px; font-weight:400;">
          { category }
        </a>
				{/each} 
		</aside>
	{/if}
	</div>   
</div>
</article>
<section class="slide" style="padding-bottom:0; margin-bottom:0">
  <div class="content">
      <div class="container-l"> 
          <ul class="flex verticalCenter">
              <li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1">
                  <h2 class="heading-5">About me</h2>
                  <p class="description padding-top-3-bigscreen padding-right-2-bigscreen">
                  My philosophy as a male psychologist is to work in a supportive, and at times, gently challenging environment. Together we will examine your past and social environment and work on new patterns. The catalyst for this change is already inside you. Throughout this process, you will be in the driver’s seat. My job is to be next to you every step of the way, while you find the change you seek.
                  </p>
                  <a class="link-underlined sized_description padding-top-3-bigscreen" href="/about"><b>Learn more</b></a>
              </li>
              <li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1 padding-top-3 padding-bottom-3">
                  <img class="author1" src={ author } alt="About the male Psychologist Patric Pförtner"/></li> 
          </ul>
      </div>
  </div>
</section>
<section class="slide" style="padding-top:0; margin-top:0">
  <div class="content">
      <div class="container-l padding-top-3-bigscreen"> 
          <h2 class="heading-5 padding-top-3-bigscreen">Not sure if online counselling is for you? </h2>
          <p class="heading-6">
            Many of my clients seek my support in different areas of life. Some of them have childhood experiences that look great on the surface, but underneath, are filled with unspoken pain, anger and neglect. In our session I will create a safe and non-judgmental space for you so that our relationship can grow.
           </p>   
          <p class="heading-6">During this process, I am interested in knowing <b>who you are, how you think, what desires you have, how you foster relationships, and what you identify as barriers to personal growth.</b></p>
          <p class="heading-6">
              All in order to understand who you are and how you function in the here and now. Check out the helpful articles below to learn more about online counselling and its benefits.
          </p>  
          <h2 class="heading-5 padding-top-3-bigscreen">Helpful articles.</h2>

          <ul class="flex verticalCenter">
            <li class="col-4-12 col-phone-1-1 col-phablet-1-2 col-tablet-1-2">
              <a href="/benefits-of-online-counselling" class="box-77">
                <div class="thumbnail-77">
                  <img src="{ blog_1 }" alt="Article 1: What are the benefits of online counselling?" class="wide">
                </div>
                <div class="details-77 equalElement" style="height: 180px;">
                  <div class="table wide">
                    <div class="cell"> 
                      <div class="card_title">What are the benefits of online counselling?</div>
                      <div class="author-77">
                        <img width="45" class="avatar-77" src="{ author_picture }" alt="Patric Pförtner Psychologist at Psychology4.me">
                        <div class="name-77">Patric Pförtner</div>
                        <p class="specs-77">Psychologist (M. Sc.)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="col-4-12 col-phone-1-1 col-phablet-1-2 col-tablet-1-2">
              <a href="/what-to-expect-first-session" class="box-77">
                <div class="thumbnail-77">
                  <img src="{ blog_2 }" alt="Article 2: What to expect in your first session?" class="wide">
                </div>
                <div class="details-77 equalElement" style="height: 180px;">
                  <div class="table wide">
                    <div class="cell"> 
                      <div class="card_title">What to expect in your first session?</div>
                      <div class="author-77">
                        <img width="45" class="avatar-77" src="{ author_picture }" alt="Patric Pförtner Psychologist at Psychology4.me">
                        <div class="name-77">Patric Pförtner</div>
                        <p class="specs-77">Psychologist (M. Sc.)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="col-4-12 col-phone-1-1 col-phablet-1-2 col-tablet-1-2">
              <a href="/10-signs-right-psychologist" class="box-77">
                <div class="thumbnail-77">
                  <img src="{ blog_3 }" alt="Article 3: 10 signs you've found the right psychologist." class="wide">
                </div>
                <div class="details-77 equalElement" style="height: 180px;">
                  <div class="table wide">
                    <div class="cell"> 
                      <div class="card_title">10 signs you've found the right psychologist.</div>
                      <div class="author-77">
                        <img width="45" class="avatar-77" src="{ author_picture }" alt="Patric Pförtner Psychologist at Psychology4.me">
                        <div class="name-77">Patric Pförtner</div>
                        <p class="specs-77">Psychologist (M. Sc.)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
        </ul>
      </div>
  </div>
</section>
{/if}