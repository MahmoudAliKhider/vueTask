<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input type="text" v-model="name" placeholder="Name" required>
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import router from '../router/index.js';

const name = ref('')
const email = ref('')
const password = ref('')

const register = async () => {
  try {
    const response = await axios.post('http://localhost:5001/api/v1/auth/signup', {
      name: name.value,
      email: email.value,
      password: password.value
    })
    console.log(response.data)
    router.push('/');
    window.location.reload();

  } catch (error) {
    console.error(error.response.data)
  }
}
</script>
