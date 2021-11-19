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
import logo from '../img/logo.png';
import Tree from './Tree.vue';
import {
  safe,
  compValues,
  findCompOrProp,
  propElems,
} from '../helpers/parserHelpers';

// Dependencies for parsing upload
import * as compiler from 'vue-template-compiler';
import * as esprima from 'esprima';

export default {
  name: 'App',

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
    // Event handler for mimicking input click
    fileUpload() {
      const uploadBtn = this.$refs.inputFile;
      uploadBtn.click();
    },

    // Convert uploaded component to string
    async handleUpload() {
      const file = this.$refs.inputFile.files[0];
      const response = await file.text();
      return this.MVParser(response);
    },

    // Parse component string to identify children and props
    MVParser(res) {
      // Using modules to generate AST
      const script = compiler.parseComponent(res).script;
      const ast = esprima.parseModule(script.content);
      console.log('ast: ', ast);

      // Retrieving body, its props, and children comps of SFC
      const exportsOutput = ast.body.find(({ type }) => type === 'ExportDefaultDeclaration');
      const declProps = exportsOutput.declaration.properties;

      // Returns array of child components
      const children = safe(compValues, [])(findCompOrProp(declProps, 'components'));

      // Returns array of props in SFC
      const props = safe(propElems, [])(findCompOrProp(declProps, 'props'));

      return this.superAwesomeTreeGenerator3000(children, props);
    },

    superAwesomeTreeGenerator3000(children, props) {
      console.log('children: ', children);
      console.log('props: ', props);

      // Recursively build data structure (tree)
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
  font-family: 'Oxygen', sans-serif;
  font-weight: 700 !important;
  font-size: 11px;
  width: 50%;
}
</style>
