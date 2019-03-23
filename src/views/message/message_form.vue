<template>
    <div class="main_content">
        <!--返回主页-->
        <button class="btn-s btn-pink" @click="toHome" style="margin-top: 0"> < 返回主页</button>
        <!--提交留言的form表单-->
        <form>
            <div class="form-group-reika">
                <input type="text" class="ipt-reika" placeholder="name" v-model="name">
                <div v-if="nameHint" class="hint">您还没有填写昵称呢</div>
            </div>
            <div class="form-group-reika">
                <input type="text" class="ipt-reika" placeholder="message" v-model="message">
                <div v-if="messageHint" class="hint">还没有留言内容呢</div>
            </div>
            <button type="button" class="btn-s btn-pink btn-center" @click="send">send</button>
        </form>
        <!--展示留言信息-->
        <div class="msgbord">
            <ul>
                <li v-for="item in messages" :key="item.id">
                    <div class="msgdiv">
                        <div><b class="name">{{item.name}}</b> 说 {{item.message}} </div>
                        <div class="t-right">{{item.create_time | formatTime}}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "message_form",
        data: function () {
            return{
                name: '',
                nameHint: 0,
                message: '',
                messageHint: 0,
                messages: []
            }
        },
        methods:{
            // 发送留言，将填写的留言写入数据库
            send(){
                // 首先判断内容是否为空
                if(!!this.name){
                    return this.nameHint = 1
                }else {
                    this.nameHint = 0
                }
                if(this.message == ''){
                    return this.messageHint = 1
                }else {
                    this.messageHint = 0
                }
                const messageObject = {
                    name: this.name,
                    message: this.message
                }
                this.$http.post('/addMessage',messageObject,{emulateJSON:true}).then(function (res) {
                    if(res.body.err_code == 0){
                        this.loadMessages()
                        this.name = ''
                        this.message = ''
                    }else if (res.body.err_code == 550){
                        alert('发送失败，请重试')
                    }
                });
            },
            loadMessages(){
                this.$http.get('/getMessages').then(function (res) {
                    console.log(res.body.err_code)
                    if(res.body.err_code == 550){
                        this.messages = [{
                            name: '',
                            message: '加载错误',
                            id: 0,
                            create_time: ''
                        }]
                    }else if(res.body.err_code == 0 && res.body.messages != []){
                        this.messages = res.body.messages
                    }else if(res.body.err_code == 0 && res.body.messages == []){
                        this.messages = [{
                            name: '',
                            message: '还没有任何留言呢',
                            id: 0,
                            create_time: ''
                        }]
                    }
                })
            },
            toHome(){
                window.location.href = '/'
            },
            huifu(name){
                this.message = '回复 ' + name + '： '
            }
        },
        created(){
            this.loadMessages()
        },
        filters:{
            formatTime(value){
                console.log(value)
                var time = new Date(value*1)
                console.log(time)
                var y = time.getFullYear()
                var m = time.getMonth()+1
                var d = time.getDate()
                var h= time.getHours()
                var min= time.getMinutes()
                var s= time.getSeconds()
                return   y+"-"+m+"-"+d+"    "+h+":"+ min +":"+s
            }
        }
    }
</script>

<style scoped lang="less">
    .main_content{
        height: 100%;
        background-color: rgba(255,255,255,0.2);
        padding: 20px;
        position: relative;
        top: 0;
        bottom: 0;
        button:first-child{
            margin-left: 5px;
        }
        .msgbord{
            height: 65%;
            /*position: relative;*/
            top: 0;
            bottom: 0;
            overflow: auto;
            padding: 20px;
            padding-bottom: 26px;
            ul{
                padding-left: 0;
                list-style: none;
                li{
                    border-bottom: solid thin #ecd2d5;
                    .msgdiv{
                        color: #656565;
                        padding: 10px;
                        .t-right{
                            padding-top: 10px;
                            text-align: right;
                        }
                        .name:hover{
                            cursor: pointer;
                        }
                    }
                    &:last-child{
                        border-bottom: none;
                    }
                }
            }
        }
    }
    @active_color: #fed1b6;
    @pink_color: #eea8b0;
    
    @media (max-width: 600px) {
        *{
            font-size: 14px;
        }
        .main_content{
            padding: 15px;
            button{
                margin-bottom: 10px;
            }
            form{
                button{
                    margin-top: 5px;
                }
            }
        }
    }

    .form-group-reika{
        padding: 5px;
        .ipt-reika{
            box-sizing: border-box;
            width: 100%;
            height: 35px;
            padding-left: 8px;

            background-color: rgba(255,255,255,0);
            border-radius: 5px;
            border: solid 1px @pink_color;
            box-shadow: none;
            color: #ca788a;
            &:focus{
                color: #495057;
                background-color: rgba(255,255,255,1);
                border: solid 1px @pink_color;
                box-shadow: 0 0 0 0.2em rgba(238,168,176,0.25);
                outline: 0;
            }
        }
    }


    .hint{
        color: red;
    }
</style>