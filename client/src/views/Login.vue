<template>
  <div class="login-container">

    <div class="container">

      <div class="login-left">

        <div class="hed">
          <h2>
            <FontAwesome icon="user-check" size="sm" /> You're back!!
          </h2>
        </div>

        <form @submit.prevent="login">
          <div class="input-group">
            <input type="email" placeholder="email" v-model="email" id="email" required>
            <span class="icon">
              <FontAwesome icon="envelope" />
            </span>
          </div>
          <div class="input-group">
            <input type="password" placeholder="password" v-model="password" id="password" required>
            <span class="icon">
              <FontAwesome icon="unlock" />
            </span>

          </div>
          <div class="submit">
            <p>oops, forgot password?</p>
            <button type="submit">sign in</button>
          </div>
          <div class="register">
            <p>got no account ? Register now </p>
            <p>
              <RouterLink to="/signup">sign up</RouterLink>
            </p>
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
import { RouterLink } from 'vue-router';

const email = ref('')
const password = ref('')

const login = async () => {
  try {
    const response = await axios.post('http://localhost:5001/api/v1/auth/login', {
      email: email.value,
      password: password.value
    })
    if (response.data && response.data.token) {
      localStorage.setItem('token', response.data.token)
      router.push('/');
    } else {
      console.error(response.data);
      window.alert(`${response.data}`)
    }
  } catch (error) {
    console.error(error.response.data);
    window.alert(`${error.response.data}`)

  }
}

</script>

<style scoped>
.login-container {
  background-color: #B1B1C6;
  width: 100%;
  padding: 80px;
}

.container {
  background-color: white;
  width: 89%;
  margin-left: 5.5%;
  display: flex;
  border-radius: 40px;
  padding: 30px;
  color: "#1E3050";
}

.login-left {
  width: 40%;
  border-radius: 20px;
  margin: 60px;
  margin-left: 90px;
  padding: 30px;
  color: #1E3050;

}



.hed h2 {
  margin-bottom: 20px;
  text-align: center;
  color: #1E3050;
  font-size: 30px;
  font-weight: 300;

}

.input-group {
  position: relative;
  margin-bottom: 20px;
  color: #1E3050;

}

.input-group .icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #1E3050;
}



.input-group input {
  width: 100%;
  padding: 10px;
  border-radius: 25px;
  border: 1px solid #656464;
}

.submit {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.submit p {
  font-size: 14px;
  color: #1E3050;
}

button {
  background-color: #322D55;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-weight: 200;
  font-family: Roboto;
  cursor: pointer;

}

button:hover {
  background-color: #2d2750;
}

.register {
  font-size: 13px;
  display: flex;
  padding: 7px;
}

.register p {
  margin-left: 7px;
  color: #1E3050;
}

.login-right img {
  width: 80%;
  margin-left: 8%;
  margin-top: 2%;
}

@media screen and (max-width: 850px) {
  .login-container {
    background-color: #B1B1C6;
    width: 100%;
    padding: 10px;
  }

  .container {
    flex-direction: column;
    align-items: center;
    margin: 80px 10px;
  }

  .login-left {
    width: 100%;
    margin: 20px;
    margin-top: 20%;
  }

  .login-right img {
    position: absolute;
    width: 20%;
    top: 12%;
    left: 60%;
    margin: 20px;
  }

  .headImg img {
    width: 120px;
    position: absolute;
    left: 12%;
    top: 16%;
    filter: drop-shadow(3px 1px 3px #1E3050);
  }
}

@media screen and (min-width: 850px) and (max-width: 1130px) {
  .login-container {
    background-color: #B1B1C6;
    width: 100%;
    padding: 10px;
  }

  .login-left {
    width: 80%;
    margin: 20px;
    margin-top: 20%;
  }

  .login-right img {
    width: 90%;
    margin-left: 6%;
    margin-top: 10%;
  }

  .headImg img {
    width: 120px;
    position: absolute;
    left: 10%;
    top: 10%;
    filter: drop-shadow(3px 1px 3px #1E3050);
  }
}
</style>
