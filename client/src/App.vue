<script setup>
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'
import { computed } from 'vue';
import router from './router/index.js';

const isLoggedIn = computed(() => {
  return localStorage.getItem('token') !== null;
});

if (!isLoggedIn.value || undefined) {
  router.push('/login');
}

</script>

<template>
<div>
   <Header :isLoggedIn="isLoggedIn" />
    <RouterView />
  </div>
</template>
<style scoped>
</style>

