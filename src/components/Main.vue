<template>
    <div id="main"> 
        <span style="font-size:30px;cursor:pointer" @click="openNav()">&#9776; open</span>
        <Text_area v-for="(area, index) in areas" :area="area" @lowadd="lowadd(index)" @upadd="upadd(index)" @deleted="deleted(index)" @up="up(index)" @down="down(index)" @getkey="key(index)"/>
    </div>
</template>

<script>
// import {marked} from 'marked'
import Text_area from './Textarea.vue'
// import {nanoid} from 'nanoid'
    export default{
        name:'Main',
        components:{
            Text_area
        },
        props:['keyit','gettitle'],
        data(){
            return{
                areas:[{id:'',title:'',text:'',edit:true}],
                index:''
            }
        },
        methods:{  
            openNav() {
              document.getElementById("mySidenav").style.width = "200px"
              document.getElementById("main").style.marginLeft = "200px"
            },
            //向下新增
            lowadd(index){
                console.log('点到了向下新增！！')
                let newlist = {
                    id:'',
                    title:'',
                    text:'',
                    edit:true
                }
                this.areas.splice(index+1, 0, newlist)
                
            },

            //向上新增   
            upadd(index){
                console.log('点到了向上新增！！')
                let newlist = {
                    id:'',
                    title:'',
                    text:'',
                    edit:true
                }
                this.areas.splice(index, 0, newlist)
            },

            //删除
            deleted(index){
                // console.log('删除！！')
                if(this.areas.length === 1){
                    alert('只有一个，再删除就没有啦！')
                }else{
                    this.areas.splice(index, 1)
                }
            },

            //上移
            up(index){
                // console.log('上移！！')
                let arr = this.areas
                if(index != 0){
                    arr.splice(index - 1, 1, ...arr.splice(index, 1, arr[index - 1]))
                }else{
                    alert('已经是第一个啦！')
                }
            },

            //下移
            down(index){
                // console.log('下移！！')
                let arr = this.areas
                if(index+1 === this.areas.length){
                    alert('已经是最后个啦！')
                }else{
                    arr.splice(index, 1, ...arr.splice(index + 1, 1, arr[index]))
                }
            },

            //获取编号
            key(index){
                // console.log('获取编号')  
                console.log('index=',index)
                // console.log('this.keyit=',this.keyit)
                this.keyit(index)
                
            },
            // 获取标题
            // get_it_title(x){
            //     this.areas.title = x
            //     this.gettitle(this.areas.title)               
            // }
        },

    }
</script>

<style>
#main{
    /* background-color: pink; */
    position: relative;
    float: left;
    width: 65%;
    /* height: 500px; */
}
table {
    border-collapse: collapse;
    width: 100%;
}

table tr td {
    border: 1px solid #ccc;
    width: 1000px;
    padding: 5px;
    text-align: center;
    position: relative;
}

table tr {
    width: 1000px;
    text-align: center;
    box-shadow: 0px 0px 20px #ddd;
    text-align: center;
    list-style: none;
    /* background-color: green; */
}

textarea{
    background-color: rgb(190, 244, 226);
    resize: none;
    cursor: auto;
    width: 100%;
    outline: none;
    font-size: 18px;
    text-align: center;
    border: 1px solid rgba(81, 203, 238, 1);
}

img{
    width: 18px;
    height: 18px;
}

#img{
    position: absolute;
    top: 8px;
    right: 8px;
}
</style>