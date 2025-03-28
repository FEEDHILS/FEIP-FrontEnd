<script setup>
import HeaderComponent from "~/header.vue"
import BannerComponent from "~/banner.vue"
import FooterComponent from "~/footer.vue"
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <HeaderComponent />

    <div class="main">
      <BannerComponent />
      <!-- <BannerComponent /> -->
      <!-- <BannerComponent /> -->
    </div>

    <FooterComponent />
  </div>
</template>

<style lang="scss">
  :root {
  font-family: Montserrat, sans-serif;
  font-size: 3vmin;
  }

  .main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    gap: 5%;
    padding: 0px 50px;
    height: 60vh;
  }

</style>
