const app = Vue.createApp({
  data() {
    return {
      tasksList: [],
      inputField: "",
      isAssignmentShow: true,
    };
  },
  computed: {
    classes() {
      if (this.isAssignmentShow) {
        return "";
      } else {
        return "display: none";
      }
    },
  },
  methods: {
    setInputText(event) {
      this.inputField = event.target.value;
    },
    addTask() {
      this.tasksList.push(this.inputField);
      this.inputField = "";
    },
    toggleShow() {
      this.isAssignmentShow = !this.isAssignmentShow;
    },
  },
});

app.mount("#assignment");
