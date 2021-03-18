<template>
  <div id="app">
    <chats></chats>
  </div>
</template>

<script>
import Chats from './components/Chats.vue'
export default {
  name: "App",
  components: {
    'chats': Chats
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
