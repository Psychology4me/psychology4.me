<script>
    let scroll; 
    import author from "$lib/img/author-small.webp";
    import author_picture from "$lib/img/author_picture.webp";
    import author_2 from "$lib/img/author-2.webp"; 
    import blog_1 from "$lib/img/blog_1.webp"; 
    import blog_2 from "$lib/img/blog_2.webp"; 
    import blog_3 from "$lib/img/blog_3.webp"; 
    import review from "$lib/img/reviews.webp";
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { circInOut } from 'svelte/easing'; 
    import poster from "$lib/img/video_intro.webp"; 
    import source from "$lib/img/video.mp4";  
    let visible = true,
            onLoad = false
    onMount(() => {
        setTimeout(() => onLoad = true, 50)
    })
</script>
<svelte:head>
	<title>Male Psychologist for Online Counselling starting at 97€</title>
	<meta data-key="description" name="description" content="Feeling Overwhelmed? Get Affordable Help Today. Meet Patric Pförtner (M. Sc. Psychologist) for Your Online Counselling Session. Start within 7 Days. Weekend & After 5 p.m. Sessions Possible!">
</svelte:head>
<svelte:window bind:scrollY={scroll} />
{#if onLoad && visible}
              <div id="page-header" class="ph-full ph-center" style="background: #D5C8BA;">
                <div class="page-header-inner tt-wrap">
                  <div class="ph-caption">
                    <h1 style="color:#783350" style:transform={`translate3d(0, ${scroll * -0.09}px, 0)`} class="hero_h1" class:hidden={visible} in:fly="{{ y: 120, duration: 1500, easing: circInOut }}">I am Patric Pförtner, <br/>your private psychologist.</h1>
                    <div style:transform={`translate3d(0, ${scroll * 0.15}px, 0)`} in:fly="{{ y: 120, duration: 3000, delay: 350, easing: circInOut }}" class="ph-caption-title-ghost">Your Online Psychologist</div>
                  </div>
                  <div in:fly="{{ y: 120, duration: 1500, delay: 500, easing: circInOut }}" class="ph-caption-subtitle "><p class="hero_p" style="color:#4a112a">You are enough. Perhaps it hasn’t felt that way recently. Maybe you feel hopeless, fatigued or frustrated. Maybe you find yourself worried about past decisions, unsure of yourself and unsure of what the future holds. And maybe you are burdened with the ups and downs of life and feel out of control or burnt-out. What is "wrong" might not even be apparent, but you feel it in your spine, joints, and stomach. Searching for help is a brave step. I’m glad you’re here.
                </p></div>
                  <br>
                  <div in:fly="{{ y: 120, duration: 1500, delay: 750, easing: circInOut }}" style:transform={`translate3d(0, ${scroll * 0.025}px, 0)`} class="tt-btn tt-btn-light-outline ">
                    <a href="/contact" data-hover="When you're ready...">Request Appointment</a>
                  </div>
                </div>
                <a in:fly="{{ x: -120, duration: 1500, delay: 1200, easing: circInOut }}" href="#page-content" class="scroll-down-circle" data-offset="30" style="opacity: {1 - Math.max(0, scroll / 460)};"style:transform={`translate3d(${scroll * -0.2}px, 0, 0)`}>
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
              <div class="container-m" style="margin-top: -7%; z-index: 99" in:fly="{{ y: 120, duration: 1500, delay: 1500, easing: circInOut }}" style:transform={`translate3d(0, ${scroll * -0.015}px, 0)`}> 
                <video class="author1" controls poster="{ poster }">
                  <track default  kind="captions" srclang="en">
                  <source src="{ source }" type="video/mp4"> 
                Your browser does not support the video tag.
                </video>
              </div>
<section class="slide">
    <div class="content">
        <div class="container-l"> 
            <ul class="flex verticalCenter">
                <li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1">
                    <h2 class="heading-5">About me</h2>
                    <p class="description padding-top-3-bigscreen padding-right-2-bigscreen">
                    My philosophy as a psychologist is to work in a supportive, and at times, gently challenging environment. Together we will examine your past and social environment and work on new patterns. The catalyst for this change is already inside you. Throughout this process, you will be in the driver’s seat. My job is to be next to you every step of the way, while you find the change you seek.
                    </p>
                    <a class="link-underlined sized_description padding-top-3-bigscreen" href="/about"><b>Learn more</b></a>
                </li>
                <li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1 padding-top-3 padding-bottom-3">
                    <img class="author1" src={ author } alt="About the male Psychologist Patric Pförtner"/></li> 
            </ul>
        </div>
    </div>
</section>
<section class="slide">
  <div class="content">
      <div class="container-l"> 
          <ul class="flex verticalCenter reverse">
            <li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1 padding-top-1 padding-bottom-1">
              <img class="author1" src={ author_2 } alt="Male Psychologist Patric Pförtner"/></li> 
              <li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1">
                  <h2 class="heading-5">Why do people <br/>seek my help?</h2>
                  <p class="description padding-top-3-bigscreen padding-right-2-bigscreen">
                    Many of my clients seek my support in different areas of life. Some of them have childhood experiences that look great on the surface, but underneath, are filled with unspoken pain, anger and neglect. I offer structure, ideas, feedback and tools on many topics concerning <a class="link-underlined" href="/individual">individuals</a> and <a class="link-underlined" href="/couple">couples</a>.
                  </p> 
              </li>
          </ul>
      </div>
  </div>
</section>
<section class="slide">
  <div class="content">
      <div class="container-l"> 
          <ul class="flex verticalCenter">
              <li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1">
                  <h2 class="heading-5">What clients<br/> say about me.</h2>
                  <p class="description padding-top-3-bigscreen padding-right-2-bigscreen">
                    As a psychologist, author and consultant, those who seek my services feel better, think better and have better relationships. A big part of my work is helping people achieve what they want, rather than trying to "overcome problems" by discussing what feels bad, endlessly. Nonetheless, read for yourself what clients wrote on Google Review.
                  </p> 
                  <a class="link-underlined sized_description padding-top-3-bigscreen" href="https://reviewthis.biz/flat-queen" target="_blank" rel="noreferrer"><b>All Google Reviews</b></a>
              </li>
              <li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1 padding-top-1 padding-bottom-1">
                  <img class="author1" src={ review } alt="Two Reviews about the male Psychologist Patric Pförtner"/></li> 
          </ul>
      </div>
  </div>
</section>
<section class="slide padding-top-10 padding-bottom-10" style="background:#F1F1F1">
  <div class="content padding-top-10 padding-bottom-10">
      <div class="container-l text-center"> 

        <h2 class="heading-5 text-center">Ready for Online Counselling?</h2> 
        <div class="tt-btn tt-btn-light-outline3 ">
          <a href="/price" data-hover="Just click!">View Prices</a>
        </div>
        <div class="tt-btn tt-btn-light-outline2">
          <a href="/contact" data-hover="You are ready!">Request Appointment</a>
        </div> 
      </div>
  </div>
</section>
<section class="slide">
  <div class="content">
      <div class="container-l"> 
          <h2 class="heading-5">Not sure if online counselling is for you? </h2>
          <p class="heading-6">
            The relationship is at the heart of effective counselling. My focus at the beginning is to create a safe and non-judgmental space for you so that our relationship can grow.
          </p>   
          <p class="heading-6">During this process, I am interested in knowing <b>who you are, how you think, what desires you have, how you foster relationships, and what you identify as barriers to personal growth.</b></p>
          <p class="heading-6">
              All in order to understand who you are and how you function in the here and now. Check out the helpful articles below to learn more about online counselling and its benefits.
          </p>  
          <h2 class="heading-5 padding-top-3-bigscreen">Learn from the <br/> helpful articles.</h2>

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