<template>
    <div id="banner">
        <div id="user" :="getusername()" @click="showChange">{{ msg }}的笔记本</div>
        <Changeuser v-show="show" :show="show" :id="msg"/>
    </div>
</template>

<script>
import Changeuser from './Changeuser.vue';
    export default{
        name:'Myheader',
        props:['username'],
        components:{
            Changeuser
        },
        data(){
            return{
                msg:'',
                show:false
            }
        },
        methods:{
            getusername(){
                // let username = localStorage.getItem("username")
                // console.log('username=',username)
                this.msg = this.username
            },
            showChange(){
                this.show=!this.show
            }
        }
    }
</script>

<style>
#banner{
    width: 100%;
    height: 30px;
    background-color: #94988C;
    font-size: 20px;
    right: 0;
    text-align: center;
}
</style>