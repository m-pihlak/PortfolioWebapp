<template>
  <div id="app">
    <background-item></background-item>
    <AppHeader></AppHeader>
    <div class="content_align">
      <BioCard></BioCard>
      <RouterContainer></RouterContainer>
    </div>
    <div class="nav_buttons">
      <NavButton :to="this.getBack()">
        <template #before>
          ◄
        </template>
        <template #default>
          PLACEHOLDER
        </template>
      </NavButton>
      <NavButton :to="this.getForward()">
        <template #default>
          PLACEHOLDER
        </template>
        <template #after>
          ►
        </template>
      </NavButton>
    </div>
  </div>
</template>

<script>
import '@/assets/css/main.css';
import AppHeader from './components/Header/AppHeader.vue';
import BioCard from './components/BioCard/BioCard.vue';
import RouterContainer from './components/Content/RouterContainer.vue';
import NavButton from './components/Navigation/NavButton.vue';
import { mapGetters } from 'vuex';
import BackgroundItem from './components/background/BackgroundItem.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    BioCard,
    RouterContainer,
    NavButton,
    BackgroundItem
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
  font-family: Josefin Sans, Helvetica, Arial, sans-serif;
  font-weight: 300;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: white;
  overflow: hidden;
}

.content_align {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: var(--spacing);
}

.nav_buttons {
    display: flex;
    position: fixed;
    left: calc(var(--spacing) + var(--bio-card-width));
    right: var(--spacing);
    bottom: var(--spacing);
    
    justify-content: right;
}

.nav_buttons > * {
    margin-left: var(--spacing);
}

@media screen and (max-width: 1200px) {
    .nav_buttons {
        left: var(--spacing);
        justify-content: space-between;
    }
    .nav_buttons > * {
        margin-left: 0;
    }
}

@media screen and (max-width: 800px) {
    .content_align {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        overflow-x: hidden;
        margin-right: 0;
        padding-right: var(--spacing);
        
        height: calc(100vh - var(--header-height) - 3*var(--spacing) - var(--nav-button-height));
    }
    /* width */
    ::-webkit-scrollbar {
        width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: none;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: var(--secondary-second);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--secondary-third);
    }
}
</style>
