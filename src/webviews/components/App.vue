<template>
  <div>
    <img :src="logo" />
    <div class="upload-container">
      <input
        class="upload-file"
        ref="file"
        type="file"
        accept="application/JSON"
      >
      <button @click="uploadFile()">Upload</button>
    </div>
  </div>
</template>

<script>
import logo from '../img/logo.png';

export default  {
  name: 'App',

  data() {
    return {
      logo,
    }
  },

  methods: {
    uploadFile() {
      const uploadBtn = this.$refs.file;
      uploadBtn.click()

      // do something with the file
    }
  }
};
</script>

<style lang="scss">
  body {
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    // height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    margin: 7px 0;
  }

  .upload-file {
    display: none !important;
  }

  button {
    width: 100%
  }
</style>
