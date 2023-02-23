<script>
  import "../style.css";
  import { onMount } from 'svelte';
  import logo from "$lib/img/logo.webp";
  import { circInOut } from 'svelte/easing';
  let visible = false;
  import { fade, fly, blur, slide } from 'svelte/transition';
  import VanishingHeader from "./VanishingHeader.svelte";
    function toggleVissible() {
        visible = !visible
    }
    let navbar = true,
            onLoad = false
    onMount(() => {
        setTimeout(() => onLoad = true, 50)
    })
</script> 
{#if onLoad && navbar}
<VanishingHeader duration="350ms" offset={150} tolerance={20}>
                <header id="tt-header" class="tt-header-fixed">
                    <div class="tt-header-inner">

                        <div class="tt-header-col">
                            
                          <div class="tt-logo" class:hidden={navbar} in:slide="{{ duration: 1500, delay: 2000, easing: circInOut }}">
                                            <a href="/">
                                                <img src="{ logo }" alt="Logo" width="70px" height="70px" />
                                            </a>
                                        </div>
                        </div>
                        <div class="tt-header-col">

                            <button class:hidden={navbar} in:slide="{{ duration: 1500, delay: 2000,easing: circInOut }}" id="tt-ol-menu-toggle-btn-wrap" on:click={toggleVissible}>
                                <div class="tt-ol-menu-toggle-btn-text">
                                    <span class="text-menu" data-hover="Open">Menu</span>
                                </div>
                                <div class="tt-ol-menu-toggle-btn-holder">
                                    <button class="tt-ol-menu-toggle-btn"><span></span></button>
                                </div>
                            </button>
                            {#if visible}
                            <nav class="tt-overlay-menu tt-ol-menu-center" class:hidden={visible} in:blur="{{ duration: 350, easing: circInOut }}" out:blur="{{ duration: 300, delay: 1000, easing: circInOut }}">
                                <div class="tt-ol-menu-holder">
                                    <div class="tt-ol-menu-inner tt-wrap">
                                        <div class="tt-ol-menu-content">
                                            <ul class="tt-ol-menu-list padding-top-2">
                                            <li><a on:click={toggleVissible} class:hidden={visible} in:fly="{{ y: 100, duration: 750, delay: 200, easing: circInOut }}" out:fly="{{ y: -100, duration: 750, delay: 50, easing: circInOut }}" href="/">Home</a></li>
                                            <li><a on:click={toggleVissible} class:hidden={visible} in:fly="{{ y: 100, duration: 750, delay: 400, easing: circInOut }}" out:fly="{{ y: -100, duration: 750, delay: 100, easing: circInOut }}" href="/about">About</a></li>
                                            <li><a on:click={toggleVissible} class:hidden={visible} in:fly="{{ y: 100, duration: 750, delay: 450, easing: circInOut }}" out:fly="{{ y: -100, duration: 750, delay: 150, easing: circInOut }}" href="/individual">Individual</a></li>
                                            <li><a on:click={toggleVissible} class:hidden={visible} in:fly="{{ y: 100, duration: 750, delay: 500, easing: circInOut }}" out:fly="{{ y: -100, duration: 750, delay: 200, easing: circInOut }}" href="/couple">Couple</a></li>
                                            <li><a on:click={toggleVissible} class:hidden={visible} in:fly="{{ y: 100, duration: 750, delay: 550, easing: circInOut }}" out:fly="{{ y: -100, duration: 750, delay: 250, easing: circInOut }}" href="/price">Price</a></li>
                                            <li><a on:click={toggleVissible} class:hidden={visible} in:fly="{{ y: 100, duration: 750, delay: 600, easing: circInOut }}" out:fly="{{ y: -100, duration: 750, delay: 300, easing: circInOut }}" href="/blog">Blog</a></li>
                                            <li><a on:click={toggleVissible} class:hidden={visible} in:fly="{{ y: 100, duration: 750, delay: 650, easing: circInOut }}"
                                            out:fly="{{ y: -100, duration: 750, delay:350, easing: circInOut }}" href="/contact">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="close-container">
                                  <button id="tt-ol-menu-toggle-btn-wrap" on:click={toggleVissible}  class:hidden={visible} in:fade="{{ duration: 1500, easing: circInOut }}"
                                   out:fly="{{ y: 1000, duration: 20 }}">
                                <div class="tt-ol-menu-toggle-btn-holder">
                                    <p style="font-weigth: 300; font-size: 30px; margin-top:12px; margin-right:20px; color: #783350">X</p>
                                </div>
                                  </button>
                                </div>
                            </nav>
                            {/if}

                        </div>
                    </div>

                    <div class="navpill" in:fade="{{ duration: 1000, easing: circInOut, delay:2000 }}">
                        <ul class="flex2">
                            <li in:fly="{{ duration: 1500, delay: 2000, easing: circInOut, y: 15 }}"><a href="/about">About</a></li>
                            <li in:fly="{{ duration: 1500, delay: 2100, easing: circInOut, y: 15 }}"><a href="/individual">Individual</a></li>
                            <li in:fly="{{ duration: 1500, delay: 2200, easing: circInOut, y: 15 }}"><a href="/couple">Couple</a></li>
                            <li in:fly="{{ duration: 1500, delay: 2300, easing: circInOut, y: 15 }}"><a href="/price">Price</a></li>
                            <li in:fly="{{ duration: 1500, delay: 2400, easing: circInOut, y: 15 }}"><a href="/blog">Blog</a></li>
                            <li in:fly="{{ duration: 1500, delay: 2500, easing: circInOut, y: 15 }}"><a href="/contact">Contact</a></li>
                        </ul>
                        </div>
             </header>
</VanishingHeader>
<main>
<slot />
</main>
<footer>
<div class="container-xl padding-top-12">
    <ul class="grid verticalCenter">
            <li class="col-8-12 col-phablet-1-1">
                        <ul class="grid">
                            <li class="col-4-12 col-phablet-1-2"><a href="/" class="nav-link">Home</a></li>
                            <li class="col-4-12 col-phablet-1-2"><a href="/about" class="nav-link">About</a></li>
                            <li class="col-4-12 col-phablet-1-2"><a href="/contact" class="nav-link">Contact</a></li>
                            <li class="col-4-12 col-phablet-1-2"><a href="/couple" class="nav-link">Couple</a></li>
                            <li class="col-4-12 col-phablet-1-2"><a href="/individual" class="nav-link">Individual</a></li>
                            <li class="col-4-12 col-phablet-1-2"><a href="/blog" class="nav-link">Blog</a> / <a href="/blog/category/" class="nav-link">Categories</a></li>
                            <li class="col-4-12 col-phablet-1-2"><a href="/privacy" class="nav-link">Privacy Policy</a></li>
                            <li class="col-4-12 col-phablet-1-2"><a href="/disclaimer" class="nav-link">Disclaimer</a></li>
                        </ul>
            </li>
            <li class="col-4-12 col-phablet-1-1">
            <div class="pad">
                <p class="padding-0 margin-0" style="font-size: 17px;">Take the first step to help. Call or Email Patric Pförtner now.</p>
                <p class="padding-0 margin-0" style="font-size: 16px;">T: <b>+49 175 70 454 86</b></p>
                <p class="padding-0 margin-0" style="font-size: 16px;">E: <b><a href="mailto:p.pfoertner@psychology4.me" class="link-underlined ">p.pfoertner@psychology4.me</a></b></p>
            </div>
            </li>
    </ul>
    
    <div class="bottom-footer">
    <ul class="grid">
    <li class="col-8-12 col-phablet-1-1">
    <span>The website's services, content and products are for informational purposes only. It does not provide medical advice, diagnosis, or treatment. It is not suitable for acute psychological crises or emergency situations. Please contact your doctor immediately or call the emergency number for crises.</span>
    <h3 class="padding-top-3">&copy; 2022 - {new Date().getFullYear()} Psychology4.me</h3>
</li>
    <li class="col-4-12 col-phablet-1-1">
        <ul class="grid">
         <li class="col-2-12 col-phone-1-2 col-phablet-1-2 col-tablet-1-2"><span style="font-size: 1.4rem; font-weight: bold;">Connect:</span></li>
         <li class="col-2-12 col-phone-1-2 col-phablet-1-2 col-tablet-1-2"><a href="https://twitter.com/psychology4me" class="nav-sub-link">Twitter</a></li>
         <li class="col-2-12 col-phone-1-2 col-phablet-1-2 col-tablet-1-2"><a href="https://www.youtube.com/channel/UCySf-H34sXWJzIpFQLQRKUQ" class="nav-sub-link">YouTube</a></li>
         <li class="col-2-12 col-phone-1-2 col-phablet-1-2 col-tablet-1-2"><a href="https://www.facebook.com/profile.php?id=100083799000374" class="nav-sub-link">Facebook</a></li>
         <li class="col-2-12 col-phone-1-2 col-phablet-1-2 col-tablet-1-2"><a href="https://www.tiktok.com/@psychology4me" class="nav-sub-link">TikTok</a></li>
         <li class="col-2-12 col-phone-1-2 col-phablet-1-2 col-tablet-1-2"><a href="https://www.pinterest.de/Psychology4me/" class="nav-sub-link">Pinterest</a></li>
        </ul>
    </li>
    </ul>
    </div>
</div>
</footer>
{/if}
