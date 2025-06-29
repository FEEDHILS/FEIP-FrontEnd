<script setup> 
import Logo from "/img/logo_footer.svg"
</script>

<template>
    <div class="root">
        <div class="logo">
            <Logo alt="zagdom-logo" filled :fontControlled="false" height="2.5rem"/>
        </div>

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
    $text-gap: max(2em, 12px); // Отступы в contacts и options

    .root {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr max-content;
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
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    .phoneIcon, .emailIcon, .geoIcon {
        height: 1.1em;
    }

    .submitBtn {
        @include stuff.submitBtn;
        
        font-size: 1em;
        justify-self: right;
        align-self: flex-start;
    }



    @include stuff.medium-screen {
        .root {
            padding-left: 1%;
            padding-right: 1%;
        }
    }

    @include stuff.small-screen {
        .root {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: "logo logo"
                                "options contacts"
                                ".submitBtn"
                                ". submitBtn"
                                ". submitBtn";
            gap: 2%;
            column-gap: 5%;
        }

        .logo {
            grid-area: logo;
            justify-self: center;
        }
        .options {
            grid-area: options;
            justify-self: end;
            text-align: end;
        }
        .contacts {
            grid-area: contacts;
        }

        .textbleak {
            justify-self: end;
        }

        .submitBtn {
            grid-area: submitBtn;
            justify-self: start;
        }

    }

    @include stuff.tiny-screen {
        $text-gap: 1rem;

        .options, .number, .email, .geo {
            p, a {
                margin: 0;
                margin-bottom: $text-gap;
            }
        }

        .options {
            padding-top: 1rem;
            justify-self: start;
            text-align: start;
        }

        .contacts {
            padding-bottom: 1rem;
        }

        .logo {
            justify-self: start;
        }

        .root {
            grid-template-columns: max-content;
            grid-auto-rows: max-content;
            grid-template-areas: "logo" "options" "contacts" "submitBtn";
            gap: 0;
            padding-left: 8vw;
        }

        .textbleak {
            margin: 0.5rem;
            margin-left: 0;
            justify-self: start;
        }

        .submitBtn {
            margin-bottom: 2rem;
        }

    }
</style>