<template >
  <header v-if="isLoggedIn">
    <div class="wrapper">
      <nav >
        <RouterLink to="/">Home</RouterLink>
        <div class="right">
        <button @click="logout">Logout</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import router from '../router/index.js';

let isLoggedIn = localStorage.getItem('token');

const logout = () => {
  isLoggedIn = false;
  localStorage.removeItem('token');
  router.push('/login');
  window.location.reload();
};

</script>

<style scoped>
header {
  background-color: #110F24;
  color: white;
  padding: .4rem;
  width: 100%;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.right{
    display: flex;
    margin-left: 150%;

}
.right button{
    border: 1px solid #fff;
    border-radius: 8px;
}
nav {
  display: flex;
  width: 60%;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

nav a:hover {
  background-color: #555;
}
</style>
