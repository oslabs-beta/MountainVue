<template>
  <div class="node-tree">
    <div class="label">{{ node.name }}</div>

    <ul v-if="node.children && node.children.length">
      <node v-for="child in node.children" :node="child" :key="child"></node>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'node',
  props: {
    node: Object
  }
};
</script>

<style lang="scss">
.label, ul .node-tree {
  padding-bottom: 5px;
  text-align: left;
}

.node-tree ul {
  padding: 0;
  margin-left: 2em;
  list-style: none;
}
</style>