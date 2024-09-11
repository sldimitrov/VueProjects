const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.counter += 1;
    },
    resetCounter() {
      this.counter = 0;
    },
  },
});

app.mount("#events");
