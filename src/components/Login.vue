<template>
    <body>
        <p id="notebook">在线笔记本</p>
        <div id="box">
            <div id="ti">
                <div>登录</div>
                <!-- <div><a href="./Register.vue" style="text-decoration: none; color: white;">注册</a></div> -->
                <!-- <div><router-link :to="Register">注册</router-link>
                <router-view/></div> -->
                <div @click="changePage(2)">注册</div>
            </div>
               <hr>
            <!-- <div id="hang">id号：&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="id"></div> -->
            <div id="hang">用户名：<input type="text" v-model="login.username"></div>
            <div id="hang">密码：&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" v-model="login.password"></div>
            <button @click="doLogin">登录</button>
        </div>
    </body>
</template>

<script>
// import {nanoid} from 'nanoid'

import store from './store.js'

    export default{
        name:'Login',
        props:['changePage','Name'],
        data(){
            return{
                login:{
                    username:'',
                    password:'',
                },
                store,
            }
        },
        methods:{
            doLogin(){
                let flag = 0
                if(!this.login.username || !this.login.password){
                    alert('请输入用户名和密码')
                    return
                }
                this.store.getData(this.login.username,this.login.password)
                    .then(data=>{
                        // console.log('data=',data)
                        if(data.id ===  this.login.username && data.password === this.login.password){
                            flag = 1
                        }
                        console.log('flag=',flag)
                        if(flag == 1){
                            //跳转到主页  这个方法更慢 读不到当前的username
                            // localStorage.setItem("username",this.login.username)
                            this.Name(this.login.username)
                            alert('登录成功')
                            this.changePage(3)
                        }else{
                            alert('用户名或密码输入错误，请重新输入！若不存在账号，请注册！') 
                        } 
                    })
                    .catch(err=>{
                        alert('用户名或密码错误')
                        // console.log(err.message)
                    })
            },
            
        }

    }
</script>

<style>
#box{
    width: 320px;
    height: 520px;
    border: 2px solid #5fed63;
    margin: auto;
    margin-top: 50px;
}

#hang{
    margin: 20px 20px 20px 20px;
    color: black;
}

input{
    width: 180px;
    height: 26px;
    border: solid 1px black;
    outline: none;
    font-size: 18px;
}

button{
    text-align: center;
    margin-left: 120px;
    margin-top: 20px;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    border: none;
    color: black;
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
    color: black;
}

#ti{
    display: flex;
    justify-content: space-between;
    margin: 10px 10px 10px 10px;
    font-size: 24px;
    color: black;
}

#notebook{
    font-size: 40px;
    margin: 20px 20px;
    font-family: "Times New Roman", Times, serif;
}
</style>