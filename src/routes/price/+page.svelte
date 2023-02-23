<script>
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
	<title>Pricing - Psychology4.me</title>
	<meta data-key="description" name="description" content="While some of my clients talk to me 1-2 times per month, others seek my consult 1-2 times per week. I consult clients, who come for 5-10 sessions, as well as clients who seek long-term support. At a set time, we meet for a conversation via video chat. However you may switch off your video if you prefer. ">
</svelte:head>
<svelte:window bind:scrollY={scroll} />
{#if onLoad && visible}
<section class="padding-top-10">
    <div class="content">
        <div class="container-l"> 
          <div class="container-m"> 
          <h1 class="heading-5 text-center padding-top-10" class:hidden={visible} in:fly="{{ y: 120, duration: 1500, easing: circInOut }}">Pricing</h1>
          <p class="padding-top-2-bigscreen text-center" in:fly="{{ y: 120, duration: 1500, delay: 300, easing: circInOut }}">
            My clients are free to book anytime, up to 48h before the session. While some of my clients talk to me 1-2 times per month, others seek my consult 1-2 times per week. I consult clients, who come for 5-10 sessions, as well as clients who seek long-term support. At a set time, we meet for a conversation via video chat. However you may switch off your video if you prefer. 
          </p>
          </div>
          <ul class="flex  padding-top-3 verticalCenter">
            <li class="col-4-12" in:fly="{{ y: 120, duration: 1500, delay: 700, easing: circInOut }}">
              <div class="box-86 tint-86">
                <h3 class="small">INTAKE SESSION*</h3>
                <div class="price-86"><span class="currency-86">€</span>200</div> 
                <div class="features-86 equalElement">
                  <ul style="list-style: none; margin:0">
                    <li><strong>Price incl. VAT</strong></li>
                    <li><b>Duration:</b> 90 minutes</li>
                    <li><b>How to start:</b> <a href="/contact" class="link-underlined">Contact</a> me with a brief summary of your situation. We will schedule an appointment for your free of charge 15 minute call.</li>
                    <li><b>What happens next?</b> Once you decided to work with me, I will send you an email with more details, including an intake questionnaire, a counselling contract, and a link to my booking calendar in order to book your intake session.</li>
                    <li><b>Intake Session:</b> All clients start with the 90 minute intake session. We use this time to explore your situation, set goals and get to know each other.</li>
                  </ul>
                  <div class="tt-btn tt-btn-light-outline3" style="width: 100%">
                    <a href="/contact" data-hover="Just click!">Request Appointment</a>
                  </div>
                </div>
              </div>
            </li>
            <li class="col-4-12" in:fly="{{ y: 120, duration: 1500, delay: 800, easing: circInOut }}">
              <div class="box-86">
                <h3 class="small">50 MINUTES*</h3>
                <div class="price-86"><span class="currency-86">€</span>97</div> 
                <div class="features-86 equalElement">
                  <ul style="list-style: none; margin:0">
                    <li><strong>Price incl. VAT</strong></li>
                    <li><b>Duration:</b> 50 minutes</li>
                    <li><b>Suitable for:</b> Individuals</li>
                    <li>In the beginning, I recommend weekly sessions. Later on, we may switch to bi-monthly sessions. We decide together to ensure that the process fits your situation. Book anytime, up to 48h before the session.
                    </li>
                    <li><b>Applicable fee after 5 p.m. (GMT+1) and on weekends:</b> 50 minutes will be charged with 150€ instead of 97€. </li>
                   </ul>
                  <div class="tt-btn tt-btn-light-outline3" style="width: 100%">
                    <a href="/contact" data-hover="Just click!">Request Appointment</a>
                  </div>
                </div>
              </div>
            </li>
            <li class="col-4-12" in:fly="{{ y: 120, duration: 1500, delay: 900, easing: circInOut }}">
              <div class="box-86">
                <h3 class="small">90 MINUTES*</h3>
                <div class="price-86"><span class="currency-86">€</span>150</div> 
                <div class="features-86 equalElement">
                  <ul style="list-style: none; margin:0">
                    <li><strong>Price incl. VAT</strong></li>
                    <li><b>Duration:</b> 90 minutes</li>
                    <li><b>Suitable for:</b> Couples & Individuals</li>
                    <li>I recommend bi-monthly sessions for couples, starting with 50 min. sessions in order to interview each of you individually. However, depending on your urgency you might want to meet weekly.</li>
                    <li><b>Applicable fee after 5 p.m. (GMT+1) and on weekends:</b> 90 minutes will be charged with 225€ instead of 150€. </li>
                   </ul>
                  <div class="tt-btn tt-btn-light-outline3" style="width: 100%">
                    <a href="/contact" data-hover="Just click!">Request Appointment</a>
                  </div>
                </div>
              </div>
            </li>
          </ul> 
          <p>*The offer is aimed exclusively at self-payers. I am an out of network provider. Billing via health insurance companies is not possible.</p>
        </div>
    </div>
</section>
{/if}