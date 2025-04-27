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

  .root {
    // display: grid;
    // grid-template-rows: min-content auto min-content;
    // flex-flow: column;
  }

  main {
    // display: flex;
    // flex-grow: 1;
    // flex-direction: row;
    // flex-direction: row;
    // justify-content: center;
    // align-items: center;
    
    // gap: 5%;
    // padding: 0px 50px;
    // height: 20rem;
  }
  

</style>
