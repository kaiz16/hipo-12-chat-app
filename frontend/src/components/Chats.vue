<template>
  <section>
    <div class="chats">
      <div class="message" v-for="(message, index) in messages" v-bind:key="index">
        <p>{{ message.text }}</p>
      </div>
    </div>
    <send-message></send-message>
  </section>
</template>

<script>
import axios from "axios";
import SendMessage from "./SendMessage";
export default {
  components: {
    "send-message": SendMessage
  },
  data(){
    return {
      messages: null
    }
  },
  async mounted(){
    const data = await axios.get('http://localhost:3000/getMessages')
    this.messages = data.data
  },
};
</script>

<style>
section {
  height: 100%;
}

.message {
  background-color: #4d62d5;
  width: fit-content;
  padding: 10px;
  border-radius: 15px;
  color: white;
  margin: 4px auto;
}

p {
  margin: 0;
}
</style>