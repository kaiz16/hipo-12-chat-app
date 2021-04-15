<template>
  <input
    type="text"
    placeholder="Send message..."
    v-model="newMessage"
    v-on:keyup.enter="sendMessage"
  />
  <!-- pressed down -->
  <!-- keydown -->

  <!-- pressed & released -->
  <!-- keyup -->
</template>

<script>
export default {
  data() {
    return {
      newMessage: "",
    };
  },
  methods: {
    async sendMessage() {
      const url = "https://chat-app-hipo-12.herokuapp.com/messages/create";
      await this.$axios.post(url, {
        username: sessionStorage.getItem("username"),
        text: this.newMessage,
      });

      this.newMessage = ''
    },
  },
};
</script>

<style scoped>
input {
  height: 2em;
  margin: 1em;
  border-radius: 10px;
  outline: none;
  font-size: 100%;
  border: 1px solid #000;
  background: transparent;
}
</style>
