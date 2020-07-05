<template>
    <section class="footer-subscribe">
        <grey-input type="text" placeholder="введите ваш email"/>
        <grey-button>Подписаться</grey-button>
    </section>
</template>

<script>
    import GreyInput from "../UI/Forms/GreyInput";
    import GreyButton from "../UI/Forms/GreyButton";
    export default {
        name: "FooterSubscribe",
        components: {GreyButton, GreyInput}
    }
</script>

<style scoped lang="scss">
    .footer-subscribe{
        position: relative;
        width: 100%;
        margin-top: 4rem;
        @include flex-start-center-nowrap;
    }
</style>