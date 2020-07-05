<template>
    <div class="new-theme-text full-width">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "NewThemeText"
    }
</script>

<style scoped lang="scss">
    .new-theme-text{
        &:hover{
            > p {
                color: $red;
            }
        }
        > p {
            cursor: pointer;
            font-family: $SourceSansProFont;
            font-weight: normal;
            font-size: 4.5rem;
            line-height: 120%;
            color: #000000;
            margin-top: 2rem;
            margin-bottom: 4rem;
            transition: all .3s ease;
        }
    }
</style>