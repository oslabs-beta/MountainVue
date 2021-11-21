<template>
  <div class="app-container">
    <img class="logo" :src="logo" />
    <div class="upload-container">
      <input
        class="upload-file"
        ref="inputFile"
        type="file"
        accept="application/JSON"
        @change="handleUpload"
        value=""
      />
      <button
        class="upload-btn"
        @click="fileUpload()"
      >
        UPLOAD
      </button>
    </div>
    <MVTree
      :treeDisplay="setDisplay"
      :node="tree"
      @onClick="viewComponent"
    />
  </div>
</template>

<script>
import logo from '../img/logo.png';
import MVTree from './MVTree.vue';

export default {
  name: 'App',

  components: {
    MVTree,
  },

  data() {
    return {
      logo,
      tree: {},
      setDisplay: 'none',
    };
  },

  methods: {
    // Event handler for mimicking input click
    fileUpload() {
      const uploadBtn = this.$refs.inputFile;
      uploadBtn.click();
    },
    
    // Convert uploaded component to string
    async handleUpload() {
      const file = this.$refs.inputFile.files[0];

      const response = await file.text();
      const data = await JSON.parse(response);

      this.tree = data;
      this.setDisplay = 'block';
      this.$refs.inputFile.value = '';
      // * Dispatcher for parsing logic in extension environment using TS - BETA
      // const filePath = this.$refs.inputFile.files[0].path;
      // if (filePath) {
      //   tsvscode.postMessage({
      //     type: 'onFile',
      //     value: filePath
      //   })
      // }
      // return this.parser(response);
    },

    // * TO-DO: Open clicked component in tree in new tab
    viewComponent(node) {
      console.log(`Clicked on ${node.name}!`);
    }
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: 'Oxygen', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700 !important;
  font-size: 11px;
  text-align: center;
  color: whitesmoke;
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
  font-family: 'Oxygen', sans-serif;
  font-weight: 700 !important;
  font-size: 11px;
  width: 46%;
}
</style>
