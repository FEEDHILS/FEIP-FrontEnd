<template>
    <div class="root">

        <img src="/img/logo.svg" alt="zagdom">
        
        <div class="spacer-1"></div>
        
        <div class="options">
            <p>Реализованные проекты</p>
            <p>Новости</p>
            <p>Контакты</p>
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

    .root {
        // Что в данной ситуации лучше, grid или flex?
        // Через grid я смог удобно в одну строчку расположить все элементы
        // Однако я добавил два пустых div'а, отвечающие за разные отступы (это хорошо или плохо?)
        // Используя flex я могу добавить разные отступы через gap, однако это немного громозднее и больше...
        display: grid;
        grid-template-columns: max-content 80px auto max-content 24px max-content;

        align-items: center;
        padding: 24px 88px 24px 88px;
        font-size: 1rem;
        background-color: whitesmoke; // лучше видно размеры
        color: #666666;
    }

// Left Side of Header
    .options {
        // flex-grow: 1;
        display: flex;
        column-gap: 24px;
    }

// Right Side of Header
    .number {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .phoneIcon {
        height: 1em;
    }
   
    .submitBtn {
        background-color: #029F59;
        border-radius: 10px;
        border: 0px;
        color: white;
        font-size: 1rem;              
        padding: 16px 50px 16px 50px; // В фигме у кнопки указан padding-left (right) 40px, однако
                                    // Там также указан gap 10px... Значит ли это что padding: 50px?                                 
                                    // с 50px кнопка выглядет более похожей на макет... 
    }

    // Obsolete
    // .left {
    //     display: flex;
    //     gap: 80px;
    //     align-items: center;
    // }

    // .right {
    //     display: flex;
    //     align-items: center;
    //     gap: 24px;
    // }

</style>