<script setup> 
import Logo from "/img/logo.svg"
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
            <img src="/img/telephone.png" class="phoneIcon" alt="">
            <p>+7 (900) 900-90-90</p>
        </div>
        
        <div class="spacer-2"></div>
        
        <button class="submitBtn" type="submit">Оставить заявку</button>

        <div class="drawer-button">
            <p>tut budet drawer</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "/stuff.scss" as stuff;
    $header-font-size: 1em;

    .root {
        display: grid;
        grid-template-columns: max-content minmax(2rem, 5rem) 1fr max-content 2.5% max-content;
        font-size: $header-font-size;
        align-items: center;
        padding: max(2.5vmin, 16px) 5%;
        background-color: rgb(224, 224, 224); // лучше видно размеры
        color: #666666;
    }

    .drawer-button {
        display: none;
        // visibility:hidden;
    }
    
    .options {
        display: flex;
        column-gap: 1.5em;
        row-gap: 1em;
        flex-wrap: wrap;
        white-space: nowrap;
    }

    .number {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-left: 5em;
    }

    .phoneIcon {
        height: 1em;
    }

   
    .submitBtn {
        @include stuff.submitBtn;
        font-size: $header-font-size;
        width: 100%;
        justify-self: center;
    }

    @include stuff.medium-screen {
        .root {
            grid-template-columns: max-content auto max-content 2.5% max-content;
        }

        .drawer-button {
            display: block;
        }
        .options, .submitBtn {
            display: none;
        }
    }
</style>