<script setup>

import CloseIcon from "~/img/drawerCloseIcon.svg";

import GeoIcon from "~/img/geo.svg";
import EmailIcon from "~/img/email.svg";
import TeleIcon from "~/img/telephone.svg";
</script>

<template>
    <DialogRoot :modal=true>
      <DialogPortal to=".root-app">
          <DialogOverlay class="backdrop" />
          <DialogContent class="drawer">
            <DialogClose class="close"><CloseIcon :fontControlled="false" height="40%" filled /></DialogClose>

            <div class="content">
              <div class="options">
                <a href="">Реализованные проекты</a>
                <a href="">Новости</a>
                <a href="">Контакты</a>
              </div>

              <div class="contacts">

                <div class="number">
                    <TeleIcon />
                    <p>+7 (900) 900-90-90</p>
                </div>

                <div class="email">
                    <EmailIcon />
                    <p>info@gmail.com</p>
                </div>

                <div class="geo">
                    <GeoIcon />
                    <p>г. Владивосток <br> ул. Выселкова 49, стр. 3</p>
                </div>

              </div>


            </div>

          </DialogContent>
      </DialogPortal>
    </DialogRoot>
</template>

<style lang="scss" scoped>

  .backdrop {
    position: fixed;
    background-color: black;
    opacity: 0.25;
    height: 100%;
    inset: 0;
    z-index: 30;
  }
  
  .drawer {
    position: fixed;
    top: 50%;
    left: 100%;
    translate: -100% -50%;
    width: 60vw;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: start;
    
    z-index: 31;
    color:white;
    background-color: #029F59;

    padding-left: 3rem;
    padding-right: 3rem;
  }

  .content {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    height: 100%;
    margin: 3rem 0;
  }

  .close {
    align-self: end;
    width: 2.5rem;
    height: 2.5rem;
    // padding: 8px;
    margin-top: 3rem;
    border-width: 0;
    border-radius: .3rem;
    background-color: #FFFFFF33;
    pointer-events: stroke;
  }

  .options {
    display: flex;
    font-size: 1.5em;
    flex-flow: column;
    gap: 2rem;
  }

  .contacts {
    justify-self: end;
    font-size: 1.2em;
  }

  .number, .email, .geo {
        display: flex;
        flex-direction: row;
        gap: .5em;
  }

  .phoneIcon, .emailIcon, .geoIcon {
    fill: white;
    height: 1.1em;
    background-color: black;
  }

  .number, .email, .geo {
        p, a {
            margin: 0;
            margin-bottom: 2rem;
        }
    }
</style>