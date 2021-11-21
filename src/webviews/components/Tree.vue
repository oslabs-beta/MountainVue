<template>
  <div class="tree">
    <div class="tree-list">
      <node-tree :node="treeData"></node-tree>
    </div>
  </div>
</template>

<script>
import NodeTree from "./MVTree.vue";

export default {
  props: {
    treeData: Object
  },
  components: {
    NodeTree
  }
};
</script>

<style>
.tree {
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>