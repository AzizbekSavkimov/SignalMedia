<template>
    <div class="channel-page-banner">
        <img src="../../static/imgs/test/channel-banner.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
    .channel-page-banner {
        margin-top: 35px;
        margin-bottom: 38px;
        position: relative;
        img {
            max-width: 100%;
            width: 100%;
        }
        &::after {
            content: url(../../static/imgs/channels/play-video.svg);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
            width: 66px;
            height: 66px;
        }
    }
</style>