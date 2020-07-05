<template>
    <div class="new-text full-width">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "NewText"
    }
</script>

<style scoped lang="scss">
    .new-text{
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
            margin-bottom: 10rem;
            transition: all .3s ease;
        }
    }
</style>