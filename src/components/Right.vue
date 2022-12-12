<template>
    <div id="right">
      <br>
        <h2>属性</h2>
        <p :="getkeyit()">编号:{{ msg+1 }}</p>
        <p>作者:王欣怡</p>
        <!-- <span class="notebook-title" :="gettitlea()">当前标题：{{ aaa }}</span> -->
        <p>内容框最上面一行是标题，在文本框中输入markdown内容，按空格键进入HTML预览模式，双击又回到文本编辑模式</p>
        <p>点击“××的笔记本”，可弹出修改昵称、密码、手机号的页面，再次点击则关闭</p>
        <!-- <p>编号从0开始</p>
        <p>点击左上角的不同按钮，可以切换不同颜色的主题模式</p>
        <p>点击open出现左侧导航边栏，点击×可隐藏</p>
        <p>单元格左上角的五个按钮，具有上移、下移、在上方新建、在下方新建、删除的功能</p> -->
      </div>
</template>

<script>
    export default{
        name:'Right',
        // props:['keynum','titlename'],
        props:['keynum'],
        data(){
            return{
                msg:'',
                // aaa:'',
                // titlelist:[{aaa:''}]
            }
        },
        methods:{
            getkeyit(){
                this.msg = this.keynum
                // console.log('right_this.keynum=',this.keynum)
            },
            // gettitlea(){
            //     this.aaa = this.titlename
            // }
        }
    }
</script>

<style>
#right{
    position:relative;
    float: right;
    top: 0;
    width: 200px;
    height: 640px;
    background-color: rgb(148, 152, 140);
}

#right h2{
    position: relative;
    margin: 20px;
}

#right p{
    position: relative;
    margin: 10px;
    font-size: 16px;
}

.notebook-title{
    width: 200px;
    font-size: 16px;
    text-align: center;
   /* border: 1px solid white; */
    margin: 10px 10px 10px 10px;
}
</style>