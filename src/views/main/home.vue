<template>
    <div class="main_content">
        <h1>Hi Im Reika</h1>
        <p>This is Reika's homepage. <br>You can know me more here.</p>
        <button class="btn-m btn-reika btn-center" @click="toResume">我的简历</button>
        <button class="btn-m btn-reika btn-center" @click="toMessage">留言</button>
    </div>
</template>

<script>
    export default {
        name: "home",
        methods: {
            toMessage(){
                window.location.href = '/message'
            },
            toResume(){
                window.location.href = '/myWorks#/resume'
            }
        }
    }
</script>

<style scoped lang="less">
    .main_content{
        width: 600px;
        margin: 0px;
        margin-top: 50px;
        margin-left: 100px;
        text-align: center;
        color: white;
        h1{
            margin: 0px;
        }
        p{
            margin: 0px;
            padding-bottom: 20px;
            font-size: 18px;
        }
    }
</style>