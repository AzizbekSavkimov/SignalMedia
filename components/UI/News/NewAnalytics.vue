<template>
    <div class="new-analytics full-width">
        <slot/>
        <img src="/imgs/test/new-analytics.png" style="width: 100%; display: block">
        <span class="signature" style="margin-top: 8rem; display: block">Моя планета 12 июня</span>
    </div>
</template>

<script>
    export default {
        name: "NewAnalytics"
    }
</script>

<style scoped lang="scss">
    .new-analytics{
        &:hover{
            > p {
                color: $red;
            }
        }
        > p {
            cursor: pointer;
            font-family: $SourceSansProFont;
            font-weight: bold;
            font-size: 4.5rem;
            line-height: 120%;
            color: #000000;
            margin-top: 2rem;
            margin-bottom: 4rem;
            transition: all .3s ease;
        }
    }
</style>