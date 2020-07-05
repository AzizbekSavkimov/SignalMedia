<template>
    <div :class="cardClass">
        <slot/>
    </div>
</template>

<script>
export default {
    props: [
        'cardClass'
    ]
}
</script>

<style lang="scss" scoped>
    .channel-page-card, .full-width-card, .card {
        width: 100%;
        margin-top: 30px;
        &__title {
            @include flex-start-center-nowrap;
            h2 {
                font-size: 24px;
                line-height: 30px;
                font-weight: 600;
                color: $red;
                margin-left: 13px;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
        }
        &__content {
            @include flex-start-start-wrap;
            margin-left: 60px;
            h3 {
                font-size: 32px;
                font-weight: bold;
            }
            span {
                font-weight: bold;
            }
        }
        &__right {
            margin-left: 25px;
        }
    }
    .full-width-card {
        margin-bottom: 40px;
        .card__content > div {
            width: 33%;
            margin-bottom: 10px;
            position: relative;
        }
        .card__content > div:after {
            content: url(../../static/imgs/channels/red-play.svg);
            position: absolute;
            top: 2px;
            left: 0px;
            cursor: pointer;
        }
        .card__content > div > p {
            width: 100%;
            margin-left: 28px;
        }
    }
</style>