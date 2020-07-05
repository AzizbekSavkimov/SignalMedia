<template>
    <section class="main-page-video-banner full-width">
        <div class="image"></div>
        <div class="play-wrapper">
            <img src="/imgs/ui/play.svg" class="play-icon">
        </div>
        <div class="descr">
            <span class="theme">Премьеры</span>
            <h4>Доктор Мясников станет главным спикером штаба по коронавирусу</h4>
            <p>Как сообщается, врач и телеведущий станет официальным представителем штаба и как главный спикер организации будет информировать россиян об угрозе коронавируса. </p>
            <span class="signature light">Мульт 9 июня</span>
        </div>
    </section>
</template>

<script>
    export default {
        name: "MainPageVideoBanner"
    }
</script>

<style scoped lang="scss">
    .main-page-video-banner{
        padding-top: 42%;
        cursor: pointer;
        overflow: hidden;
        margin-bottom: 4%;
        &:hover{
            .play-icon{
                transform: scale(1.1);
            }
        }
    }

    .image{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("/imgs/test/main-video-banner.jpg") no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        z-index: 1;
        transition: all .45s ease;
    }

    .play-wrapper{
        position: absolute;
        left: 0;
        top: 0;
        width: 65%;
        height: 100%;
        z-index: 2;
        @include flex-center-center-nowrap;
        .play-icon{
            width: 20%;
            height: 20%;
            transition: all .45s ease;
        }
    }

    .descr{
        position: absolute;
        top: 0;
        right: 0;
        width: 35%;
        height: 100%;
        background: #1F1F1F;
        z-index: 2;
        padding: 4rem 6rem;
        box-sizing: border-box;
        > h4 {
            font-family: $SourceSansProFont;
            font-weight: bold;
            font-size: 5rem;
            line-height: 120%;
            color: #ffffff;
            margin-top: 1rem;
        }
        > p {
            font-family: $SourceSansProFont;
            font-weight: normal;
            font-size: 3.75rem;
            line-height: 120%;
            color: #ffffff;
            margin-top: 2rem;
            margin-bottom: 4rem;
        }
    }
</style>