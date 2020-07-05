<template>
    <section class="channels-slider full-width">
        <section class="container">
            <section class="container-carousel full-width">
                <carousel
                    :perPage="10"
                    :scrollPerPage="false"
                    :paginationEnabled="false"
                    :navigationEnabled="true"
                    :autoplay="true"
                    :autoplayTimeout="5000"
                >
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-1.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-2.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-3.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-1.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-2.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-3.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-1.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-2.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-3.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-1.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-2.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-3.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-1.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-2.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-3.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-1.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-2.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-3.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-1.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-2.png)"></div>
                    </slide>
                    <slide>
                        <div class="slide-channel" style="background-image: url(/imgs/test/test-channel-3.png)"></div>
                    </slide>
                </carousel>
            </section>
        </section>
    </section>
</template>

<script>
    export default {
        name: "ChannelsSlider"
    }
</script>

<style scoped lang="scss">
    .channels-slider{
        height: 42rem;
        background: #F7F7F7;
    }

    .slide-channel{
        height: 40rem;
        width: 100%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: contain;
    }

    .container-carousel{
        padding-left: 20rem;
        padding-right: 20rem;
    }
</style>