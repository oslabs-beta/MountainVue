<template>
  <div class="app-container">
    <img class="logo" :src="logo" />
    <div class="upload-container">
      <input
        class="upload-file"
        ref="inputFile"
        type="file"
        accept=".vue"
        @change="handleUpload"
      />
      <button class="upload-btn" @click="fileUpload()">UPLOAD</button>
    </div>
    <tree :tree-data="tree"></tree>
  </div>
</template>

<script>
import logo from "../img/logo.png";
import Tree from "./Tree.vue";

import * as compiler from "vue-template-compiler";

export default {
  name: "App",

  components: {
    Tree,
  },

  data() {
    return {
      logo,
      tree: {},
    };
  },

  methods: {
    fileUpload() {
      const uploadBtn = this.$refs.inputFile;
      uploadBtn.click();
    },

    async handleUpload() {
      const file = this.$refs.inputFile.files[0];

      const response = await file.text();
      const template = response.split("<style>")[0];
      console.log("template: ", template);
      const regex = new RegExp("(?<=<template>)(.*)(?=</template>)", "s");
      console.log("regex: ", regex);
      const data = template.match(regex);
      // console.log("data0: ", data[0]);
      // console.log("data1: ", data[1]);
      const compiled = compiler.compile(data[0]);
      console.log("compiled: ", compiled);

      // END GOAL:
      // this.tree = data;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oxygen:wght@700&display=swap");

body {
  margin: 0;
}

#app {
  font-family: "Oxygen", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700 !important;
  font-size: 13px;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.app-container {
  width: 100%;
}

.logo {
  margin: 7px 0;
}

.upload-file {
  display: none !important;
}

.upload-container {
  margin-bottom: 20px;
}

.upload-btn {
  font-family: "Oxygen", sans-serif;
  font-weight: 700 !important;
  font-size: 11px;
  width: 50%;
}
</style>
