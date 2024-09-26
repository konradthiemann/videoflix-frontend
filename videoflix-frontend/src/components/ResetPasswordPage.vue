<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const email = ref<string>('');

const handleResetPassword = async () => {
  try {
    await axios.post('http://localhost:3000/api/reset-password', {
      email: email.value,
    });
    alert('Password reset link sent to your email.');
  } catch (error) {
    console.error(error);
    alert('Failed to send reset link. Please try again.');
  }
};
</script>

<template>
  <div class="reset-password-page">
    <h2>Reset Password</h2>
    <form @submit.prevent="handleResetPassword">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
      />
      <button type="submit">
        Reset Password
      </button>
    </form>
  </div>
</template>



<style scoped>
/* Add your styles here */
</style>
