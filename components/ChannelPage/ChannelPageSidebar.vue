<template>
    <section class="channel-page-sidebar">
        <div>
            <accordion v-for="(item, i) in categories" :key="item + i + '--title'" @open="item.show = !item.show" :show="item.show" :title="`${item.title} (${item.links.length})`">
                <router-link v-for="(link, i) in item.links" v-show="true" :exact="link.exact" :to="'/channels/' + link.code" :key="link + i +'--link'">{{link.name}}</router-link>
            </accordion>
        </div>
    </section>
</template>

<script>
    import accordion from "../../components/ChannelPage/ChannelPageSidebarMenu";
    export default {
        name: "ChannelPageSidebar",
        data() {
            return {
                categories: [
                    {
                        title: 'Детство',
                        show: false,
                        links: [
                            { name: 'Мульт', code: 'cartoon', exact: true},
                            { name: 'Ani', code: 'anime'},
                            { name: 'Мульт и музыка', code: 'mult-music'},
                            { name: 'Мама', code: 'mama'}
                        ]
                    },
                    {
                        title: 'Познание',
                        show: false,
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
                        show: false,
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
                        show: false,
                        links: [
                            { name: 'Сарафан', code: 'sarafan'},
                            { name: 'FAN', code: 'fan'},
                            { name: 'E', code: 'E'},
                            { name: 'Беларусь 24', code: 'belarus-24'}
                        ]
                    }
                ]
            }
        },
        components: { accordion },
        created() {
            this.categories.map(item => {
                item.links.map(link => {
                    if(link.code === this.$route.params.id) {
                        item.show = true;
                    }
                });
            });
        }
    }
</script>

<style scoped lang="scss">

.channel-page-sidebar {
    width: 30%;
    background-color: #000;
    padding: 24px 9px 0 48px;
    color: #fff;
    font-family: Source Sans Pro;
    .nuxt-link-active {
        color: $red;
    }
}

</style>