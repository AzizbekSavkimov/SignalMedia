<template>
    <a href="" target="_blank" class="social-icon">
        <slot/>
    </a>
</template>

<script>
    export default {
        name: "SocialIcon"
    }
</script>

<style scoped lang="scss">
    .social-icon{
        position: relative;
        width: 7rem;
        height: 7rem;
        margin-right: 5.5rem;
        cursor: pointer;
        &:hover{
            svg{
                .circle{
                    fill: $red;
                }
                .icon{
                    fill: #ffffff;
                }
            }
        }
        svg{
            width: 100%;
            height: 100%;
            .circle{
                fill:#626262;
                transition: all .3s ease;
            }
            .icon{
                fill: #1F1F1F;
                transition: all .3s ease;
            }
        }
    }
</style>