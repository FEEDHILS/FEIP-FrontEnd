<template>
    <button class="btn">Оставить заявку</button>
</template>

<style setup lang="scss">
    @use "/global.scss" as *;
    
    .btn {
        font-family: Montserrat, 'sans-serif';
        font-size: 1em;
        background-color: $primary-color;
        border-radius: .8em;
        border: 0;
        color: $background-color;
        padding: 1em 3em;
    }
</style>