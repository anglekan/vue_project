<template>
  <body>
    <div id="nav">
      <ul>
        <li>
          <a href="#" class="theme-1" :name="(theme-1)" @click="setTheme('theme-1')"></a>
        </li>
        <li>
          <a href="#" class="theme-2" :name="(theme-2)" @click="setTheme('theme-2')"></a>
        </li>
        <li>
          <a href="#" class="theme-3" :name="(theme-3)" @click="setTheme('theme-3')"></a>
        </li>
        <li>
          <a href="#" class="theme-4" :name="(theme-4)" @click="setTheme('theme-4')"></a>
        </li>
        <li>
          <a href="#" class="theme-5" :name="(theme-5)" @click="setTheme('theme-5')"></a>
        </li>
      </ul>
    </div>
    <Notebook v-show="show1" :changePage='changePage' :username='username'/>
    <Login  v-show="show2" :changePage='changePage' :Name="Name"/>
    <Register  v-show="show3" :changePage='changePage'/>

    <!-- <Login v-if="isShow" :changePage='changePage'/>
    <Register v-else :changePage='changePage'/> -->

</body>
  
</template>

<script>
import Notebook from './components/Notebook.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

export default {
  name: 'App',
  components: {
    Notebook,
    Login,
    Register,
  },
  data(){
    return{
      show1:false,
      show2:true,
      show3:false,
      username:'',
      theme:['theme-1','theme-2','theme-3','theme-4','theme-5']
    }
  },
  methods:{
    changePage(i){
      if(i===1){
        this.show2=true
        this.show3=false
        console.log('登录')
      }
      if(i===2){
        this.show3=true
        this.show2=false
        console.log('注册')
      }
      if(i===3){
        this.show1=true
        this.show2=false
        this.show3=false
        console.log('主页')
      }
    },

// 获取用户名
    Name(x){
      this.username = x
      // console.log('aaaaaaaaaaa')
    },
    
// 设置主题颜色
    setTheme(theme) {
      document.body.className = theme
    },
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#nav {
  background: var(--b);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  float: right;
}

#nav ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#nav ul > li {
  display: flex;
  width: 30px;
  height: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#nav ul > li > a {
  box-sizing: border-box;
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: var(--p);
  border: 5px solid white;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

#nav .click {
  width: 20px;
  height: 20px;
  border-radius: 30px;
}

.theme-1 {
  --p:#77d5a1;
  --b:#85F6B7;
}

.theme-2 {
  --p:white;
  --b:white;
}

.theme-3 {
  --p:rgb(136, 213, 236);
  --b:rgb(156, 205, 230);
}

.theme-4 {
  --p:rgb(239, 156, 218);
  --b:rgb(237, 165, 226);
}

.theme-5 {
  --p:#ec8ec3;
  --b:#ecb6cc;
}
</style>
