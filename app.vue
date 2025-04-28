<script setup>
import HeaderComponent from "~/header.vue"
import BannerComponent from "~/banner.vue"
import FooterComponent from "~/footer.vue"


</script>

<template>
  <div class="root">
    <NuxtRouteAnnouncer />
    <header>
      <HeaderComponent />
    </header>
    <!-- <main>
      Hello World
    </main>
    <footer>
      <FooterComponent />
    </footer> -->
  </div>
</template>

<style lang="scss">
  @import '@csstools/normalize.css/opinionated.css';

  :root {
  font-family: Montserrat, sans-serif;
  font-size: 2vmin;
  }

  html, body, #__nuxt, .root {
    height: 100%;
  } 

</style>
