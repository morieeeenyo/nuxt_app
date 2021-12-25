<template>
  <div>
    <button type="button" name="button" @click="getMessage">
      RailsからAPIを取得する
    </button>
    <div v-for="(message, i) in messages" :key="i">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    }
  },
  methods: {
    getMessage() {
      this.$axios
        .$get("/api/hello")
        .then((response) => this.messages.push(response))
    },
  },
}
</script>
