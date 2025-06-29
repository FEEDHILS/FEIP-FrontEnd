<script setup>
import HeaderComponent from "~/header.vue"
import FooterComponent from "~/footer.vue"

</script>

<template>
  <div class="root-app">
    <NuxtRouteAnnouncer />
    <header>
      <HeaderComponent />
    </header>
    
    <main>
      <p>Hello World</p>
    </main>
    
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<style lang="scss">
  @use '/stuff.scss' as *;
  @import '@csstools/normalize.css/opinionated.css';
  
  :root {
  font-family: $secondary-font;
  font-size: clamp(0.75rem, 1.2vw, 2rem);
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

  button {
    cursor: pointer;
  }

  a {
    display: block;
    @include removeLinkTagStyle;
  }

</style>
