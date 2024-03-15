<template>
  <div class="login-container">
  <div class="container">
    <div class="login-left">
      <h2>You`re back!!</h2>
      <form @submit.prevent="login">
        <div class="input-group">
          <input type="email" placeholder="email" v-model="email" id="email" required>
        </div>
        <div class="input-group">
          <input type="password" placeholder="password" v-model="password" id="password" required>
        </div>
        <div>
        <button type="submit">Login</button>
        </div>
      </form>
    </div>
     <div class="login-right">
    <img src="../assets/images/LoginTask.png" alt="l" />
    </div>
    </div>
   
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import router from '../router/index.js';

const email = ref('')
const password = ref('')

const login = async () => {
  try {
    const response = await axios.post('http://localhost:5001/api/v1/auth/login', {
      email: email.value,
      password: password.value
    })
    localStorage.setItem('token', response.data.token)
    router.push('/');
  } catch (error) {
    console.error(error.response.data)
  }
}
</script>


<style scoped>
.login-container {
  background-color: #B1B1C6;
  width: 100%;
  padding: 70px;
}

.container{
  background-color: white;
  width: 99%;
  display:flex;
  border-radius: 40px;
  padding:30px;
}
.login-left {
    width: 40%;
  border-radius: 20px;
  margin: 60px;
  margin-left: 90px;
  padding: 30px;
}

.login-left h2 {
  margin-bottom: 20px;
  text-align: center;
}

.input-group {
  margin-bottom: 20px;
}


.input-group input {
  width: 100%;
  padding: 10px;
  border-radius: 25px;
  border: 1px solid #ccc;
}

button {
  background-color: #322D55;
  color: white;
  padding: 20px;
  border: none;
  border-radius: 20px;
  font-weight: 200;
  font-family: Roboto;
  cursor: pointer;
}

button:hover {
  background-color: #2d2750;
}

.login-right img{
  width:80%;
  margin-left: 8%;
  margin-top: 2%;
}
</style>