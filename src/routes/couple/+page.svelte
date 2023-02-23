<script>
  let scroll;  
  import author from "$lib/img/author-small.webp"; 
  import poster from "$lib/img/video_intro.webp"; 
  import source from "$lib/img/video.mp4";  
  import individual from "$lib/img/individual.webp";
  import individual_2 from "$lib/img/individual_2.webp";
  import author_picture from "$lib/img/author_picture.webp";
  import blog_1 from "$lib/img/blog_1.webp"; 
  import blog_2 from "$lib/img/blog_2.webp"; 
  import blog_3 from "$lib/img/blog_3.webp";  
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { circInOut } from 'svelte/easing'; 
  import { Accordion, AccordionItem } from "svelte-accessible-accordion";  
  let visible = true,
          onLoad = false
  onMount(() => {
      setTimeout(() => onLoad = true, 50)
  })
</script>
<svelte:head>
	<title>Male Psychologist for Couples Counselling (150€)</title>
	<meta data-key="description" name="description" content="Rediscover the Strengths of Your Relationship. Meet Patric Pförtner (M. Sc. Psychologist) for Relationship Counselling. Begin Online Counselling within 7 Days. Weekend Sessions Available.">
</svelte:head>
<svelte:window bind:scrollY={scroll} />
{#if onLoad && visible}
            <div id="page-header" class="ph-full ph-center" style="background: #D5C8BA;">
              <div class="page-header-inner tt-wrap">
                <div class="ph-caption">
                  <h1 style="color:#783350" style:transform={`translate3d(0, ${scroll * -0.09}px, 0)`} class="hero_h1" class:hidden={visible} in:fly="{{ y: 120, duration: 1500, easing: circInOut }}">Psychological Online Counselling <br/>For Couples</h1>
                  <div style:transform={`translate3d(0, ${scroll * 0.15}px, 0)`} in:fly="{{ y: 120, duration: 3000, delay: 350, easing: circInOut }}" class="ph-caption-title-ghost">Couples Counselling & Couples Therapy</div>
                </div>
                <div in:fly="{{ y: 120, duration: 1500, delay: 500, easing: circInOut }}" class="ph-caption-subtitle "><p class="hero_p" style="color:#4a112a">
                  Do you find that worrying about your partner and stress are impacting your everyday life? Do you have difficulties with communication and intimacy? Do you find yourself on another page than your partner? If at times you feel stuck and don't know what to do, know that you are not alone! Hi, I am Patric Pförtner, M. Sc. Psychologist, loving husband and father. My philosophy as a psychologist is to use supportive, and at times, direct means when working with couples. On this page you can find everything about my Online Couples Counselling services. 
                </p></div> 
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
                <track default kind="captions"  srclang="en">
                <source src="{ source }" type="video/mp4"> 
              Your browser does not support the video tag.
              </video>
              <p class="description text-center" style="margin-top: 0px">
                <b style="font-size: 30px">⇡</b><br/>
                Feel free to watch my <b>12 seconds video,</b> if you haven't already.
              </p> 
            </div>
        <section class="slide">
          <div class="content">
              <div class="container-l"> 
                  <ul class="flex reverse">
                    <li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1 padding-top-1 padding-bottom-1">
                      <img class="author1" src={ author } alt="What to expect from online psychological counselling for couples sessions with a male psychologist or male therapist."/></li>
                      <li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1">
                        
                          <h2 class="heading-5 padding-top-8-bigscreen">What to expect?</h2>
                <p class="description">
                  You're considering online counselling and wonder what the benefits are. Here are 5 benefits enlisted for you.
                </p> 
                <Accordion class="margin-0">
                  <AccordionItem>
                    <h2 slot="title"  class="heading-4">1. Confidential</h2>
                    <p class="description">
                      As a German psychologist, I am subject to § 203 (StGB) of confidentiality.
                    </p>
                  </AccordionItem>
                  <AccordionItem>
                    <h2 slot="title"  class="heading-4">2. Location independent</h2>
                    <p class="description">
                      The online setting allows us to get in touch <b>no matter where you are in the world.</b>
                    </p>
                  </AccordionItem>
                  <AccordionItem>
                    <h2 slot="title"  class="heading-4">3. Flexible in time</h2>
                    <p class="description">
                      There is no long journey to visit me at my office. Therefore, you can get counselling from the comfort of your own home, schedule appointments around your busy schedule at work and you can receive online counselling from anywhere in the world. Even when you are having a holiday. Time slots are also available after 5 p.m. (GMT+1) and on weekends (extra fee applicable).
                    </p>
                  </AccordionItem>
                  <AccordionItem>
                    <h2 slot="title"  class="heading-4">4. Secure video connection</h2>
                    <p class="description">
                      Only applications that have been tested for safety are used. Video calls take place via an end-to-end encrypted connection.
                    </p>
                  </AccordionItem>
              
                  <AccordionItem>
                    <h2 slot="title"  class="heading-4">5. Individual</h2>
                    <p class="description"> 
                      I have a passion for working with couples at all stages of the life cycle. Premarital, empty nesters, LGBT couples, couples with young children seeking to balance their life, couples needing support around sexuality and commitment issues, couples at a crossroads. If at times you feel overwhelmed or stuck and don't know what to do, know that you are not alone! No matter what concern you have I will be right by your side. Working together, we will focus on the areas you want to improve in your life. 
                    </p>  
                  </AccordionItem> 
                </Accordion>
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
                          <h2 class="heading-5">How it works.
                          </h2>  
                          <p class="description padding-top-3-bigscreen padding-right-2-bigscreen">
                            <b>1. Contact:</b> You can <a href="/contact" class="link-underlined">contact</a> me by phone or email. During ongoing meetings I can not be reached. I prefer to be contacted via email and usually answer within 24 hours.
                          </p>  
                          <p class="description padding-top-3-bigscreen padding-right-2-bigscreen">
                            <b>2. Free initial consultation:</b> In a 15-minute talk you have the chance to verify whether I am the right companion for your request. Once you decided I will send you an email with more details, including an intake questionnaire and counselling contract.
                          </p>  
                          <p class="description padding-top-3-bigscreen padding-right-2-bigscreen">
                            <b>3. Intake session:</b> After I receive your documents, I will reply with a link to my intake session booking calendar. You can get familiar with my <a href="/price" class="link-underlined">prices here.</a>  
                          </p> 
                      </li>
                      <li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1 padding-top-1 padding-bottom-1">
                        <img class="author1" src={ individual } alt="How to start working with a male psychologist and receive a free initial couples therapy consultation of 15 minutes."/></li> 
                  </ul>
              </div>
          </div>
        </section>
        <section class="slide">
          <div class="content">
              <div class="container-l"> 
                  <ul class="flex verticalCenter reverse">
                    <li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1 padding-top-1 padding-bottom-1">
                      <img class="author1" src={ individual_2 } alt="Psychological topics that male psychologist Patric Pförtner encounters in his online psychological counselling sessions and couple therapy sessions."/></li>
                      <li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1">
                          <h2 class="heading-5">Topics that <b>I am familiar with.</b>
                          </h2> 
                          <ul class="flex verticalCenter reverse">
                            <li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1">
                              <ul class="description listing padding-top-3-bigscreen padding-right-2-bigscreen">
                                <li>Marital and Premarital Issues</li>
                                <li>Recurring conflicts</li>
                                <li>Joint decision-making</li>
                                <li>Communication difficulties</li>
                                <li>Jealousy</li>
                            </ul> 
                            </li>
                            <li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1">
                              <ul class="description listing padding-top-3-bigscreen padding-right-2-bigscreen">
                                <li>Infidelity</li>
                                <li>Long-distance relationship</li>
                                <li>Trust issues</li>
                                <li>Sexual needs</li>
                                <li>Separation</li>
                                <li>Divorce</li>
                                <li>Parenting</li>
                            </ul> 
                            </li>
                          </ul> 
                      </li>
                  </ul>
              </div>
          </div>
        </section>

<section class="slide">
  <div class="content">
      <div class="container-l">  
        <h2 class="heading-5 padding-top-8-bigscreen">Questions? Answers.</h2>
        <p class="description">
          Here are some of the most frequently asked questions on psychology4.me. If you cannot find the answer to your question(s), PLEASE don’t hesitate to 
          <a href="/contact" class="link-underlined">reach out.</a>
        </p> 
        <Accordion>
          <AccordionItem>
            <h2 slot="title"  class="heading-4">Are you currently accepting new clients?</h2>
            <p class="description">
              Yes! I am accepting new clients for online counselling who are residents of Germany or Bulgaria. Contact me if you are a resident of another country.
            </p>
          </AccordionItem>
          <AccordionItem>
            <h2 slot="title"  class="heading-4">How do I know that we are a good fit?</h2>
            <p class="description">
              We won’t know until we get a feel for each other, thus we begin with a free 15 minute phone consultation. Time is valuable though, and no need to waste time if you don’t have a sense that we will work well together. So here’s a glimpse into how I work:
            </p>
            <p class="description">
              First and foremost, there has to be an openness to learning new things and breaking old habits as well as a sense of trust. Trust that our time together is valuable and that I will offer insight that I feel will be helpful for your concerns. 
            </p>
            <p class="description">
              My philosophy as a psychologist is to work in a supportive, and at times, gently challenging environment. Together we will examine your past and social environment and work on new patterns.  My approach has roots in mindfulness, emotional awareness, and cognitive restructuring. In my experience, the greater our flexibility in response to obstacles, the less trapped we feel. If we can think our way out, and find a new frame or state of mind, then that is wonderful. If it is easier to shift our behavioural patterns and change our habits to achieve our goals, then that is equally fantastic. However, there will be times in which you simply need a non-judgemental space to hear yourself think. And finally, I will be there every step of the way and give you enough room to vent, too.
            </p>
          </AccordionItem>
          <AccordionItem>
            <h2 slot="title"  class="heading-4">Are your services covered by my health insurance?</h2>
            <p class="description">
              As an independent psychologist, I am not able to accept insurance at this time. The costs for psychological couple counselling are generally not covered by health insurance companies.
            </p>
            <p class="description">
              Psychotherapy, on the other hand, is covered by health insurance companies if you visit a local and licensed psychotherapists. <b>Health insurance companies only pay for mental illness that requires a diagnosis.</b>
            </p>  
          </AccordionItem>
          <AccordionItem>
            <h2 slot="title"  class="heading-4">How long will it take before we feel a change?</h2>
            <p class="description">
              Every couple is different, and everyone's problems are different. It takes time, as well as intimicy, trust and effort, to feel better.  Effective counselling requires an investment of time, attention and energy.  The more time and attention you each give each other in and outside of counselling, the better you'll feel.              
            </p> 
            <p class="description">
              Occasionally, I will ask how you feel, how you are progressing, and for feedback about how we are working together.
            </p>
            <p class="description">
              Counselling is a collaborative process, and your feedback to me is essential for ensuring that our work is productive and meaningful for you.
            </p>
          </AccordionItem> 

          <AccordionItem>
            <h2 slot="title"  class="heading-4">How long do counselling sessions last?</h2>
            <p class="description">
              Sessions for couples are 90 minutes. They are usually scheduled once a week. However, some problems may require more frequent sessions. We will decide together how frequently we will meet.
            </p> 
          </AccordionItem>
          <AccordionItem>
            <h2 slot="title"  class="heading-4">How much does psychological counselling cost?</h2>
            <p class="description">
              For a full overview on costs, please visit the <a href="/price" class="link-underlined">prices</a> section of my website.
            </p>
          </AccordionItem>
          <AccordionItem>
            <h2 slot="title"  class="heading-4">We cannot keep an agreed appointment. And now?</h2>
            <p class="description">
              Please cancel appointments either by phone or email. If I cannot be reached personally, please leave me a message on my mailbox. However the appointment may be used for an individual session, too.
            </p>
            <p class="description">
              24 business hours’ notice is required to cancel and reschedule a session. Otherwise, you are financially responsible for the full session fee. Payment is processed before the beginning of a session.
            </p>
          </AccordionItem>
         
          <AccordionItem>
            <h2 slot="title"  class="heading-4">How soon could we get started?</h2>
            <p class="description">
              Depending on your time flexibility or urgency, an initial consultation is possible in the same week or the following week. The consultation can usually begin promptly.
            </p>
          </AccordionItem>
          <AccordionItem>
            <h2 slot="title"  class="heading-4">Are there evening or weekend appointments?</h2>
            <p class="description">
              I have a limited quota of appointments after 5 p.m. (GMT+1) and on weekends. Reach out to me about it.
            </p>
            <p class="description">
              This opportunity allows us to get in touch across the globe despite strong professional commitments and major time differences.
              These appointments are also a great advantage for couples.
            </p>
          </AccordionItem> 

          <AccordionItem>
            <h2 slot="title"  class="heading-4">What happens during a couple session?</h2>
            <p class="description">
              I will encourage both of you to talk and will carefully listen to what you have to say. You are allowed to say anything. However, there will be times where I am going to stop you, too. 
            </p> 
            <p class="description">
              Bare in mind that I work in a supportive, and at times, gently challenging environment with you. Thus I need to ask questions that help me better understand how your relationship works.
            </p> 
            <p class="description">
              As our work together progresses, I will offer observations about patterns of thinking and behaviour that may be affecting the intimicy and trust foundament of your relationship. Other times, I may offer observations in order to help you understand yourself.
            </p> 
            <p class="description">
              Finally, I will help you identify ways of solving relationship issues. 
            </p>                          
          </AccordionItem> 
        </Accordion>

        <div class="padding-top-5">
          <div class="pad text-center" style="padding-top: 35px">
            <h2 class="heading-5">Limits of Online Counselling</h2>
            <p class="description">The online counselling offered here does not constitute nor replace psychotherapy in the sense of German psychotherapy regulations. Online counselling cannot offer adequate support in all cases. Some problems, especially acute psychological crises as well as serious mental disorders, require in-person and long-term contact. In these cases, please contact psychotherapists, your health insurance provider or emergency services in your area. If you are unsure whether you need counselling or perhaps psychotherapy after all, feel free to <a href="/contact" class="link-underlined">contact me.</a> Together we can explore what is appropriate for you.</p>  
          </div>
        </div> 
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
