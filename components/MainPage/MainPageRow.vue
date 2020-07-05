<template>
    <section class="main-page-row full-width">
        <slot/>
    </section>
</template>

<script>
    export default {
        name: "MainPageRow"
    }
</script>

<style scoped lang="scss">
    .main-page-row{
        @include flex-between-start-nowrap;
        margin-bottom: 4%;
    }
</style>