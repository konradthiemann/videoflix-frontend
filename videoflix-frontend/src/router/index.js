import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

import LoginPage from '@/components/LoginPage.vue';
import RegisterPage from '@/components/RegisterPage.vue';
import ResetPasswordPage from '@/components/ResetPasswordPage.vue';
import MainPage from '@/components/MainPage.vue';
import VideoDetailPage from '@/components/VideoDetailPage.vue';

const routes = [
  { path: '/', name: 'Main', component: MainPage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/register', name: 'Register', component: RegisterPage },
  { path: '/reset-password', name: 'ResetPassword', component: ResetPasswordPage },
  { path: '/video/:id', name: 'VideoDetail', component: VideoDetailPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!store.state.token;
  if (to.name !== 'Login' && to.name !== 'Register' && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;