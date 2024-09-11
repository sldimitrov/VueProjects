const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      secondInput: "",
      isVisible: true,
      style: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.userInput === "user1",
        user2: this.userInput === "user2",
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    setUserInput(event) {
      this.userInput = event.target.value;
    },
    setSecondInput(event) {
      this.secondInput = event.target.value;
      console.log(this.secondInput);
    },
  },
});

app.mount("#assignment");
