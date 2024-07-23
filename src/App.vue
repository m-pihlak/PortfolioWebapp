<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="content_align" style="margin: var(--spacing)">
      <BioCard></BioCard>
      <ContentBlock></ContentBlock>
    </div>
    <div class="nav_buttons">
      <NavButton :to="back" :extra="this.updateIndices">🡐 {{ back }}</NavButton>
      <NavButton :to="forward" :extra="this.updateIndices">{{ forward }} 🡒</NavButton>
    </div>
  </div>
</template>

<script>
import '@/assets/css/main.css';
import AppHeader from './components/Header/AppHeader.vue';
import BioCard from './components/BioCard/BioCard.vue';
import ContentBlock from './components/ContentBlock/ContentBlock.vue';
import NavButton from './components/Navigation/NavButton.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    BioCard,
    ContentBlock,
    NavButton
  },
  data: () => ({
    back: "",
    forward: ""
  }),
  methods: {
    updateIndices() {
      const length = this.$router.options.routes.length
      var thisIndex = 0

      for(let i = 0; i < length; i++) {
        if (this.$router.options.routes[i].name == this.$route.name) {
          thisIndex = i
          break
        }
      }

      var backIndex = thisIndex - 1
      var frontIndex = thisIndex + 1

      if (backIndex < 0)
        backIndex = length - 1
      if (frontIndex > length - 1)
        frontIndex = 0
      
      this.back = this.$router.options.routes[backIndex].name
      this.forward = this.$router.options.routes[frontIndex].name
      console.log(this.back)
      console.log(this.forward)
    }
  },
  mounted() {
    this.updateIndices()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: white;
}

.nav_buttons {
  display: flex;
  position: absolute;
  left: 40px;
  right: 40px;
  bottom: 40px;
  
  justify-content: right;
}

.nav_buttons > * {
  margin-left: 40px;
}

@media screen and (max-width: 1200px) {
  .nav_buttons {
    justify-content: space-between;
  }
  .nav_buttons > * {
    margin-left: 0;
  }
}

</style>
