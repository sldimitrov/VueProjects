Vue.createApp({
  data() {
    return {
      inputText: "",
      paragraphText: "",
    };
  },
  methods: {
    setText(event) {
      this.inputText = event.target.value;
    },
    setParagraphText() {
      this.paragraphText = this.inputText;
    },
  },
}).mount("#assignment");
