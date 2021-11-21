<template>
  <div class="tree-container">
    <div
      @click="nodeClicked"
      :style="{ 'margin-left': `${depth * 20}px` }"
      class="node"
    >
      <div
        v-if="hasChildren"
        :style="{ 'display': `${treeDisplay}` }"
        class="carrot"
      >
        {{ expanded ? '⋎' : '≻' }}
      </div>
      <div
        v-else
        :style="{ 'display': `${treeDisplay}`, 'width': '10px' }"
        class="carrot"
      ></div>
      {{ node.name }}

    </div>
    
    <div v-if="expanded">
      <MVTree
        v-for="child in node.children"  
        :key="child"
        :node="child"
        :depth="depth + 1"
        @onClick="(node) => $emit('onClick', node)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MVTree',
  props: {
    node: Object,
    depth: {
      type: Number,
      default: 0,
    },
    treeDisplay: String
  },
  data() {
    return {
      expanded: false
    }
  },
  methods: {
    nodeClicked() {
      this.expanded = !this.expanded;

      if (!this.hasChildren) {
        this.$emit('onClick', this.node);
      }
    }
  },
  computed: {
    hasChildren() {
      return this.node.children;
    }
  }
};
</script>

<style scoped lang="scss">
.tree-container {
  font-size: 14px;
}

.node {
  display: flex;
  padding-bottom: 10px;
  text-align: left;
}

.carrot {
  margin-right: 10px;
}
</style>