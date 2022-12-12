<template>
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
        <div id="create" @click="addnotebook"><span>笔记本</span></div>
        <a href="#">笔记列表</a>
        <!-- <a href="#" :="gettitlea()">{{ note.name }}</a> -->
    </div>
</template>

<script>
    export default{
        name:'Left',
        // props:['titlename'],
        data(){
          return{
            note:[{name:''}],
          }
        },
        methods:{
          closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            // document.body.style.backgroundColor = "white";
          },
          addnotebook(){
            console.log('addnotebook!!!')
          },
          // gettitlea(){
          //   this.note.name = this.titlename
          // }
        }
    }
</script>

<style>
.sidenav {
  height: 100%;
  width: 0; 
  position: fixed; 
  z-index: 1; 
  top: 0;
  left: 0;
  background-color: #111; 
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s; 
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 20px;
  font-size: 36px;
  margin-left: 50px;
}

#create{
  color: white;
  opacity: 0.6;
  font-size: 25px;
}

#main {
  transition: margin-left .5s;
  padding: 20px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>