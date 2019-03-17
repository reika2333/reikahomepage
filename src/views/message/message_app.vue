<!--
        message_app.vue
-->

<template>
    <div class="body">
        <div class="right_content">
            <transition enter-class="right-enter">
                <img src="../../img/reika02.jpg" v-if="form">
            </transition>
        </div>
        <div class="left_content">
            <!--表单-->
            <transition>
                <msgform v-if="form"></msgform>
            </transition>
        </div>
    </div>
</template>

<script>
    import msgform from './message_form.vue'
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
            msgform
        },
        mounted(){
            this.form = 1
        }
    }

</script>

<style scoped lang="less">
    @active_color: #fed1b6;
    @bg-color: #faebee;
    @media (min-width: 600px) {
        .body{
            width: 95%;
            height: 100%;
            margin: auto;
            background-color: @bg-color;
            position: relative;
            bottom: 0;
            overflow: hidden;
            .left_content{
                width: 48%;
                height: 100%;
                padding-left: 40px;
                position: relative;
                /*left: 0;*/
                /*top: 0;*/
            }
            .right_content{
                position: absolute;
                height: 100%;
                width: 48%;
                top:0;
                right: 0;
                background-color: @bg-color;
                margin-left: 0px;
                overflow: hidden;
                img{
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
    @media (max-width: 600px){
        .body{
            position: relative;
            width: 100%;
            height: 100%;
            background-color: @bg-color;
            margin: 0;
            bottom: 0;
            overflow: hidden;
            .left_content{
                position: absolute;
                width: 100%;
                height: 100%;
                padding: 0;
                overflow: auto;
            }
            .right_content{
                width: 100%;
                padding: 0;
                img{
                    position: absolute;
                    height: 100%;
                    width: auto;
                    opacity: 0.5;
                    /*top: 50%;*/
                    /*bottom: 50%;*/
                    /*transform: translateY(-50%);*/
                }
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
    /*设置表单样式*/
    form{
        .r_input{
            border: solid thin #888;
            border-radius: 5px;
            background-color: rgba(255,255,255,0.2);
        }
    }
</style>