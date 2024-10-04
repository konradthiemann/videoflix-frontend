<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  import type { User } from '../components/types/user';
      
  interface Video {
    id: string;
    title: string;
    thumbnail: string;
    description: string;
  }
  
  const baseUrl = 'http://127.0.0.1:8000'
  const videos = ref<Video[]>([]);
  const router = useRouter();
      
  const goToVideoDetail = (id: string) => {
    router.push(`/video/${id}`);
  };
      
  onMounted(async () => {
    getVideos();
    
  });

  async function getVideos() {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get<Video[]>('http://127.0.0.1:8000/api/v1/videos/', { headers: { Authorization: `Bearer ${token}` } });
      videos.value = response.data;
    } catch (error) {
      console.error(error);
    }
  }    



  async function logout() {
    // getVideos();
    try {
      const token = localStorage.getItem('token');
      console.log('Token: ',token);
      // const response = await axios.get<User>('http://127.0.0.1:8000/api/v1/users/me/', { headers: { Authorization: `Bearer ${token}` } });
      const response = await axios.get<User>('http://127.0.0.1:8000/api/v1/data/', { headers: { Authorization: `Bearer ${token}` } });
      console.log('RESPONSE:',response);  
    } catch (error) {
      console.error(error);
    }
  };
</script>

<template>
  <div class="main-page">
    <h1>Welcome to Videoflix</h1>
    <button @click="logout">Logout</button>
    <h2>Video Library</h2>
    <div class="video-grid">
      <div
        v-for="video in videos"
        :key="video.id"
        class="video-card"
        @click="goToVideoDetail(video.id)"
      >
        <img
          :src=baseUrl+video.thumbnail
          alt="Video Thumbnail"
        >
        <h3>{{ video.title }}</h3>
        <p>{{ video.description }}</p>
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
