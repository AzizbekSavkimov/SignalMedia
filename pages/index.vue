<template>
    <div class="page full-width">
        <section class="container">
            <main-page-banner/>
            <main-page-body/>
        </section>
        <channels-slider/>
        <section class="container">
            <international-news/>
        </section>
    </div>
</template>

<script>
    import MainPageBanner from "../components/MainPage/MainPageBanner";
    import MainPageBody from "../components/MainPage/MainPageBody";
    import ChannelsSlider from "../components/UI/Channels/ChannelsSlider";
    import InternationalNews from "../components/UI/News/InternationalNews";
    export default {
        components: {InternationalNews, ChannelsSlider, MainPageBody, MainPageBanner}
    }
</script>

<style>

</style>
