<script setup> 
import SubmitButton from "assets/submitBtn"

import Logo from "/img/logo_footer.svg"
import GeoIcon from "~/img/geo.svg";
import EmailIcon from "~/img/email.svg";
import TeleIcon from "~/img/telephone.svg";
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
                <TeleIcon class="green" />
                <p>+7 (900) 900-90-90</p>
            </div>

            <div class="email">
                <EmailIcon class="green" />
                <p>info@gmail.com</p>
            </div>

            <div class="geo">
                <GeoIcon class="green" />
                <p>г. Владивосток <br> ул. Выселкова 49, стр. 3</p>
            </div>

        </div>
        
        <SubmitButton class="submitBtn" />

        <p class="textbleak">© Загдом, 2021</p>
        <a class="textbleak">Политика конфиденциальности</a>
        <a class="textbleak">Пользовательское соглашение</a>
    </div>
</template>

<style lang="scss" scoped>
    @use "/global.scss" as *;

    .green {
        color: $primary-color;
    }

    .root {
        display: grid;
        grid-template-areas: "logo options contacts submitBtn";
        --root-padding: 2rem clamp(.5rem, 6vw, 5rem);
        padding: var(--root-padding);
        
        background-color: $secondary-color;
        color: $background-color;
    }

    .logo { grid-area: logo; margin-right:1rem; }
    .options { grid-area: options; }
    .contacts { grid-area: contacts; }
    .submitBtn { grid-area: submitBtn; }

    .options, .contacts {
        margin-top: .8rem;
    }

    .number, .email, .geo {
        display: flex;
        flex-direction: row;
        gap: .5em;
    }

    .options, .number, .email, .geo {
        @include setTextMargins( 0 0 max(2em, 12px) 0 );
    }

    .textbleak {
        @include textbleak;
        margin: 0 .5rem;
    }

    .submitBtn {        
        justify-self: right;
        align-self: flex-start;
    }


    // Media запросы
    @include medium-screen {
        .root {
            --root-padding: 2rem 1%;
        }
    }

    @include small-screen {
        .root {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: "logo logo"
                                "options contacts"
                                ".submitBtn"
                                ". submitBtn"
                                ". submitBtn";
            gap: 2% 5%;
        }

        .options {
            justify-self: end;
            text-align: end;
        }
        
        .logo { justify-self: center; margin: 0; }
        .textbleak { justify-self: end; }
        .submitBtn { justify-self: start; }

    }

    @include tiny-screen {

        .root {
            grid-template-columns: max-content;
            grid-template-areas: "logo" "options" "contacts" "submitBtn";
            gap: 0;
            padding-left: 8vw;
        }

        .options, .number, .email, .geo {
            @include setTextMargins(0 0 1rem 0);
        }

        .options {
            padding-top: 1rem;
            justify-self: start;
            text-align: start;
        }

        .contacts { padding-bottom: 1rem; }

        .logo { justify-self: start; }

        .textbleak {
            margin: 0.5rem;
            margin-left: 0;
            justify-self: start;
        }

        .submitBtn { margin-bottom: 2rem; }

    }
</style>