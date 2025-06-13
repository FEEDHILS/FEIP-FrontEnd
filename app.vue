<script setup>
import HeaderComponent from "~/header.vue"
import FooterComponent from "~/footer.vue"
import DrawerComponent from "~/drawer.vue"
</script>

<template>
  <div class="root-app">
    <NuxtRouteAnnouncer />
    <header>
      <!-- <HeaderComponent /> -->
    </header>
    
    <main>
      <p>Hello World</p>
      <DrawerComponent />
    </main>
    
    <footer>
      <!-- <FooterComponent /> -->
    </footer>
  </div>
</template>

<style lang="scss">
  @use '/stuff.scss' as *;
  @import '@csstools/normalize.css/opinionated.css';
  
  :root {
  font-family: $secondary-font;
  font-size: clamp(0.9rem, 1.1vw, 2rem);
  }
  
  html, body, #__nuxt, .root-app {
    height: 100%;
  }


  .root-app {
    display: flex;
    flex-flow: column;
  }

  main {
    flex-grow: 1;
  }

  header, footer {
    font-size: .85rem;
  }


  a {
    @include removeLinkTagStyle;
  }

</style>
