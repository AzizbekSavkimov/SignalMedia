<template>
    <section class="main-page-body full-width">
        <main-page-left/>
        <main-page-rgh/>
    </section>
</template>

<script>
    import MainPageLeft from "./MainPageLeft";
    import MainPageRgh from "./MainPageRgh";
    export default {
        name: "MainPageBody",
        components: {MainPageRgh, MainPageLeft}
    }
</script>

<style scoped lang="scss">
    .main-page-body{
        margin-top: 12rem;
        @include flex-start-start-nowrap;
    }
</style>