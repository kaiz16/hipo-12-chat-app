<template>
  <div class="wrapper">
      <div class="card">
        <input 
            type="text"
            class="username"
            placeholder="Username"
            name="username"
            v-model="name"
        />
        <button v-on:click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            name: ''
        }
    },
    methods: {
        login(){
            sessionStorage.setItem('username', this.name)
            this.$emit('loggedIn')
        }
    }
}
</script>

<style scoped>
.wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card{
    padding: 1rem;
    background: #fff;
    display: flex;
    flex-direction: column;
}

input{
    height: 2em;
    outline: none;
}

button{
    height: 3em;
    background: #cdcdcd;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

button:hover{
    background: #fff;
}
</style>