<template>
    <button type="button" class="light-grey-button" @click="$emit('open', '')">
        <slot/>
    </button>
</template>

<style lang="scss" scoped>
    .light-grey-button {
        height: 40px;
        padding: 0 26px;
        font-size: 18px;
        color: #828282;
        background-color: transparent;
        border: 0;
        border: 1px solid #BCBCBC;
        margin-left: 25px;
        outline: 0;
        cursor: pointer;
    }
</style>