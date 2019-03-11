<!--
        message_app.vue
-->

<template>
    <div class="body row">
        <div class="left_content col-xs-12 col-sm-5 col-sm-offset-1">
            <!--表单-->
            <transition>
                <msgform v-if="form"></msgform>
            </transition>
        </div>
        <div class="right_content col-xs-12 col-sm-5">
            <transition enter-class="right-enter">
                <img src="../../img/reika02.jpg" v-if="form">
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
                width: auto;
                height: 100%;
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