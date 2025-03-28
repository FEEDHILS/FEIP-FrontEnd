<template>
    <div class="header">
        <h1>Header</h1>
    </div>
</template>

<style lang="scss">
@use './style.scss' as main;

.header {
    display: flex;
    background: main.gradient(lightblue, green);
    height: 20vh;
    align-items: center;
    padding-left: 5%;
    color: whitesmoke;
}
</style>

<script>

</script>