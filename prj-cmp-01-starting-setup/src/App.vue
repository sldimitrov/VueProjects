<script>
export default {
  data() {
    return {
      storedResources: [
        { 
          id: '1',
          title: 'Something',
          description: 'Interesting to read...',
          link: 'goggle.com',
        },
        {
          id: '2',
          title: 'Anything',
          description: 'Stupid to see...',
          link: 'youtube.com',
        }
      ]
    }
  }
}
</script>

<template>
  <div id="app">
    <header>
      <h1>RememberMe</h1>      
    </header>
    <nav>
      <p class="resource-tab">
        Stored Resources
      </p>
      <p class="resource-tab">
        Add Resource
      </p>
    </nav>
    <div>
      <ul>
        <learning-resource       
        :v-for="item in storedResources"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :link="item.link"
       ></learning-resource>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  #app {
    margin: 0;
    padding: 0;
  }

  header {
    display: flex;
    justify-content: center;
    background-color: rgb(99, 3, 35);
    width: 100%;
  }

  nav {
    display: flex;
    justify-content: start;
    align-items: center;
    margin: auto;
    margin-top: 40px;
    height: 60px;
    background-color: rgb(244, 240, 240);
    box-shadow: 2px 2px 15px grey;
    border-radius: 20px;
    padding: 10px;
    width: 80%;
  }

  .resource-tab {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    color: rgb(54, 1, 82);
    font-size: 16px;
    width: 180px;
    height: 40px;
  }

  .active {
    color: white;
    background: rgb(54, 1, 82);
  }
</style>

