<template>
  <div>
    <h1>{{ welcome }}</h1>
  </div>
</template>

<script>
  export default  {
    name: "App",
    data() {
      return {
        welcome: 'HELLO FROM VUE'
      }
    }
  };
</script>

<style scoped lang="scss">
  body {
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
