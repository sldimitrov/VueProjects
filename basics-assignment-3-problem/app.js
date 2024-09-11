Vue.createApp({
  data() {
    return {
      counter: 0,
      result: "Not there yet",
    };
  },
  watch: {
    counter() {
      if (this.counter > 37) {
        window.setTimeout(this.setResult, 2000);
      }
    },
  },
  methods: {
    incrementCounter(num) {
      this.counter += num;
    },
    setResult() {
      this.result = "Too much!";
    },
  },
}).mount("#assignment");
