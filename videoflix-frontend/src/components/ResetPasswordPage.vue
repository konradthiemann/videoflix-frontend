<template>
    <div class="reset-password-page">
      <h2>Reset Password</h2>
      <form @submit.prevent="handleResetPassword">
        <input v-model="email" type="email" placeholder="Email" required />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
      };
    },
    methods: {
      async handleResetPassword() {
        try {
          await axios.post('http://localhost:3000/api/reset-password', {
            email: this.email,
          });
          alert('Password reset link sent to your email.');
        } catch (error) {
          console.error(error);
          alert('Failed to send reset link. Please try again.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  