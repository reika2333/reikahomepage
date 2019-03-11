<!--
        app.vue
-->

<template>
    <div class="body">
        <div class="right_content">
            <transition name="pic">
                <img v-show="isShow" src="../img/reika01.jpg" alt="">
            </transition>
        </div>
        <div class="left_content">
            <nav class="top_bar">
                <ul>
                    <li><router-link to="/main/home">home</router-link></li>
                    <li><router-link to="/main/about">about</router-link></li>
                    <li><router-link to="/main/contact">contact</router-link></li>
                    <li><router-link to="/main/others">more</router-link></li>
                </ul>
            </nav>
            <!--中间的路由内容-->
            <transition>
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
    export default {
        name: "app",
        data(){
            return {
                isShow: false
            }
        },
        methods: {},
        mounted(){
            this.isShow = true
        }
    }
</script>
<style scoped lang="less">
    @active_color: #fed1b6;
    .body{
        background-size: 100%;
        background-color: #aa9b96;
        width: 95%;
        height: 100%;
        margin: auto;
        position: relative;
        min-width: 1360px;
        min-height: 700px;
        .right_content{
            height: 100%;
            width: 700px;
            position: absolute;
            right: 0px;
            overflow: hidden;
            img{
                position: absolute;
                width: 600px;
                height: auto;
                top: 20px;
                /*opacity: 0.8;*/
            }
        }
        .left_content{
            position: absolute;
            top: 10%;
            width: 800px;
                .top_bar{
                    width: 540px;
                    margin-left: 130px;
                    ul{
                        list-style: none;
                        text-align: center;
                        width: 100%;
                        padding-left: 0px;
                        li{
                            display: inline-block;
                            width: 24%;
                            a{
                                color: #eee;
                                text-decoration: none;
                                &:hover{
                                    color: @active_color;
                                }
                            }
                            .link_active{
                                color: @active_color;
                            }
                        }
                    }
                }
        }
    }
    /*组件切换动画*/
    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s ease;
    }
    /*图片出现效果*/
    .pic-enter{
        opacity: 0;
    }
    .pic-enter-active{
        transition: opacity 2.5s ease;
    }
</style>