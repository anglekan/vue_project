import { reactive } from 'vue'

const url = "http://123.60.44.50:3000"
// const url = "http://127.0.0.1:8080"
const key = "users"

const myHeaders = new Headers()
myHeaders.append("Content-Type", "application/json")
let requestOptions = { // 里面不能有body
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
}

export default reactive({
    userData:{},
    
    getData(id,pwd){
        if(!id || !pwd){
            return new Promise(()=>{throw new Error('无效的用户')})
        }
        requestOptions.method = "GET"
        delete requestOptions.body
        return fetch(`${url}/${key}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            for(let i=0;i<data.length;i++){
                if (data[i].id ===  id && data[i].password === pwd) {
                    // localStorage.setItem("username",id)
                    let a = data[i]
                    // console.log('data[i]=',a)
                    return a
                }
            }

         })
        .catch(err => console.log(err))
    },

    saveData(){
        if(!this.userData || !this.userData.id){
            if(!id){
                throw new Error('id为空!')
            }
        }
        requestOptions.method = "PUT"
        requestOptions.body = JSON.stringify(this.userData)
        return fetch(`${url}/${key}/${this.userData}`, requestOptions)
    },

    createUser(id,pwd,nam,emai,pho,gen){
        requestOptions.method = "GET"
        delete requestOptions.body
        return fetch(`${url}/${key}`, requestOptions)
            .then(response=>response.json())
            .then(data => {
                if(data.id === id){
                    throw new Error("存在该用户名，无需注册，请登录")
                } else {
                    return true
                }
            })
            .then(()=>{
                requestOptions.method = "POST"
                requestOptions.body = JSON.stringify({
                    id:id,
                    password:pwd,
                    nickname:nam,  
                    email:emai,
                    phone:pho,
                    gender:gen,
                })
                return fetch(`${url}/${key}`, requestOptions)
            })
    },

    changeUser(id,pwd,nick,pho){
        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        requestOptions.method = "PATCH"
        const userDatas = {
          id: id,  // id可省略，因为网址中有id
          password: pwd,
          nickname: nick,
          phone:pho,
        //   email:emai,
        //   gender:gen,
        }
        console.log('userDatas=',userDatas)
        requestOptions.body = JSON.stringify(userDatas); //将数据字符串化
        return fetch(`${url}/${key}/${id}`, requestOptions)
        .then(response => console.log("保存数据成功"))
        .catch(err => console.log(err));
    }
})
