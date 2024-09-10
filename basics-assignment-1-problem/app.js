Vue.createApp({
  data() {
    return {
      name: "Slavi",
      age: 18,
      ageInFiveYears: 23,
      imageUrl:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-1/447380512_1296673114637482_8922301437130286487_n.jpg?stp=c378.0.1365.1365a_dst-jpg_s160x160&_nc_cat=102&ccb=1-7&_nc_sid=6738e8&_nc_ohc=MXRLCJCQnCsQ7kNvgH6dYRF&_nc_ht=scontent-sof1-1.xx&oh=00_AYBEXHhJ1UAulf7QAWbD2ZpTGm-P7EQNGm1BqyvkGD2mJA&oe=66E62F70",
      inputValue: "",
    };
  },
  methods: {
    createRandomNumber() {
      return Math.random();
    },
    changeUserName() {
      this.name = inputValue;
      inputValue = "";
    },
  },
}).mount("#assignment");
