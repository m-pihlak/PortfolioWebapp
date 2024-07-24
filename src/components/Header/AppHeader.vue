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
  border-bottom: var(--primary-border);
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

  font-family: "Orbitron", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 24px;
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


@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
.router-link-active {
  background-color: var(--primary);
  transition-duration: 0.1s;
}
</style>
