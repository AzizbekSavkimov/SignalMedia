<template>
    <div class="channel-popup">
        <div class="channel-popup__container">
            <button class="channel-popup-close" @click="$emit('close', '')">&#215;</button>
            <h2 class="channel-popup-title">Пожалуйста, оставьте свою электронну почту чтобы скачать презентацию</h2>
            <form action="" class="channel-popup__form">
                <input type="text" placeholder="Email" v-model="form.email">
                <input type="text" placeholder="Имя и фамилия (необязательно)" v-model="form.fullname">
                <input type="text" placeholder="Компания (необязательно)" v-model="form.company">
                <button type="submit" class="btn">Скачать презентацию <img src="../../static/imgs/channels/white-download.svg" alt=""></button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                fullname: '',
                company: '',
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .channel-popup {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0, 0.7);
        z-index: 99;
        &__container {
            width: 509px;
            height: 503px;
            background: #fff;
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 0 48px;
            box-sizing: border-box;
            @include flex-center-center-column;
        }
        &-close {
            position: absolute;
            top: 10px;
            right: 17px;
            font-size: 40px;
            border: 0;
            background: transparent;
            cursor: pointer;
            color: #BCBCBC;
            outline: 0;
        }
        &-title {
            font-weight: 600;
            font-size: 18px;
            line-height: 23px;
            text-align: center;
        }
        &__form {
            width: 100%;
            margin-top: 26px;
            @include flex-start-center-column;
            input {
                width: 100%;
                margin-top: 12px;
                padding-bottom: 30px;
                font-size: 14px;
                border: 0;
                border-bottom: 1px solid #E3E4E5;
                outline: 0;
                &::placeholder {
                    color: #979899;
                }
            }
            button {
                height: 40px;
                background: $red;
                padding: 0 27px;
                font-weight: normal;
                font-size: 18px;
                color: #fff;
                border: 0;
                outline: 0;
                margin-top: 48px;
                cursor: pointer;
            }
        }
    }
</style>