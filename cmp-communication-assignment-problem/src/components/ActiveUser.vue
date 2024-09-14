<script>
export default {
  props: [
    'name',
    'age',
  ],
}
</script>

<template >
  <section id="active-user">
    <h2>Active User - {{ name }}</h2>
    <h2>User's Age - {{ age }}</h2>
  </section>
</template>

<style scoped>
  #active-user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 25px;
}
</style>

