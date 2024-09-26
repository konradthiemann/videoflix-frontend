<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

interface Video {
  title: string;
  description: string;
  // Add other properties as needed
}

const video = ref<Video | null>(null);
const route = useRoute();

const videoUrl = computed(() => {
  return `http://localhost:3000/api/videos/${route.params.id}/stream`;
});

onMounted(async () => {
  try {
    const response = await axios.get<Video>(`http://localhost:3000/api/videos/${route.params.id}`);
    video.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div class="video-detail-page">
    <h2 v-if="video">{{ video.title }}</h2>
    <video
      controls
      :src="videoUrl"
    />
    <p v-if="video">{{ video.description }}</p>
  </div>
</template>

<style scoped>
video {
  width: 100%;
  max-height: 500px;
}
</style>
