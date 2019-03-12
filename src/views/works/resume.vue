<!--
    个人简历.vue
-->

<template>
    <div class="body">
        <div class="container">
            <!--一个透明度渐变的盒子-->
            <div class="hiddenbox">
            </div>
            <!--主要内容-->
            <div class="main-content">
                <!--个人信息 求职意向-->
                <div class="infobox basicinfo" id="bscinfo">
                    <div class="inleft">
                        <h3>个人信息</h3>
                        <p>姓名：刘岭柯</p>
                        <p>现居地：四川 成都</p>
                    </div>
                    <div class="inright">
                        <h3>教育经历</h3>
                        <p>成都理工大学 &nbsp&nbsp&nbsp2018.09-2021.06 &nbsp&nbsp&nbsp 计算机技术</p>
                        <p>四川农业大学 &nbsp&nbsp&nbsp2012.09-2016.06 &nbsp&nbsp&nbsp 景观建筑设计</p>
                    </div>
                </div>
                <div class="infobox basicinfo" id="slfcon">
                    <h3>自我评价</h3>
                    <p>1.精通DIV+CSS布局的HTML代码编写，熟练手写符合W3C标准的代码 <br>
                        2.熟悉Javascript、css3和html5，且能熟练运用bootstrap库实现网页常用特效 <br>
                        3.熟悉前端框架vue.js<br>
                        4.熟悉webpack自动化构建工具<br>
                        5.了解node及后端框架express，能够使用npm包管理工具<br>
                        6.了解并使用过less、git等技术及团队协作工具<br>
                        7.本科为设计专业，具有一定审美能力，能够使用photoshop<br>
                        8.日语JLPT N2 水平<br>
                        9.性格开朗，学习积极</p>
                </div>
                <div class="infobox basicinfo" id="one">
                    <h3>项目一：数字版权保护平台</h3>
                    <button class="btn-resume"><a href="https://github.com/reika2333/drphead">源码链接</a></button>
                    <button class="btn-resume"><a href="http://114.115.168.82:8080/drp/">项目链接</a></button>
                    <p>2018.06-2018.12 前端开发 <br>
                        项目描述：此项目为导师申请的国家项目，是一个版权保护平台，核心为实现加密上传和下载后再解密<br>
                        项目职责：<br>
                        1.  bootstrap实现页面栅格系统布局及元素样式<br>
                        2.  jQuery实现ajax异步请求和页面元素样式操作等<br>
                        3.  atr-template实现作品展示等<br>
                        4.  参与了少量后台java的部分增删改查功能的实现</p>

                </div>
                <div class="infobox basicinfo" id="two">
                    <h3>项目二：Reika的个人主页</h3>
                    <button class="btn-resume"><a href="https://github.com/reika2333/reikahomepage">源码链接</a></button>
                    <p>2019.01-2019.02 前端开发<br>
                        项目链接：<br>
                        项目描述：vue+express实现的个人主页，包括留言、查看作品、查看简历等功能<br>
                        项目职责：<br>
                        1.  vue实现前端页面开发<br>
                        2.  express+mongoDB实现服务端功能</p>
                </div>
            </div>
        </div>
        <nav>
            <ul>
                <li id="name">Reika</li>
                <li><a href="/">项目一</a></li>
                <li><a href="http://114.115.168.82:8080/drp/">项目二</a></li>
                <li id="back"><a href="/">返回主页</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  name: "resume"
};
</script>

<style scoped lang="less">
@resume-btn-color: #c7b9c8;
h3 {
  line-height: 45px;
  color: #8897a6;
  font-family: "Yuanti SC";
  display: inline-block;
  margin: 0;
  padding: 0;
}
div,p {
  margin: 0;
  padding: 0;
}
a{
    text-decoration: none;
}
p{
    line-height: 25px;
}
.infobox {
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px #bbb;
  background-color: white;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 8px 1px #bbb;
  }
}
.btn-resume {
  padding: 6px;
  /*background-color: ;*/
  border-radius: 4px;
  border: solid thin #c9bfd2;
  a {
    color: @resume-btn-color;
  }
  &:hover {
    background-color: @resume-btn-color;
    a {
      color: white;
    }
  }
}

.body {
  position: relative;
  width: 100%;
  min-width: 840px;
  min-height: 100%;
  background-color: #cac1d3;
  background-image: url("../../img/img2resume01.jpg");
  background-size: 100% auto;
  background-repeat: repeat-y;
  .container {
    position: absolute;
    width: 75%;
    min-width: 800px;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    height: 100%;
    min-height: 100%;
    overflow: scroll;
    background-color: rgba(255, 255, 255, 0.4);
    .main-content {
      position: absolute;
      width: 90%;
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
      top: 100px;
      overflow: auto;
      color: #444;
      padding: 15px;
      .basicinfo {
        float: left;
        width: 100%;
        overflow: auto;
        margin-bottom: 15px;
        padding: 20px;
        padding-left: 35px;
        .inleft {
          float: left;
          /*padding: 20px;*/
          /*padding-left: 35px;*/
          width: 30%;
          text-align: left;
        }
        .inright {
          float: left;
          /*padding: 20px;*/
          /*padding-left: 35px;*/
          width: 70%;
          text-align: left;
        }
        button {
          float: right;
            margin-left: 8px;
        }
      }
    }
    .hiddenbox {
      position: absolute;
      width: 100%;
      height: 80px;
      top: 80px;
      background: linear-gradient(
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0)
      );
      visibility: hidden;
    }
  }
  nav {
    position: absolute;
    top: 20px;
    height: 60px;
    width: 78%;
    min-width: 840px;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);

    border: solid thin white;
    border-radius: 8px;
    box-shadow: 0px 0px 8px 0px #bbb;

    /*background: linear-gradient(to right,#f4dfe8,#e6eaed);*/
    background-color: #fff;
    ul {
      margin: 0;
      height: 60px;
      margin-left: 30px;
      li {
        display: inline-block;
          padding: 0;
        padding-left: 10px;
        padding-right: 10px;
          line-height: 60px;
        a{
            color: #8897a6;
            /*display: inline-block;*/
        }
      }
        #name{
            font-size: 24px;
            font-family: "Yuanti SC";
            color: #bc7cab;
        }
        #back{
            position: absolute;
            right: 20px;
        }
    }
  }
}
</style>
