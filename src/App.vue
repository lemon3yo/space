<template>
  <!-- <nav>
    <router-link to="/"></router-link>
    <router-link to="/home"></router-link>
  </nav> -->
  <div class="app-container">
    <router-view/>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
// const play = ref(false)
</script>

<style lang="scss" scoped>
.app-container {
  width: 100vw;
  height: 100vh;
}
</style>
