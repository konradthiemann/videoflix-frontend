<template>
    <div class="register-page">
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <input v-model="username" type="text" placeholder="Username" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <router-link to="/login">Already have an account? Login</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
    methods: {
      async handleRegister() {
        try {
          await axios.post('http://localhost:3000/api/register', {
            username: this.username,
            email: this.email,
            password: this.password,
          });
          alert('Registration successful. Please login.');
          this.$router.push('/login');
        } catch (error) {
          console.error(error);
          alert('Registration failed. Please try again.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  