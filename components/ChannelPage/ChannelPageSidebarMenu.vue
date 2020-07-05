<template>
    <div class="accordion">
        <div class="accordion__title">
            <div class="" @click="$emit('open', '')" :class="{'active' : show}">{{title}}</div>
        </div>
        <div class="accordion__content" v-show="show"><slot /></div>            
    </div>
</template>

<script>
    export default {
        name: "accordion",
        props: [
            'title', 'show'
        ],
        data() {
            return {
                active: false
            }
        },
        methods: {
        }
    }
</script>

<style scoped lang="scss">
    .accordion {
        &__title {
            font-size: 4.5rem;
            line-height: 20px;
            color: #BDBDBD;
            margin-top: 20px;
            letter-spacing: 0.05em;
            cursor: pointer;
            text-transform: uppercase;
            .active {
                color: #fff;
            }
        }
        &__content {
            margin-left: 63px;
            @include flex-column;
            a {
                color: #fff;
                text-decoration: none;
                font-size: 4rem;
                margin-top: 2px;
                &:hover {
                    color: $red;
                }
            }
        }
    }
</style>