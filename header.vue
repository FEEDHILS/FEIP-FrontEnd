<template>
    <div class="root">
        <div class="left">
            <img src="/img/logo.svg" alt="">

            <ul class="options">
                <li>Реализованные проекты</li>
                <li>Новости</li>
                <li>Контакты</li>
            </ul>

        </div>
        <div class="right">
            <div class="number">
                <img src="/img/telephone.png" class="phoneIcon" alt="">
                <p>+7 (900) 900-90-90</p>
            </div>
            <button class="submitBtn">Оставить заявку</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .options {
        list-style-type: none;
        display: flex;
        column-gap: 24px;
    }

    .number {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .phoneIcon {
        // height: max-content;
        height: 18px;
    }

    .left {
        display: flex;
        gap: 80px;
        align-items: center;
        // background-color: gray;
        // flex-flow: column
    }

    .right {
        display: flex;
        align-items: center;
        gap: 24px;
    }
    
    .root {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24px 88px 24px 88px;
        font-size: 1rem;
        background-color: whitesmoke; // лучше видно размеры
        color: #666666;
    }
    
    .submitBtn {
        background-color: #029F59;
        border-radius: 10px;
        border: 0px;
        color: white;
        padding: 16px 40px 16px 40px;
        font-size: 1rem;
    }
</style>

<script>

</script>