<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
      
  interface Video {
    id: string;
    title: string;
    thumbnailUrl: string;
    // Add other properties if necessary
  }
      
  const videos = ref<Video[]>([]);
  const router = useRouter();
      
  const goToVideoDetail = (id: string) => {
    router.push(`/video/${id}`);
  };
      
  onMounted(async () => {
    try {
      const response = await axios.get<Video[]>('http://localhost:3000/api/videos');
      videos.value = response.data;
    } catch (error) {
      console.error(error);
    }
  });
</script>

<template>
  <div class="main-page">
    <h2>Video Library</h2>
    <div class="video-grid">
      <div
        v-for="video in videos"
        :key="video.id"
        class="video-card"
        @click="goToVideoDetail(video.id)"
      >
        <img
          :src="video.thumbnailUrl"
          alt="Video Thumbnail"
        >
        <h3>{{ video.title }}</h3>
      </div>
    </div>
  </div>
</template>


<style scoped>
.video-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.video-card {
  width: calc(25% - 16px);
  cursor: pointer;
}
.video-card img {
  width: 100%;
}
</style>
