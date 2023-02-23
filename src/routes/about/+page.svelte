<script>
    let scroll;  
    import about from "$lib/img/about.webp";   
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
	<title>About Patric Pförtner - Psychology4.me</title>
	<meta data-key="description" name="description" content="
	Hello stranger! My name is Patric Pfoertner and I am German psychologist (M. Sc.) with a specialisation in Cognitive and Clinical Psychology. On this page you can get an idea of who I am. I help people work through their challenges, while offering a confidential, safe and non-judgemental space for them.">
</svelte:head>
<svelte:window bind:scrollY={scroll} />
{#if onLoad && visible}
              <div id="page-header" class="ph-full ph-center" style="background: #D5C8BA;">
                <div class="page-header-inner tt-wrap">
                  <div class="ph-caption">
                    <h1 style="color:#783350" style:transform={`translate3d(0, ${scroll * -0.09}px, 0)`} class="hero_h1" class:hidden={visible} in:fly="{{ y: 120, duration: 1500, easing: circInOut }}">About Patric Pförtner.</h1>
                    <div style:transform={`translate3d(0, ${scroll * 0.15}px, 0)`} in:fly="{{ y: 120, duration: 3000, delay: 350, easing: circInOut }}" class="ph-caption-title-ghost">About Patric Pförtner</div>
                  </div>
                  <div in:fly="{{ y: 120, duration: 1500, delay: 500, easing: circInOut }}" class="ph-caption-subtitle "><p class="hero_p" style="color:#4a112a">
                    Hello stranger! My name is Patric Pfoertner and I am German psychologist (M. Sc.) with a specialisation in Cognitive and Clinical Psychology. On this page you can get an idea of who I am. I help people work through their challenges, while offering a confidential, safe and non-judgemental space for them.                
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
              <div class="container-m" style="margin-top: -4%; z-index: 99" in:fly="{{ y: 120, duration: 1500, delay: 1750, easing: circInOut }}" style:transform={`translate3d(0, ${scroll * -0.05}px, 0)`}> 
                <img class="author1" src={ about } alt="Psychologist Patric Pförtner"/>
              </div>

              <section class="slide" style="margin:0; padding: 0;">
                <div class="content">
                    <div class="container-m">
                <p class="heading-6">
                 <b>I find it exhilarating to help relieve my clients' distress. </b>
                </p>
                <p class="heading-6">
                  And just as I enjoy helping the clients who work with me directly, I also enjoy conducting studies for the academic community.
                </p>
                <p class="heading-6">
                  My first recognised study on the topic of expertise was published 2021 in the Journal "Cognition, Brain, Behavior”.
                 </p>   
              </div>
            </div>
          </section>

<section class="slide" style="margin:0; padding: 0;">
    <div class="content">
        <div class="container-m">  
          <h2 class="heading-5 padding-top-8-bigscreen">Curriculum Vitae</h2>
          <p class="description">
            Here you can find a few sections of my CV. Feel free to explore them.
          </p> 
          <Accordion>
            <AccordionItem>
              <h2 slot="title"  class="heading-4">About me & my hobbies.</h2>
              <p class="description">
                I am a husband, loving father and cheese-lover. German is my mother tongue, and throughout the years I learned English, Latin and Bulgarian. My hobbies range from taking ‘micro breaks’ during the work day and spending quiet time alone, programming, cooking new dishes, walking in nature, playing the piano, running up and down the basketball court, or running in circles in a station. 
              </p>
            </AccordionItem>
            <AccordionItem>
              <h2 slot="title"  class="heading-4">Work Experience.</h2>

              <p class="description">
                <b>Private Psychologist</b> <i>Since Mai 2022</i><br/> 
              </p>
              <p class="description">
                <b>Caritas Heilbronn-Hohenlohe</b> <i>August 2021 - Novemeber 2022</i><br/> 
                Overall Psychological Counselling (individuals, couples, families). <br/>
                Wartberg School: Psychology consultations - working with children and their parents. <br/>
                Anonymous case consultations as an external consultant at three other colleges.
              </p>
              <p class="description">
                <b>Psychologist & Therapist Mr. König</b> <i>Feb. 2020 - Mai 2021</i><br/> 
                Internship observing psychotherapy sessions (private clients and prisoners).
              </p> 
            </AccordionItem>
            <AccordionItem>
              <h2 slot="title"  class="heading-4">Education.</h2>
              <p class="description">
                <b>New Bulgarian University, Sofia</b> <i>Since 2023</i><br/> 
                PhD Program in the Cognitive Psychology Department.
              </p>
              <p class="description">
                <b>SRH, Gera</b> <i>M. Sc. Psychologist, 2020-2022</i><br/> 
                4 Semesters of Mental Health and Psychotherapy.<br/>
                Master Thesis: "Conducting and Evaluating a Children’s Divorce Group".<br/> 
              </p>
              <p class="description">
                <b>SRH, Gera</b> <i>Instructor Progressive Muscle Relaxation, 2021</i><br/> 
                The objectives, content and methods of the training content were based on the criteria of the central associations of health insurance companies for the implementation of § 20 Para. 4 No. 1 SGB V (Prevention guideline of the GKV Central Association, version 2018).
              </p>
              <p class="description">
                <b>New Bulgarian University, Sofia</b> <i>B. Sc, 2017 - 2020</i><br/> 
                8 Semesters Psychology (in english). <br/>
                Bachelor Thesis: "Thematic bootstrapping: Performance differences between expert chess players and novices".
              </p> 
            </AccordionItem>

            <AccordionItem>
              <h2 slot="title"  class="heading-4">Publications & Recognitions.</h2>
              <p class="description">
                <b>Publication in the Journal: "Cognition, Brain, Behavior"</b><br/> 
                Patric Pförtner, Penka Hristova*. Thematic bootstrapping: Performance differences between expert chess players and novices, Cognition, Brain, Behavior, Volume XXV, No.1 (March), 55-68, ISSN: Print 2247-9228. DOI: 10.24193/cbb.2021.25.04
                <a target="_blank" rel="noreferrer" class="link-underlined" href="https://www.researchgate.net/publication/350417388_Thematic_bootstrapping_Performance_differences_between_expert_chess_players_and_novices">Publication Link</a>
              </p>
              <p class="description">
                <b>Presenter / Panelist</b> <i>New Bulgarian University, February 2021</i><br/> 
                  Annual conference of the Department of Cognitive Science 
              </p> 
            </AccordionItem>
          </Accordion>
        </div>
    </div>
</section>
{/if}
