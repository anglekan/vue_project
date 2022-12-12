<template>
    <div id="change">
        新昵称:&nbsp;&nbsp;&nbsp;<input type="text" v-model="newnickname"><br>
        新密码:&nbsp;&nbsp;&nbsp;<input type="password" v-model="newpassword"><br>
        确认密码:<input type="password" v-model="renewpassword"><br>
        新手机号:<input type="text" v-model="newphone"><br>
        <button @click="changeUsers">确定</button>
    </div>
</template>

<script>
import store from './store';
    export default{
        name:'Changeuser',
        props:['show','id'],
        data(){
            return{
                newnickname:'',
                newpassword:'',
                renewpassword:'',
                newphone:'',
                store
            }
        },
        methods:{
            changeUsers(){
                if(this.renewpassword===this.newpassword){
                    if(confirm('确定修改吗')){
                    console.log('this.newnickname=',this.newnickname)
                    console.log('this.newpassword=',this.newpassword)
                    console.log('this.newphone=',this.newphone)
                    this.store.changeUser(this.id,this.newpassword,this.newnickname,this.newphone)
                        .then(data=>{
                            console.log('data=',data)
                            alert('修改成功')
                            document.location.href='./Login.vue'
                        })
                        .catch(err=>{
                            console.log(err.message)
                        })
                    }
                }else{
                    alert('两次输入密码不一致！')
                } 
            },
        }
    }
</script>

<style>
#change{
    border: 1px solid black;
    margin: auto;
    float: right;
    padding: 200px 420px 200px 420px; 
}
input{
    margin-bottom: 10px;
}
</style>