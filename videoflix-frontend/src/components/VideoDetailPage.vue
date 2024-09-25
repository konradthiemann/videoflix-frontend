<template>
    <div class="video-detail-page">
      <h2>{{ video.title }}</h2>
      <video controls :src="videoUrl"></video>
      <p>{{ video.description }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        video: {},
      };
    },
    computed: {
      videoUrl() {
        return `http://localhost:3000/api/videos/${this.$route.params.id}/stream`;
      },
    },
    async created() {
      try {
        const response = await axios.get(`http://localhost:3000/api/videos/${this.$route.params.id}`);
        this.video = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  };
  </script>
  
  <style scoped>
  video {
    width: 100%;
    max-height: 500px;
  }
  </style>
  