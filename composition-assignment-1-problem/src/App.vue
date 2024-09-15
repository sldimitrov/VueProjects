<template>
  <div>
    <h2>My Course Goal</h2>
    <!-- Task 1: Output your main course goal with help of the composition API -->
    <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
    <h3>{{ data.isShowed ? data.courseGoal : '' }}</h3>
    <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
    <button @click="toggleShow">Toggle Goal</button>
    <!-- Task 3: Manage data in three ways -->
    <!-- => Separate refs -->
    <!-- => Ref Object -->
    <!-- => Reactive Object -->
    <!-- Task 4: Also solve the assignment with the Options API -->
  </div>
</template>

<script setup>
import {ref} from 'vue';

const data = ref({courseGoal: 'Master Vue', isShowed: true, });

const toggleShow = () => {
  data.value.isShowed = !data.value.isShowed
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>