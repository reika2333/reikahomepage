<template>
    <div class="content">
        <!--展示留言信息-->
        <div class="msgbord">
            <ul>
                <li v-for="item in messages" :key="item.id">
                    <div class="msgdiv">
                        <div>{{item.name}} 说 {{item.message}} <div class="pull-right"><a @click="delMsg(item.id)">删除</a></div></div>
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
                message: '',
                messages: []
            }
        },
        methods:{
            // 发送id,删除留言
            delMsg(id){
                var data = {
                    id: id
                }
                this.$http.post('/delectMessage',data,{emulateJSON:true}).then(function (res) {
                    if(res.body.err_code == 0){
                        console.log('success')
                        this.loadMessages()
                    }else if(res.body.err_code == 550){
                        alert('删除失败')
                    }
                })
            },
            loadMessages(){
                this.$http.get('/getMessages').then(function (res) {
                    // console.log(res.body.err_code)
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
            }
        },
        created(){
            this.loadMessages()
        },
        filters:{
            formatTime(value){
                // console.log(value)
                var time = new Date(value*1)
                // console.log(time)
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
    @active_color: #fed1b6;
    .content{
        width: 600px;
        height: 100%;
        padding: 20px;
        .msgbord{
            width: 100%;
            margin-top: 20px;
            height: 48em;
            overflow: auto;
            padding-bottom: 26px;
            ul{
                padding-left: 0;
                list-style: none;
                li{
                    .msgdiv{
                        border-bottom: solid thin white;
                        color: white;
                        padding: 10px;
                        .t-right{
                            padding-top: 10px;
                            text-align: right;
                        }
                        a{
                            text-decoration: none;
                            color: white;
                            &:hover{
                                color: @active_color;
                                cursor: pointer;
                            }
                        }
                    }
                    &:last-child{
                        .msgdiv{
                            border-bottom: none;
                        }
                    }
                }
            }
        }
    }
    @active_color: #fed1b6;
    input{
        background-color: rgba(255,255,255,0);
        border: solid 1px #EEE;
        box-shadow: none;
        color: white;
    }
    .form-control:focus{
        color: #495057;
        background-color: rgba(255,255,255,1);
        border: solid 1px @active_color;
        box-shadow: 0 0 0 0.2em rgba(254,209,182,0.25);
        outline: 0;
    }
</style>