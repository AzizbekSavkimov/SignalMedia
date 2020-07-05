<template>
    <input class="grey-input">
</template>

<script>
    export default {
        name: "GreyInput"
    }
</script>

<style scoped lang="scss">
    .grey-input{
        position: relative;
        border: 1px solid #626262;
        width: 100%;
        height: 10rem;
        background: transparent;
        padding-left: 5rem;
        font-family: $SourceSansProFont;
        font-size: 3.75rem;
        outline: none;
        color: #ffffff;
        box-sizing: border-box;
        &::placeholder{
            color: #626262;
        }
    }
</style>