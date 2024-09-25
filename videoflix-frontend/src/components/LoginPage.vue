<template>
    <div class="login-page">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <router-link to="/reset-password">Forgot Password?</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async handleLogin() {
        try {
          const response = await axios.post('http://localhost:3000/api/login', {
            email: this.email,
            password: this.password,
          });
          // Save token and redirect
          localStorage.setItem('token', response.data.token);
          this.$router.push('/');
        } catch (error) {
          console.error(error);
          alert('Login failed. Please check your credentials.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  