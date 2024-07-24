<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="content_align" style="margin: var(--spacing)">
      <BioCard></BioCard>
      <ContentBlock></ContentBlock>
    </div>
    <div class="nav_buttons">
      <NavButton :to="this.getBack()">🡐 PLACEHOLDER</NavButton>
      <NavButton :to="this.getForward()">PLACEHOLDER 🡒</NavButton>
    </div>
  </div>
</template>

<script>
import '@/assets/css/main.css';
import AppHeader from './components/Header/AppHeader.vue';
import BioCard from './components/BioCard/BioCard.vue';
import ContentBlock from './components/ContentBlock/ContentBlock.vue';
import NavButton from './components/Navigation/NavButton.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    AppHeader,
    BioCard,
    ContentBlock,
    NavButton
  },
  methods: {
    ...mapGetters([
      'getBack',
      'getForward'
    ])
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
