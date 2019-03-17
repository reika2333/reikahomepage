<template>
    <div class="main_content">
        <h1>CONTACT</h1>
        <p>还可以通过以下方式联系到我哦～</p>

        <div class="contact_text">wechat: thest222222</div>
        <div class="contact_text"> mail: 545335213@qq.com</div>
        <div class="contact_text"> tel: 17628029706</div>

    </div>
</template>

<script>
    export default {
        name: "contact"
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
    .main_content{
        margin: auto;
        margin-top: 50px;
        color: white;
        h1{
            text-align: center;
            margin: 0px;
        }
        p{
            width: 70%;
            text-align: center;
            margin: auto;
            padding-bottom: 20px;
            font-size: 18px;
            margin-bottom: 30px;
        }
        .contact_text{
            text-align: center;
            font-family: "宋体";
            font-size: medium;
            padding: 5px;
        }
    }
</style>