<template>
    <div class="new-image">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "NewImage"
    }
</script>

<style scoped lang="scss">
    .new-image{
        position: relative;
        width: 100%;
        cursor: pointer;
        &:hover {
            .image{
                transform: scale(1.1);
            }
            p{
                color: $red;
            }
        }

        > p {
            font-family: $SourceSansProFont;
            font-weight: bold;
            font-size: 4.5rem;
            line-height: 120%;
            color: #000000;
            margin-top: 1.5rem;
            margin-bottom: 4rem;
            transition: all .3s ease;
        }
    }

    .image-wrap{
        position: relative;
        width: 100%;
        padding-top: 66%;
        overflow: hidden;
        margin-bottom: 3rem;
        .image {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            transition: all .45s ease;
            background-position: 50% 50%;
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
</style>