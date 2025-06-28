<script setup>
import HeaderComponent from "~/header.vue"
import FooterComponent from "~/footer.vue"
import DrawerComponent from "~/drawer.vue"
import DrawerIcon from "~/img/drawerIcon.svg";

let isOpen = ref(false);

function toggle()
{
  isOpen.value = !isOpen.value;
  console.log(isOpen);
}
</script>

<template>
  <div class="root-app">
    <NuxtRouteAnnouncer />
    <header>
      <HeaderComponent />
    </header>
    
    <main>
      <p>Hello World</p>
      <DrawerComponent class="test" v-model:open="isOpen" />
      <button v-on:click="toggle()"> <DrawerIcon font-size="1.5rem" /> </button>
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
  font-size: clamp(0.9rem, 1.2vw, 2rem);
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
