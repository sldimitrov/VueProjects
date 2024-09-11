const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goal: "",
    };
  },
  methods: {
    setGoal(event) {
      this.goal = event.target.value;
    },
    addGoal() {
      if (this.goal != "") {
        this.goals.push(this.goal);
        this.goal = "";
      }
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
