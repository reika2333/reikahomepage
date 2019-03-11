<!--
        message_app.vue
-->

<template>
    <div class="body row">
        <div class="left_content col-xs-12 col-sm-5 col-sm-offset-1">
            <!--作品列表-->
            <transition>
                <div>
                    <router-link class="btn-s btn-reika" tag="button" to="/molandy">莫兰迪色系色卡</router-link>
                </div>
            </transition>
        </div>
        <div class="right_content col-xs-12 col-sm-5">
            <transition enter-class="right-enter">

            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app",
        data(){
            return {
                form: 0
            }
        },
        methods: {
        },
        components: {
        },
        mounted(){
            this.form = 1
        }
    }

</script>

<style scoped lang="less">
    @active_color: #fed1b6;
    @bg-color: #bebebe;

    .body{
        width: 95%;
        height: 100%;
        margin: auto;
        background-color: @bg-color;
        .left_content{
            height: 100%;
            margin-right: 0px;
            div{
                height: 100%;
            }
        }
        .right_content{
            height: 100%;
            background-color: @bg-color;
            margin-left: 0px;
            img{
                width: 100%;
                height: auto;
            }
        }
    }
    /*组件切换动画*/
    .right-enter{
        opacity: 0;
        transform: translateX(50%);
    }
    .v-enter {
        opacity: 0;
        transform: translateX(-50%);
    }
    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 0.8s ease;
    }
</style>