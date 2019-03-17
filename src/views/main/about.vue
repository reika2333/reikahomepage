<template>
    <div class="main_content">
        <h1>ABOUT</h1>
        <p>Hello!我是Reika，一个努力的前端小白白，跟我一起去实习吧，这样才能学到更多哦！哈哈哈哈哈哈哈哈～（我是文案白痴）</p>
    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped lang="less">
    @media (min-width: 600px) {
        .main_content{
            width: 60%;
        }
    }
    @media (max-width: 600px) {
        .main_content{
            width: 80%;
        }
    }
    .main_content {
        margin: auto;
        margin-top: 50px;
        color: white;
        h1 {
            text-align: center;
            margin: 0px;
        }
        p {
            width: 70%;
            text-align: left;
            margin: auto;
            padding-bottom: 20px;
            font-size: 18px;
        }
    }

</style>