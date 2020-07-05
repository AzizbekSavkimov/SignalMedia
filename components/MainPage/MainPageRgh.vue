<template>
    <section class="main-page-rgh">

        <new-poll class="main-page-rgh-new">
            <span class="theme">Опрос</span>
            <p>Сколько готов тратить абонент вашего региона на кабельное  ТВ в месяц?</p>
        </new-poll>

        <new-theme-text class="main-page-rgh-new">
            <span class="theme">Интервью</span>
            <p>Студия Sony начала работу над четвертыми «Плохими парнями»</p>
            <span class="signature">Моя планета 12 июня</span>
        </new-theme-text>

        <new-theme-text class="main-page-rgh-new">
            <span class="theme">Интервью</span>
            <p>Студия Sony начала работу над четвертыми «Плохими парнями»</p>
            <span class="signature">Моя планета 12 июня</span>
        </new-theme-text>

        <new-theme-text class="main-page-rgh-new">
            <span class="theme">Интервью</span>
            <p>Студия Sony начала работу над четвертыми «Плохими парнями»</p>
            <span class="signature">Моя планета 12 июня</span>
        </new-theme-text>

        <new-theme-text class="main-page-rgh-new">
            <span class="theme">Интервью</span>
            <p>Студия Sony начала работу над четвертыми «Плохими парнями»</p>
            <span class="signature">Моя планета 12 июня</span>
        </new-theme-text>

        <new-theme-text class="main-page-rgh-new">
            <span class="theme">Интервью</span>
            <p>Студия Sony начала работу над четвертыми «Плохими парнями»</p>
            <span class="signature">Моя планета 12 июня</span>
        </new-theme-text>

        <new-theme-text class="main-page-rgh-new">
            <span class="theme">Интервью</span>
            <p>Студия Sony начала работу над четвертыми «Плохими парнями»</p>
            <span class="signature">Моя планета 12 июня</span>
        </new-theme-text>

        <new-theme-text class="main-page-rgh-new">
            <span class="theme">Интервью</span>
            <p>Студия Sony начала работу над четвертыми «Плохими парнями»</p>
            <span class="signature">Моя планета 12 июня</span>
        </new-theme-text>

        <new-theme-text class="main-page-rgh-new">
            <span class="theme">Интервью</span>
            <p>Студия Sony начала работу над четвертыми «Плохими парнями»</p>
            <span class="signature">Моя планета 12 июня</span>
        </new-theme-text>

        <new-analytics>
            <span class="theme">Аналитика</span>
            <p>Танос опередил Дарта Вейдера и стал самым популярным кинозлодеем</p>
        </new-analytics>
    </section>
</template>

<script>
    import NewThemeText from "../UI/News/NewThemeText";
    import NewPoll from "../UI/News/NewPoll";
    import NewAnalytics from "../UI/News/NewAnalytics";
    export default {
        name: "MainPageRgh",
        components: {NewAnalytics, NewPoll, NewThemeText}
    }
</script>

<style scoped lang="scss">
    .main-page-rgh{
        position: relative;
        width: 25%;
        padding-left: 3%;
        box-sizing: border-box;
    }

    .main-page-rgh-new{
        margin-bottom: 8rem;
    }
</style>