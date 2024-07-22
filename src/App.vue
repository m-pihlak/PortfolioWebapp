<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="content_align" style="margin: var(--spacing);">
      <BioCard></BioCard>
      <ContentBlock></ContentBlock>
    </div>
    <NavButton style="position: absolute; right: 40px; bottom: 40px;">PROJECTS 🡒</NavButton>
  </div>
</template>

<script>
import '@/assets/css/main.css'
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
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
