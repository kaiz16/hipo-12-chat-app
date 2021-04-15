<template>
  <div id="app">
    <chats v-if="isLoggedIn === true"></chats>
    <authenticate v-else v-on:loggedIn="isLoggedIn = true"></authenticate>
  </div>
</template>

<script>
import Chats from './components/Chats.vue'
import Authenticate from "./components/Authenticate.vue";
export default {
  name: "App",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  components: {
    'chats': Chats,
    'authenticate': Authenticate,
  },
  mounted(){
    this.checkLoggedIn()
  },
  methods: {
    checkLoggedIn(){
      let username = sessionStorage.getItem('username')
      if (username){
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    }
  }
};
</script>

<style>
* {
  font-family: monospace;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #ededed;
  width: 100%;
}
#app {
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
