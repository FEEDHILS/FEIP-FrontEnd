<template>
    <div class="root">
        <img src="/img/logo_footer.svg" alt="zagdom-logo">

        <div class="options">
            <a href="">Реализованные проекты</a>
            <a href="">Новости</a>
            <a href="">Контакты</a>
        </div>

        <div class="contacts">
            
            <div class="number">
                <img src="/img/telephone.png" class="phoneIcon" alt="phoneIcon">
                <p>+7 (900) 900-90-90</p>
            </div>

            <div class="email">
                <img src="/img/email.png" class="emailIcon" alt="emailIcon">
                <p>info@gmail.com</p>
            </div>

            <div class="geo">
                <img src="/img/geo.png" class="geoIcon" alt="geoIcon">
                <p>г. Владивосток <br> ул. Выселкова 49, стр. 3</p>
            </div>

        </div>
        
        <button class="submitBtn">Оставить заявку</button>

        <p class="textbleak">© Загдом, 2021</p>
        <p class="textbleak">Политика конфиденциальности</p>
        <p class="textbleak">Пользовательское соглашение</p>
    </div>
</template>

<style lang="scss" scoped>
    @use "/stuff.scss" as stuff;
    $text-gap: max(4vh, 12px); // Отступы в contacts и options

    .root {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 2rem clamp(.5rem, 6vw, 5rem);
        
        background-color: #254741;
        color:white;
    }

    .options {
        display: flex;
        flex-flow: column;
    }

    .options, .contacts {
        margin-top: 0.8rem;
    }

    .number, .email, .geo {
        display: flex;
        flex-direction: row;
        gap: .5em;
    }

    // Убрал стандартные отступы от текста, заменил на подходящие
    .options, .number, .email, .geo {
        p, a {
            margin: 0;
            margin-bottom: $text-gap;
        }
    }

    .textbleak {
        @include stuff.textbleak;
        
        margin: 0;
        margin-left: 0.2rem;
    }

    .phoneIcon, .emailIcon, .geoIcon {
        height: 1.1em;
    }

    .submitBtn {
        @include stuff.submitBtn;

        justify-self: right;
        align-self: flex-start;
    }
</style>