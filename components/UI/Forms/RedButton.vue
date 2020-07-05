<template>
    <button class="red-button">
        <slot/>
    </button>
</template>

<style lang="scss" scoped>
    .red-button {
        height: 40px;
        padding: 0 26px;
        font-weight: 600;
        font-size: 18px;
        color: #fff;
        background-color: $red;
        border: 0;
        outline: 0;
        cursor: pointer;
    }
</style>