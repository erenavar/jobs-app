<template>
  <div id="app">
    <navbar />
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import navbar from "./components/NavBar";
export default {
  components: {
    navbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* css for transition tag below */
.slide-fade-enter {
  transform: translateX(40px);
  opacity: 0;
}

.slide-fade-leave-active {
  transform: translateX(-40px);
  opacity: 0;
}
.slide-fade-enter-active {
  transition: 0.5s ease;
}

.slide-fade-leave-active {
  transition: 0.2s ease;
}
</style>
