<template>
    <div class="content">
        <!--返回主页-->
        <button class="btn-s btn-pink" @click="toHome" style="margin-top: 0"> < 返回主页</button>
        <!--提交留言的form表单-->
        <form>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="name" v-model="name">
                <div v-if="namehint" class="hint">您还没有填写昵称呢</div>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="message" v-model="message">
                <div v-if="messagehint" class="hint">还没雨留言内容呢</div>
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
                namehint: 0,
                message: '',
                messagehint: 0,
                messages: []
            }
        },
        methods:{
            // 发送留言，将填写的留言写入数据库
            send(){
                // 首先判断内容是否为空
                if(this.name == ''){
                    return this.namehint = 1
                }else {
                    this.namehint = 0
                }
                if(this.message == ''){
                    return this.messagehint = 1
                }else {
                    this.messagehint = 0
                }
                var messageObject = {
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
    .content{
        height: 100%;
        background-color: rgba(255,255,255,0.2);
        padding: 20px;
        .msgbord{
            width: 100%;
            margin-top: 20px;
            height: 37em;
            overflow: auto;
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
    input{
        background-color: rgba(255,255,255,0);
        border: solid 1px @pink_color;
        box-shadow: none;
        color: #ca788a;
    }
    .form-control:focus{
        color: #495057;
        background-color: rgba(255,255,255,1);
        border: solid 1px @pink_color;
        box-shadow: 0 0 0 0.2em rgba(238,168,176,0.25);
        outline: 0;
    }
    .hint{
        color: red;
    }
</style>