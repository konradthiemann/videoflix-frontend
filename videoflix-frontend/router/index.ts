// videoflix-frontend/src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../store';
import LoginPage from '@/components/LoginPage.vue';
import RegisterPage from '@/components/RegisterPage.vue';
import ResetPasswordPage from '@/components/ResetPasswordPage.vue';
import Activate from '@/components/Activate.vue';
import MainPage from '@/components/MainPage.vue';
import VideoDetailPage from '@/components/VideoDetailPage.vue';

const routes = [
  { path: '/', name: 'Main', component: MainPage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/register', name: 'Register', component: RegisterPage },
  { path: '/reset-password', name: 'ResetPassword', component: ResetPasswordPage },
  { path: '/activate', name: 'Activate', component: Activate },
  { path: '/video/:id', name: 'VideoDetail', component: VideoDetailPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = !!authStore.token;
  if (to.name !== 'Login' 
      && to.name !== 'Register' 
      && to.name !== 'Activate'
      && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;