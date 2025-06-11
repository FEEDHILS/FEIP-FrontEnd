<template>
    <div class="root">

        <img src="/img/logo.svg" alt="zagdom" class="logo">
        
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
        
        <button class="submitBtn">Оставить заявку</button>

    </div>
</template>

<style lang="scss" scoped>
    @use "/stuff.scss" as stuff;
    .root {
        display: grid;
        grid-template-columns: max-content 6% auto max-content 2.5% minmax(200px, max-content);

        align-items: center;
        padding: 1.5% 5%;
        background-color: rgb(224, 224, 224); // лучше видно размеры
        color: #666666;
    }

    
    .options {
        display: flex;
        column-gap: 1.5em;
        row-gap: 1em;
        flex-wrap: wrap;
    }

    .number {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-left: 3vw;
    }

    .phoneIcon {
        height: 1em;
    }
   
    .submitBtn {
        @include stuff.submitBtn;
        
        width: 100%;
        justify-self: center;
    }


    @media (max-width : 767px) {
        .submitBtn {
            grid-column: -2 / -1;
            padding: 16px 0;
        }

        .options {
            flex-direction: column;
            grid-column: 3 / 3; 
            grid-row: 1 / -1; 
        }

        .logo {
            grid-row: 1 / -1;
        }

        .root {
            grid-template-columns: max-content 6% auto max-content;
            grid-template-rows: 1fr 1fr;
        }
    }

    // скоро здесь построим бургер кинг(меню)
    @media (max-width : 625px) {

    }
</style>