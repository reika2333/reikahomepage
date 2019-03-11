<template>
    <div class="body">
        <div class="content">
            <button type="button" class="btn-s btn-reika" @click="toHomepage">< 返回主页</button>
            <form>
                <div class="form-group">
                    <label>name:</label>
                    <input type="text" class="form-control" v-model="name">
                </div>
                <div class="form-group">
                    <label >password</label>
                    <input type="password" class="form-control" v-model="password" @keyup.enter="login">
                </div>
                <button type="button" class="btn-s btn-reika btn-center" @click="login">login</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data: function(){
            return {
                name: '',
                password: ''
            }
        },
        methods:{
            login(){
                var data = {
                    name: this.name,
                    password: this.password
                }
                this.$http.post('/login',data,{emulateJSON:true}).then(function (res) {
                    if(res.body.err_code == 0){
                        window.location.href = '/admin'
                    }else if(res.body.err_code == 550){
                        alert(res.body.message)
                    }
                })
            },
            toHomepage(){
                window.location.href = '/'
            }
        }
    }
</script>

<style scoped lang="less">
.body{
    background-size: 100%;
    background-color: #aa9b96;
    width: 95%;
    height: 100%;
    margin: auto;
    padding-top: 80px;
    .content{
        width: 400px;
        height: 300px;
        margin: auto;
        padding: 20px;
        form{
            padding: 30px;
            border: solid thin white;
            border-radius: 8px;
            color: white;
            width: 360px;
            height: 250px;
            input{
                width: 300px;
                background-color: rgba(255,255,255,0);
                box-shadow: none;
                color: white;
                border: solid thin white;
            }
        }
    }
}
</style>