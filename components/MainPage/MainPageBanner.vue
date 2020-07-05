<template>
    <section class="main-page-banner full-width">
        <div class="image"></div>
        <div class="descr">
            <span class="theme">СОБЫТИЯ</span>
            <h2>Новый канал "Мосфильм. Золотая коллекция" запуск 1 сентября</h2>
            <p>Основу сетки составят более 1 тыс. картин советской и российской классики</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "MainPageBanner"
    }
</script>

<style scoped lang="scss">
    .main-page-banner{
        padding-top: 40%;
        cursor: pointer;
        overflow: hidden;
        &:hover{
            .image{
                transform: scale(1.05);
            }
        }
    }

    .image{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("/imgs/test/main-banner.jpg") no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        z-index: 1;
        transition: all .45s ease;
    }

    .descr{
        position: absolute;
        width: 100%;
        padding: 0 9rem;
        box-sizing: border-box;
        bottom: 9rem;
        z-index: 1;
        > h2 {
            font-family: $SourceSansProFont;
            font-weight: bold;
            font-size: 8.5rem;
            line-height: 120%;
            color: #ffffff;
        }
        > p {
            font-family: $SourceSansProFont;
            font-weight: normal;
            font-size: 4.5rem;
            line-height: 120%;
            color: #ffffff;
        }
    }

</style>