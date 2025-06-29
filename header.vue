<script setup> 
import SubmitButton from "./assets/submitBtn.vue";

import Logo from "/img/logo.svg"
import TeleIcon from "/img/telephone.svg"
import DrawerIcon from "~/img/drawerIcon.svg";
import DrawerComponent from "~/drawer.vue"

let isOpen = ref(false);

function OpenDrawer() { isOpen.value = true; console.log("Opened Drawer"); }
</script>

<template>
    <div class="root">

        <Logo class="logo" :fontControlled="false" filled height="2.5rem" />
        
        <div class="spacer-1"></div>
        
        <div class="options">
            <a href="">Реализованные проекты</a>
            <a href="">Новости</a>
            <a href="">Контакты</a>
        </div>


        <div class="number">
            <TeleIcon class="phoneIcon"/>
            <p>+7 (900) 900-90-90</p>
        </div>
        
        <div class="spacer-2"></div>
        
        <SubmitButton class="submitBtn" />

        <div >
            <button class="drawer-button" v-on:click="OpenDrawer()"> <DrawerIcon font-size="1.5rem" /> </button>
        </div>

        <DrawerComponent class="test" v-model:open="isOpen" />
    </div>
</template>

<style lang="scss" scoped>
    @use "/global.scss" as *;

    .root {
        display: grid;
        grid-template-columns: max-content minmax(2rem, 5rem) 1fr max-content 2.5% max-content;

        align-items: center;
        padding: max(2.5vmin, 16px) 5%;
        background-color: $background-color; // лучше видно размеры
        color: $text-primary;
    }

    .drawer-button { display: none; }
    
    .options {
        display: flex;

        gap: 1em 1.5em;
        flex-wrap: wrap;
        white-space: nowrap;
    }

    .number {
        display: flex;
        align-items: center;
        gap: .8em;
        margin-left: 5em;
    }

    .phoneIcon { color: $primary-color; }

   
    // .submitBtn {
    //     @include submitBtn;
    //     font-size: $header-font-size;
    //     width: 100%;
    //     justify-self: center;
    // }

    // Media запросы
    @include medium-screen {
        .root {
            grid-template-columns: max-content auto max-content 2.5% max-content;
        }

        .drawer-button {
            display: block;
            background-color: $primary-color;
            color: $background-color;
            border-width: 0;

            width: 2.5rem;
            height: 2.5rem;
            border-radius: .3rem;
        }

        .options, .submitBtn { display: none; }

    }

    @include tiny-screen {
        .number { display: none; }

        .root {
            grid-template-columns: max-content auto max-content max-content;
        }
    }
</style>