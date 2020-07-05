<template>
    <div class="new-poll full-width">
        <slot/>
        <div class="poll-wrap full-width">
            <div class="poll-row">
                <span>7%</span>
                <p>Менее 300 ₽<i style="width: 7%"/></p>
            </div>
            <div class="poll-row">
                <span>24%</span>
                <p>300 – 500 ₽<i style="width: 24%"/></p>
            </div>
            <div class="poll-row">
                <span>53%</span>
                <p>500-800 ₽<i style="width: 53%"/></p>
            </div>
            <div class="poll-row">
                <span>16%</span>
                <p>Более 800 ₽<i style="width: 16%"/></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewPoll"
    }
</script>

<style scoped lang="scss">
    .new-poll{
        &:hover{
            > p {
                color: $red;
            }
        }
        > p {
            cursor: pointer;
            font-family: $SourceSansProFont;
            font-weight: bold;
            font-size: 4.5rem;
            line-height: 120%;
            color: #000000;
            margin-top: 2rem;
            margin-bottom: 4rem;
            transition: all .3s ease;
        }
    }

    .poll-row{
        box-sizing: border-box;
        padding-left: 1rem;
        margin-bottom: 3.5rem;
        @include flex-start-center-nowrap;
        > span, > p {
            position: relative;
            display: block;
            font-family: $SourceSansProFont;
            font-weight: bold;
            font-size: 4rem;
            line-height: 100%;
        }
        > p {
            margin-left: 2.5rem;
            font-weight: normal;
            width: 100%;
            > i{
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                height: 1rem;
                background: $red;
                transform: translateY(2.5rem);
                border-radius: 1rem;
            }
        }
        > span {
            text-align: right;
            min-width: 8rem;
        }
    }
</style>