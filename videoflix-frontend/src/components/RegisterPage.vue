<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const username = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const router = useRouter();

const handleRegister = async () => {
  try {
    await axios.post('http://localhost:3000/api/register', {
      username: username.value,
      email: email.value,
      password: password.value,
    });
    alert('Registration successful. Please login.');
    router.push('/login');
  } catch (error) {
    console.error(error);
    alert('Registration failed. Please try again.');
  }
};
</script>

<template>
  <div class="register-page">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <input
        v-model="username"
        type="text"
        placeholder="Username"
        required
      />
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
        Register
      </button>
    </form>
    <router-link to="/login">
      Already have an account? Login
    </router-link>
  </div>
</template>



<style scoped>
/* Add your styles here */
</style>
