<template>
    <section class="header-links">
        <router-link to="/channels" class="header-link">Каналы</router-link>
        <router-link to="/news" class="header-link">Новости</router-link>
        <router-link to="/contacts" class="header-link">Контакты</router-link>
    </section>
</template>

<script>
    export default {
        name: "HeaderLinks"
    }
</script>

<style scoped lang="scss">
    .header-links{
        position: relative;
        height: 100%;
        width: 100%;
        padding-left: 9rem;
        box-sizing: border-box;
        @include flex-start-center-nowrap;
        &.footer{
            padding-left: 0;
            @include flex-start-start-column;
        }
    }

    .header-link{
        font-family: $SourceSansProFont;
        font-size: 3.5rem;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #191919;
        margin-right: 9rem;
        cursor: pointer;
        text-decoration: none;
        transition: all .3s ease;
        .footer & {
            color: #626262;
            margin-right: 0;
            margin-bottom: 6rem;
            &:hover{
                color: #ffffff;
            }
        }
        &:hover{
            color: $red;
        }
    }
    .black-header {
        .header-link {
            color: #fff;
        }
    }
</style>