<template>
  <div class="appHeader" style="background-color: var(--dark);">
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

div {
  width: fill;
  height: 102px;
  border-bottom: 4px inset var(--primary);
}
</style>
