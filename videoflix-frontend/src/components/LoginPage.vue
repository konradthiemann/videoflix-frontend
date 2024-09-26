<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../store';

const email = ref<string>('');
const password = ref<string>('');
const router = useRouter();
const authStore = useAuthStore();

const handleLogin = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/login', {
      email: email.value,
      password: password.value,
    });
    authStore.setToken(response.data.token);
    localStorage.setItem('token', response.data.token);
    router.push('/');
  } catch (error) {
    console.error(error);
    alert('Login failed. Please check your credentials.');
  }
};
</script>

<template>
  <div class="login-page">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">
        Login
      </button>
    </form>
    <router-link to="/reset-password">
      Forgot Password?
    </router-link>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
