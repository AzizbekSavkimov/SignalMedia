<template>
    <section class="full-width">
        <header-desktop/>
        <nuxt/>
        <footer-desktop/>
    </section>
</template>

<style>

</style>
<script>
    import HeaderDesktop from "../components/Header/HeaderDesktop";
    import FooterDesktop from "../components/Footer/FooterDesktop";
    export default {
        components: {FooterDesktop, HeaderDesktop}
    }
</script>