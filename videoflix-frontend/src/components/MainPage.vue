<template>
    <div class="main-page">
      <h2>Video Library</h2>
      <div class="video-grid">
        <div
          class="video-card"
          v-for="video in videos"
          :key="video.id"
          @click="goToVideoDetail(video.id)"
        >
          <img :src="video.thumbnailUrl" alt="Video Thumbnail" />
          <h3>{{ video.title }}</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        videos: [],
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:3000/api/videos');
        this.videos = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    methods: {
      goToVideoDetail(id) {
        this.$router.push(`/video/${id}`);
      },
    },
  };
  </script>
  
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
  