<template>
  <li class="node-tree">
    <span class="label">{{ node.name }}</span>

    <ul v-if="node.children && node.children.length">
      <node v-for="child in node.children" :node="child" :key="child"></node>
    </ul>
  </li>
</template>

<script>
export default {
  name: "node",
  props: {
    node: Object
  }
};
</script>