<template>
  <div class="app_header" style="background-color: var(--dark);">
    <nav>
      <router-link v-for="(route, index) in this.$router.options.routes" :to="route.path" :key="index">{{ route.name }}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--dark);
  width: fill;
  height: var(--header-height);
  /*border-bottom: var(--primary-border);
  box-shadow: 0px -4px 8px -4px var(--primary) inset;*/
  box-shadow: 4px 4px 16px 4px black;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 800px;
  width: fill;
}

nav > * {
  display: flex;
  justify-content: center;
  align-items: center;

  height: var(--nav-button-height);
  width: var(--nav-button-width);
  border-radius: 4px;

  font-family: "Press Start 2P", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 18px;
  color:var(--secondary);
}

nav > *:hover {
  transform: scale(1.1);
  transition-duration: 0.2s;
}

nav > *:active {
  transform: scale(0.9);
  transition-duration: 0.2s;
}
.router-link-active {
  background-color: var(--primary);
  transition-duration: 0.1s;
}

</style>
