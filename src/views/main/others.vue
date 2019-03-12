<template>
    <div class="main_content">
        <h1>MORE</h1>
        <p>这里是reika的个人空间，还有很多功能和模块的链接将要放在这里哦~敬请期待吧！</p>

        <button class="btn-m btn-reika btn-center" @click="toMyworks">我的作品</button>
        <!--<button class="btn-m btn-reika btn-center">绵绸睡衣</button>-->
        <button class="btn-m btn-reika btn-center" @click="toAdmin">管理</button>
    </div>
</template>

<script>
    export default {
        name: "home",
        methods: {
            toMyworks(){
                window.location.href = '/myWorks'
            },
            toAdmin(){
                window.location.href= '/admin'
            }
        }
    }
</script>

<style scoped lang="less">
    .main_content{
        width: 60%;
        margin: auto;
        margin-top: 50px;
        color: white;
        h1{
            text-align: center;
            margin: 0px;
        }
        p{
            width: 70%;
            text-align: left;
            margin: auto;
            padding-bottom: 20px;
            font-size: 18px;
        }
    }

</style>