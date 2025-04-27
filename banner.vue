<template>
    <div class="root">
        <h1 class="banner">Banner</h1>  
        <h2>Hello World!</h2>
        <p>Dobro Podjalovat..</p>
        <div class="cardsDiv">
            <div class="card"><p>card 1</p></div>
            <div class="card"><p>card 2</p></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './style.scss' as main;

.something {
    width: 40vw;
    font-size: 2.5vmin;
    min-height: max-content;
    height: 40vh;
    background-color: whitesmoke;
}

.banner {
    @include main.stuff(yellowgreen);
    padding-left: 15px;
    margin: 0;
}

.cardsDiv {
    display: flex;
    margin-left: 10%;
    gap: 5%;
}

.card {
    @include main.stuff(green);
    width: 128px;
    height: 64px;
    justify-items: center;
}

</style>

<script>

</script>