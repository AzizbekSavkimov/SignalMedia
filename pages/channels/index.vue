<template>
    <div class="page full-width all-channels">
        <div class="container">
            <div class="all-channels__block">
                <div class="all-channels__channel" v-for="(channel, i) in categories" :key="channel.title + i">
                    <div class="all-channels__channel-title">{{channel.title}}</div>
                    <div class="all-channels__channel-links">
                        <router-link v-for="link in channel.links" :to="'/channels/' + link.code" :key="link.name">{{link.name}}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ChannelPageBody from "../../components/ChannelPage/ChannelPageBody";
    export default {
        components: {ChannelPageBody},
        data() {
            return {
                categories: [
                    {
                        title: 'Детство',
                        links: [
                            { name: 'Мульт', code: 'cartoon'},
                            { name: 'Ani', code: 'anime'},
                            { name: 'Мульт и музыка', code: 'mult-music'},
                            { name: 'Мама', code: 'mama'}
                        ]
                    },
                    {
                        title: 'Познание',
                        links: [
                            { name: 'Моторспорт', code: 'motosport'},
                            { name: 'Russian Extreme', code: 'russian-extreme'},
                            { name: 'Russian Extreme HD', code: 'russian-extreme-hd'},
                            { name: 'Наука', code: 'science'},
                            { name: 'Т24', code: 'T24'},
                            { name: 'Планета HD', code: 'planet-hd'},
                            { name: 'История', code: 'history'},
                            { name: 'Моя планета', code: 'my-planet'},
                            { name: 'Живая планета', code: 'live-planet'},
                            { name: 'Доктор', code: 'doctor'},
                        ]
                    },
                    {
                        title: 'Кино и сериалы',
                        links: [
                            { name: 'Руссикий роман', code: 'russian-roman'},
                            { name: 'Cinema', code: 'cinema'},
                            { name: 'Кино тв', code: 'kino-tv'},
                            { name: 'Комедия', code: 'T24'},
                            { name: 'Русский бестселлер', code: 'russian-best-seller'},
                            { name: 'НСТ', code: 'NCT'},
                            { name: 'Русский дедектив', code: 'russian-detective'}
                        ]
                    },
                    {
                        title: 'Развлечения',
                        links: [
                            { name: 'Сарафан', code: 'sarafan'},
                            { name: 'FAN', code: 'fan'},
                            { name: 'E', code: 'E'},
                            { name: 'Беларусь 24', code: 'belarus-24'}
                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .all-channels {
        background-color: #000;
        margin: 0 auto;
        color: #fff;
        font-family: Source Sans Pro;
        padding-top: 100px;
        padding-bottom: 180px;
        &__block {
            width: 853px;
            margin: 0 auto;
        }
        &__channel {
            width: 100%;
            @include flex-center-start-nowrap;
            &-title {
                width: 29%;
                font-size: 24px;
                line-height: 30px;
                text-align: right;
                margin-top: 15px;
                letter-spacing: 0.05em;
                text-transform: uppercase;
            }
            &-links {
                width: 60%;
                margin-left: 70px;
                @include flex-column;
                > a {
                    font-weight: normal;
                    font-size: 48px;
                    line-height: 120%;
                    text-decoration: none;
                    color: #ffff;
                    &:hover {
                        color: $red;
                    }
                }
            }
        }
    }
</style>