<template >
  <header v-if="isLoggedIn">
    <div class="wrapper">
      <nav >
        <RouterLink to="/">
        <img src="../assets/images/conn.png" alt="logo" />
        </RouterLink>
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
  /* padding: .2rem; */
  width: 100%;
}

.right{
   position: relative;
   left: 140%;
   display: flex;
}
.right button{
    border: 1px solid #fff;
    border-radius: 8px;
    height: 40px;
    padding: 0px 20px;
    cursor: pointer;
}
nav {
  display: flex;
  width: 60%;
  align-items: center;
  margin-left: 20px;
}

nav img{
  width: 90px;
}
nav a {
  color: white;
  text-decoration: none;
}

/* nav a:hover {
  background-color: #fff;
  color: #110F24;
  border-radius: 30px;
} */
</style>
