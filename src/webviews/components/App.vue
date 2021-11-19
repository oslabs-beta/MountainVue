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
import * as esprima from "esprima";

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
      return this.parseUpload(response);
    },

    parseUpload(res) {
      const script = compiler.parseComponent(res).script;
      const tree = esprima.parseModule(script.content);
      const exportsType = "ExportDefaultDeclaration";
      const exportsOutput = tree.body.find(({ type }) => type === exportsType);
      // console.log('exportsOutput: ', exportsOutput);
      const findProp = (props, name) =>
        props.find((prop) => prop.key.name == name);
      const declProps = exportsOutput.declaration.properties;
      // console.log('decl: ', declProps);
      const safe = (func, def) => (value) =>
        value == undefined ? def : func(value);
      const compValues = (comps) =>
        comps.value.properties.map((prop) => prop.key.name);
      const components = safe(
        compValues,
        []
      )(findProp(declProps, "components"));
      console.log("components: ", components);

      // Below are not logging in console
      const propElems = (props) =>
        props.value.elements.map((element) => element.value);
      const props = safe(propElems, [])(findProp(declProps, "props"));
      console.log("props: ", props);

      // END GOAL:
      // this.tree = data;
    },
  },
};
</script>

<style>
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
