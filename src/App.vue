<template>
<div>
  <div id="app" v-if="!isLoading && auth">
    <router-view/>
  </div>

  <div v-else-if="isLoading" class="splash">
    <div class="center">
       <h1 style="font-weight: bold;">Animotor</h1>
       <p>Get your cars done whenever you want to!!</p>
    </div>
  </div>

  <div class="login" v-else>
    <div class="login-center">
      <h1 style="font-weight: bold; color:black; margin-top:100px; opacity:0.6">Animotor</h1>
      <div style="margin:20px;">
        <input type="email" v-model="username" class="form-control textinputfocus" placeholder="Username" required/>
        <input type="password" v-model="password" class="form-control textinputfocus" placeholder="Password" required/>
        <button @click="handleLogin" class="btn btn-primary" style="width: 100%; margin-top:10px; border-radius:10px; padding:5px; font-weight:bold;">Login</button>
      </div>
    </div>
    <div style="position:absolute;
    width:100%;
    height:auto;
    bottom:0;
    left:50;
    overflow: hidden;">
      <img src="/img/loginbottom.png" width="115%" style="margin:-35px"/>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data(){
    return {
      isLoading:false,
      logLoading:false,
      username:'testuserssoopss2@gmail.com',
      password:'Test123'
    }
  },
  created(){
    this.isLoading = true
    setTimeout(()=>{
      this.$store.dispatch('authRemember')
      this.isLoading = false
    },4000)
  },
  methods:{
    handleLogin:function (){
      this.logLoading = true
      this.$store.dispatch('login',{email:this.username,password:this.password})
      .then(()=>{
        this.logLoading = false
      })
      .catch(()=>{
        this.logLoading = false
      })
    }
  },
  computed:{
    auth:function(){
      return this.$store.getters.getathUser
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.splash{
  height: 100vh;
  width: 100%;
  background-color: rgb(67, 158, 233);
}
.center{
  width: 100%;
  text-align: center;
  color: white;
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
.login{
  height: 100vh;
  width: 100%;
  background-color: rgb(233, 233, 233);
}
.login-center{
  padding: 20px;
  width: 100%;
  text-align: center;
  color: white;
  position: fixed; /* or absolute */
  top: 15%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
.textinputfocus{
  padding:20px; 
  border-radius:10px;
  margin-top: 10px;
}
.textinputfocus:focus{
  outline: none;
}
</style>
