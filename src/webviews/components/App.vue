<template>
  <div>
    <img :src="logo" />
    <div class="upload-container">
      <input
        class="upload-file"
        ref="inputFile"
        type="file"
        accept="application/JSON"
        @change="handleUpload"
      >
      <button @click="fileUpload()">Upload</button>
    </div>
    <tree :tree-data="tree"></tree>
  </div>
</template>

<script>
import logo from '../img/logo.png';
import Tree from "./Tree.vue";

export default {
  name: 'App',

  components: {
    Tree
  },

  data() {
    return {
      logo,
      tree: {},
    }
  },

  methods: {
    fileUpload() {
      const uploadBtn = this.$refs.inputFile;
      uploadBtn.click();
    },

    async handleUpload() {
      const file = this.$refs.inputFile.files[0];

      const response = await file.text();
      const data = await JSON.parse(response);
      
      this.tree = data;
    },
  },
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

  .upload-container {
    margin-bottom: 20px;
  }

  button {
    width: 100%
  }
</style>
