<script setup lang="ts">
  import axios from 'axios';
  import { useRoute, useRouter } from 'vue-router';
  import { onMounted } from 'vue';

  const route = useRoute();
  const router = useRouter();

  onMounted(() => {
    const uid = route.query.uid as string;
    const token = route.query.token as string;

    axios.post('http://127.0.0.1:8000/api/v1/users/activation/', {
      "uid": uid,
      "token": token,
    })
    .then(() => {
      // Handle successful activation
      router.push({ name: 'Login' });
    })
    .catch(error => {
      // Handle activation error
      console.error(error);
    });
  });
</script>

<template>
    <div>
      Activating your account...
    </div>
</template>
  