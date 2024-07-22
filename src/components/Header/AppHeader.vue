<template>
  <div class="app_header" style="background-color: var(--dark);">
    <template v-for="(child, index) in children()">
      <component :is="child" :key="index"></component>
    </template>
  </div>
</template>

<script>
import Vue from 'vue';
import HeaderItem from './HeaderItem.vue'

export default {
  name: 'AppHeader',
  methods: {
    children() {
        let HeaderClass = Vue.extend(HeaderItem);
        let newHeader = new HeaderClass({});

        return [
          newHeader
        ];
    },
  },
  components: {
    HeaderItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background-color: var(--dark);
  width: fill;
  height: var(--header-height);
  border-bottom: var(--primary-border);
  position: relative;
}
</style>
