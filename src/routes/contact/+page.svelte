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
    import author from "$lib/img/author-small.webp";
</script>
<svelte:head>
	<title>Contact - Psychology4.me</title>
	<meta data-key="description" name="description" content="
	I am Patric Pförtner and I am here to serve! How can I help you? If you have any questions, please contact me. I am looking forward to hearing from you!">
</svelte:head>
<svelte:window bind:scrollY={scroll} />
{#if onLoad && visible}
<section class="padding-top-10">
    <div class="content">
        <div class="container-l"> 
            <ul class="flex verticalCenter padding-top-5">
                <li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1"style:transform={`translate3d(0, ${scroll * -0.1}px, 0)`}>
                    <h2 class="heading-5" class:hidden={visible} in:fly="{{ y: 120, duration: 1500, easing: circInOut }}">Contact</h2>
                    <p class="description padding-top-2-bigscreen" in:fly="{{ y: 120, duration: 1500, delay: 500, easing: circInOut }}">
                      I am Patric Pförtner and I am here to serve! How can I help you?
                      If you have any questions, please contact me. I am looking forward to hearing from you!</p>
                    <div class="padding-top-2-bigscreen padding-right-2-bigscreen" in:fly="{{ y: 120, duration: 1500, delay: 800, easing: circInOut }}">
                     <div class="pad">

                     <p class="description">Request your free 15 minute phone consultation.</p>
                     <p class="description">Phone: <b>+49 175 70 454 86</b> <br />
                     E-Mail: <b><a href="mailto:p.pfoertner@psychology4.me" class="link-underlined ">p.pfoertner@psychology4.me</a></b><br />
                     <br/>Address: <br/><b>Ivan Pamukchiev 7A<br/>5600 Troyan<br/>Bulgaria</b>  </p>
                </div></div>
                 </li>
                <li class="col-6-12 col-phone-1-1 col-phablet-1-1 col-tablet-1-1 padding-top-3 padding-bottom-3">
                    <img  in:fly="{{ y: 120, duration: 3000, delay: 350, easing: circInOut }}" class="author1" src={ author } alt="Request your free 15 minute phone consultation with psychologist Patric Pförtner"/></li> 
            </ul>
        </div>
    </div>
</section>
{/if}