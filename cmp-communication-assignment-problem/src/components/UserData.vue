<script>
export default{
  data() {
    return {
      inputName: '',
      inputAge: ''
    }
  },
  methods: {
    setName(event) {
      this.inputName = event.target.value
      console.log(this.inputName)
    },
    setAge(event) {
      this.inputAge = event.target.value
    },
    changeData(e) {
      e.preventDefault()
      this.$emit('change-data', this.inputName, this.inputAge)
    }
  }
}
</script>

<template>
  <section id="user-data">
    <h2>Change User Data</h2>
    <form>
      <label for="fname">Name:</label>
      <input v-model="inputName" type="text"><br><br>
      <label for="lname">Age:</label>
      <input v-model="inputAge" @click.enter="changeData" type="text"><br><br>
      <input id="btn-submit" @click="changeData" value="Submit" type="submit">
    </form>
  </section>
</template>

<style scoped>
  #user-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #user-data input {
    margin-left: 5px;
    font-size: 22px
  }

  #btn-submit {
    width: 100%;
    background-color: blue;
    color: white;
    border-radius: 5px;
    font-size: 18px;
    padding: 3px;
  }

  #btn-submit:hover {
    background-color: rgb(7, 93, 254);
  }
</style>