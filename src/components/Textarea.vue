<template>
    <table>
        <tbody id="textbox">
        <tr id="text">         
          <td id="td1" v-show="area.edit">
            <input id="title" v-model="area.title" style="width:100%; background-color:rgb(190, 244, 226);text-align: center;border:none;">
            <textarea id="text-input" rows="3" cols="2" v-model="area.text"  @keydown.space="convert(this)" @click="$emit('getkey')"></textarea>
            <div id="img">
              <img src="../assets/img/上移.png" id="up" @click="$emit('up')">
              <img src="../assets/img/下移.png" id="down" @click="$emit('down')">
              <img src="../assets/img/newly.png" id="upadd" @click="$emit('upadd')">
              <img src="../assets/img/新增.png" id="lowadd" @click="$emit('lowadd')">
              <img src="../assets/img/删除.png" id="delete" @click="$emit('deleted')">
            </div>
          </td>
          <div v-show="!area.edit" v-html="html" style="border: 1px solid #ccc;width:100%;" @dblclick="backit(this)"></div>
        </tr>
        </tbody>
      </table>
</template>

<script>
export default{
    name:'Text_area',
    props:['area','index','lowadd','upadd','deleted','up','down','getkey','get_it_title'],
    data(){
        return{
            html:'',
        }
    },
    methods:{
        convert(e) {
            if(e.area.text){
                let converter = new showdown.Converter()
                this.html = converter.makeHtml(e.area.text)
                // console.log('this.html=',this.html)
                // console.log('e.area=',e.area)
                e.area.edit=false
            }else{
                alert('请输入内容')
            }
        },
        backit(e){
            console.log('OK')
            e.area.edit=true
        },
        // getTitle(){
        //     this.get_it_title(this.area.title)
        // }
    }
}
</script>

