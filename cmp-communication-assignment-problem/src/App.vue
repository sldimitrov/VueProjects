<script>
export default {
  data() {
    return {
      user: {
        name: 'Slavi',
        age: '18'
      }
    }
  },
  methods: {
    changeUserData(name, age) {
      if (name != '') {
        this.user.name = name
      }
      if (age != '') {
        this.user.age = age
      }
    }
  }
}
</script>

<template>
  <div id="user-app">
    <h1>User Manager</h1>
    <div id="main-content">
        <active-user :name="user.name" :age='user.age'></active-user>
        <user-data @change-data="changeUserData"></user-data>
    </div>
  </div>
  </template>

<style>
  html, body {
    margin: 0px !important;
    padding: 0px !important;
    background-image: linear-gradient(rgb(7, 173, 214), rgb(13, 159, 159));
    min-height: 900px;
    background-position:center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #user-app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  #main-content {
    background: rgb(238, 232, 232);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    width:auto;
    gap: 50px;
  }
</style>