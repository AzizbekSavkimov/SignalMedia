<template>
    <section class="international-news full-width">
        <span class="theme">МЕЖДУНАРОДНЫЕ НОВОСТИ</span>
        <section class="news full-width">
            <div class="new-wrap">
                <new-text>
                    <p>Студия Sony начала работу над четвертыми «Плохими парнями»</p>
                    <span class="signature">Моя планета 12 июня</span>
                </new-text>
            </div>
            <div class="new-wrap">
                <new-text>
                    <p>Disney изменила названия кинокомпании и студии Fox</p>
                    <span class="signature">Моя планета 12 июня</span>
                </new-text>
            </div>
            <div class="new-wrap">
                <new-text>
                    <p>Хэнк Азария больше не будет озвучивать Апу  в мультсериале «Симпсоны»</p>
                    <span class="signature">Моя планета 12 июня</span>
                </new-text>
            </div>
            <div class="new-wrap">
                <new-text>
                    <p>Роберт Паттинсон о «Маяке»: «Все-таки это очень странное кино»</p>
                    <span class="signature">Моя планета 12 июня</span>
                </new-text>
            </div>
        </section>
    </section>
</template>

<script>
    import NewText from "./NewText";
    export default {
        name: "InternationalNews",
        components: {NewText}
    }
</script>

<style scoped lang="scss">
    .news{
        margin-top: 2rem;
        @include flex-start-start-nowrap;
    }
    .new-wrap{
        position: relative;
        width: 24%;
        margin-right: 1%;
        &:last-child{
            margin-right: 0;
        }
    }

    .international-news{
        padding-top: 9rem;
        padding-bottom: 12rem;
    }
</style>