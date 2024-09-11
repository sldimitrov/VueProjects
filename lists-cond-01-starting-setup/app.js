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
      this.goals.push(this.goal);
      console.log(this.goals);
    },
  },
});

app.mount("#user-goals");
