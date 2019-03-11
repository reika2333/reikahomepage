
<template>
    <div class="body">
        <div class="right_content">
            <div class="bg">
                <!--中间的路由内容-->
                <transition>
                    <router-view></router-view>
                </transition>
            </div>
        </div>
        <div class="left_content">
            <router-link class="btn-m btn-reika btn-center" tag="button" to="/message">留言管理</router-link>
            <router-link class="btn-m btn-reika btn-center" tag="button" to="/photos">相册管理</router-link>
            <button class="btn-m btn-reika btn-center" @click="toHomepage">< 返回主页</button>
            <a @click="logout">退出登录</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app",
        data(){
            return {}
        },
        methods: {
            toHomepage(){
                window.location.href = '/'
            },
            logout(){
                this.$http.get('/logout').then(function (res) {
                    window.location.href = '/admin'
                })
            }
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
            left: 450px;
            overflow: hidden;
            .bg{
                width: 600px;
                height: 100%;
                background-color: rgba(255,255,255,0.2);
            }
            img{
                position: absolute;
                top: 20px;
                opacity: 0.8;
            }
        }
        .left_content{
            position: absolute;
            top: 10%;
            width: 400px;
            text-align: center;
            .link_active{
                background-color: white;
                color: #aa9b96;
                border: white;
            }
            a:last-of-type{
                color: white;
                display: block;
                margin: 10px;
                &:hover{
                    cursor:pointer
                }
            }
            button{
                &:last-of-type{
                    margin-top: 50px;
                }
                &:hover{
                    background-color: white;
                    color: #aa9b96;
                    border: white;
                }
            }
        }
    }
    /*组件切换动画*/
    .v-enter {
        opacity: 0;
        transform: translateY(100%);
    }
    .v-leave-to {
        opacity: 0;
        transform: translateY(-100%);
        position: absolute;
    }
    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s ease;
    }
</style>