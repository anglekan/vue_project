<template>
    <body>
        <MyHeader :username="username"/>
        <!-- <Left :titlename="titlename"/>
        <Main :keyit="keyit" :gettitle="gettitle"/> -->
        <Left/>
        <Main :keyit="keyit"/>
        <Right :keynum="keynum"/>
    </body>
</template>

<script>
import MyHeader from './MyHeader.vue';
import Left from './Left.vue';
import Right from './Right.vue';
import Main from './Main.vue';

    export default{
        name:'Notebook',
        components:{
            MyHeader,
            Left,
            Right,
            Main,
        },
        props:['username'],
        data(){
            return{
                keynum:'',
                titlename:''
            }
        },
        methods:{
            //获取编号
            keyit(x){
                this.keynum = x
                // console.log('this.keynum=',this.keynum)
            },
            // gettitle(x){
            //     this.titlename = x
            // }
        }
    }
</script>

<style>

</style>