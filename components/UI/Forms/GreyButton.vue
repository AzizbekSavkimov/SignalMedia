<template>
    <a class="grey-button">
        <slot/>
    </a>
</template>

<script>
    export default {
        name: "GreyButton"
    }
</script>

<style scoped lang="scss">
    .grey-button{
        color: #1F1F1F;
        height: 10rem;
        background: #626262;
        font-family: $SourceSansProFont;
        font-size: 3.75rem;
        line-height: 10rem;
        padding: 0 10rem;
        cursor: pointer;
        transition: all .3s ease;
        &:hover{
            background: $red;
            color: #ffffff;
        }
    }
</style>