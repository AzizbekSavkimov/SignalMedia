<template>
    <section class="channel-page-content">
        <channel-page-popup v-show="showPopup" @close="showPopup = false"/>
        <div class="channel-page-content__background" v-for="(item, i) in data" :key="item + i">
            <div class="channel-page-content__header">
                <h1 class="channel-page-content__header-title">{{item.title}}</h1>
                <img src="/imgs/test/channel.png" alt="">
            </div>
            <banner />
            <p class="channel-page-content__desc">{{ item.description }}</p>
            <div class="channel-page-content__block">
                <channel-page-card cardClass="channel-page-card card">
                    <div class="card__title">
                        <div class="img"><img src="/imgs/channels/persons.svg" alt=""></div>
                        <h2>{{item.auditory.title}}</h2>
                    </div>
                    <div class="card__content">
                        <div class="card__left">
                            <p>Пол</p>
                            <p>Мужчины <span>{{item.auditory.man}}</span></p>
                            <p>Женщины <span>{{ item.auditory.wooman }}</span></p>
                        </div>
                        <div class="card__right">
                            
                            <p>Возраст</p>
                            <p>18-25 <span>{{ item.auditory.teen }}</span></p>
                            <p>25-36 <span>{{ item.auditory.mans }}</span></p>
                            <p>37-49 <span>{{ item.auditory.oldmans }}</span></p>
                            <p>50+ <span>{{ item.auditory.olds }}</span></p>
                        </div>
                    </div>
                </channel-page-card>
                <channel-page-card cardClass="channel-page-card card">
                    <div class="card__title">
                        <div class="img"><img src="/imgs/channels/clock.svg" alt=""></div>
                        <h2>{{ item.hours.title }}</h2>
                    </div>
                    <div class="card__content">
                        <div class="card__left">
                            <p>В год</p>
                            <h3>{{ item.hours.year }}</h3>
                        </div>
                        <div class="card__right">
                            <p>Ежегодное обновление</p>
                            <h3>{{ item.hours.yearUpdate }}</h3>
                        </div>
                    </div>
                </channel-page-card>
            </div>
            <div class="channel-page-content__block">
                <channel-page-card cardClass="full-width-card card">
                    <div class="card__title">
                        <div class="img"><img src="/imgs/channels/video.svg" alt=""></div>
                        <h2>{{item.projects.title}}</h2>
                    </div>
                    <div class="card__content">
                        <div v-for="(p, i) in item.projects.list" :key="p + i"><p>{{p.title}}</p></div>
                    </div>
                </channel-page-card>
            </div>
            <form>
                <red-button>Обратный звонок</red-button>
                <grey-light-button @open="showPopup = true">Скачать презентацию <img src="/imgs/channels/download.svg" alt=""></grey-light-button>
            </form>
        </div>
    </section>
</template>

<script>
    import Banner from "./ChannelPageVideoBanner";
    import RedButton from "../UI/Forms/RedButton";
    import GreyLightButton from "../UI/Forms/LightGreyButton.vue";
    import ChannelPageCard from "./ChannelPageCard";
    import ChannelPagePopup from "../../components/ChannelPage/ChannelPagePopup";
    
    export default {
        name: "ChannelPageContent",
        components: { GreyLightButton, RedButton, Banner, ChannelPageCard, ChannelPagePopup },
        data() {
            return {
                showPopup: false,
                data: [
                    {
                        title: 'Моя планета',
                        description: `«Моя Планета» — главный российский познавательный канал о 
                            путешествиях, истории, науке и людях. Основу эфира телеканала составляет 
                            контент собственного производства: каждый год творческий коллектив канала
                            создает более 300 документальных фильмов.`,
                        auditory: {
                            title: 'Аудитория канала',
                            man: '35%',
                            wooman: '65%',
                            teen: '3,6%',
                            mans: '12,9%',
                            oldmans: '32,7%',
                            olds: '45,6%'
                        },
                        hours: {
                            title: 'Часы контента',
                            year: '1200',
                            yearUpdate: '400'
                        },
                        projects: {
                            title: 'Основные проекты',
                            list: [
                                { title: 'Мировой рынок' },
                                { title: 'Арктика. Зазеркалье' },
                                { title: 'Сокровища нации' },
                                { title: 'Путеводитель по Вселенной' },
                                { title: 'Exперименты' },
                                { title: 'Рейтинг Баженова' },
                            ]
                        }
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .channel-page-content {
        width: 100%;
        padding: 0 48px 24px 24px;
        font-family: Source Sans Pro;
        &__header {
            @include flex-between-center-nowrap;
            &-title {
                font-size: 48px;
                line-height: 60px;
                font-weight: bold;
            }
        }
        &__block {
            @include flex-start-start-nowrap;
        }
        &__background {
            background-color: #F2F2F2;
            padding: 25px 48px;
            margin-top: 25px;
        }
        &__desc {
            width: 95%;
        }
        p {
            font-size: 18px;
            line-height: 23px;
            font-weight: normal;
        }
    }
</style>