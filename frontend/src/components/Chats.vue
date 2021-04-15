<template>
  <section>
    <div class="wrapper">
      <div class="chat" v-for="(message, index) in messages" v-bind:key="index">
        <span class="name">{{ message.username }}</span>
        <span class="time">{{ message.createdAt }}</span>
        <p class="message">{{ message.text }}</p>
      </div>
      <p v-if="isLoading">Loading...</p>
    </div>
    <send-message></send-message>
  </section>
</template>

<script>
import SendMessage from "./SendMessage";
export default {
  components: {
    "send-message": SendMessage,
  },
  data() {
    return {
      messages: null,
      isLoading: false,
    };
  },
  mounted() {
   setInterval(() => {
    this.fetchMessages();
   }, 3000);
  },
  methods: {
    async fetchMessages() {
      this.isLoading = true
      const data = await this.$axios.get(
        "https://chat-app-hipo-12.herokuapp.com/messages"
      );
      this.isLoading = false
      this.messages = data.data;
    },
  },
};
</script>

<style scoped>
section {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  width: 100%;
}

.chat {
  text-align: left;
  padding: 10px;
  margin: 10px;
}

.chat .message {
  background: #fff;
  color: #000;
  padding: 10px;
  width: fit-content;
  border-radius: 0 10px 10px 10px;
}

.chat .time {
  color: #000;
  display: none;
}

p {
  margin: 0;
}
</style>
