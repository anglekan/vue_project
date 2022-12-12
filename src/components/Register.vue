<template>
    <body>
        <p id="notebook">在线笔记本</p>
        <div id="box">
            <div id="ti">
                <div>注册</div>
                <div @click="changePage(1)">登录</div>
            </div>
               <hr>
            <!-- <div id="hang">id号：&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="id"></div> -->
            <div id="hang">用户名：<input type="text" v-model="register.username"></div>
            <div id="hang">密码：&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" v-model="register.password"></div>
            <div id="hang">确认密码:<input type="password" v-model="register.confirmPassword"></div>
            <div id="hang">电子邮件:<input type="text" v-model="register.email"></div>
            <div id="hang">昵称：&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" v-model="register.nickname"></div>
            <div id="hang">电话号码:<input type="text" v-model="register.phone"></div>
            <!-- <div id="hang">性别：&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" v-model="register.gender"></div> -->
            <div id="gender" style="font-size:18px;color:black;margin-left:20px">性别：<input type="radio" name="gender" value="male" v-model="register.gender" style="width:18px;height:18px;margin-left:30px">男&nbsp;&nbsp;
            <input type="radio" name="gender" value="female" v-model="register.gender" style="width:18px;height:18px;margin-left:30px">女</div>
            <button @click="doSignup">注册</button>
        </div>
        
    </body>
</template>

<script>
import store from './store.js'

    export default{
        name:'Register',
        props:['changePage'],
        data(){
            return{
                register:{
                    username:'',
                    password:'',
                    confirmPassword:'',
                    nickname:'',
                    email:'',
                    phone:'',
                    gender:'',
                },
                store
            }
        },
        methods:{
            doSignup(){
                if(!this.register.username || !this.register.password || !this.register.email){
                    alert('用户名或密码或电子邮件为空')
                    return
                }
                if(this.register.password !== this.register.confirmPassword){
                    alert('密码不一致')
                    return
                }
                // console.log('创建成功')
                this.store.createUser(this.register.username,this.register.password,this.register.nickname,this.register.email,this.register.phone,this.register.gender)
                    .then(data=>{
                        alert('注册成功！！！')
                        document.location.href='./Login.vue'
                    })
                    .catch(err=>{
                        console.log('err.message')
                    })
            }
        }
    }
</script>

<!-- <style>
body{
    width: 100%;
    height: 100%;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

#box{
    width: 320px;
    height: 400px;
    border: 2px solid #5fed63;
    margin: auto;
    margin-top: 120px;
}

#hang{
    margin: 20px 20px 20px 20px;
    color: white;

}

input{
    width: 180px;
    height: 26px;
    border: none;
    outline: none;
    font-size: 18px;
}

button{
    text-align: center;
    margin-left: 100px;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    border: none;
    color: white;
    padding: 5px 25px;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    border-radius: 15px;
}

button:active{
    transform: scale(0.9);
}

p{
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 8px;
    font-size: 24px;
    color: white;
}

#ti{
    display: flex;
    justify-content: space-between;
    margin: 10px 10px 10px 10px;
    font-size: 24px;
    color: white;
    text-decoration: none; 
    color: white;
}

#notebook{
    font-size: 40px;
    margin: 20px 20px;
    font-family: "Times New Roman", Times, serif;
}
</style> -->