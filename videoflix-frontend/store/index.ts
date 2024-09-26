// videoflix-frontend/src/store/index.js
import { createPinia, defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    clearToken() {
      this.token = '';
    },
  },
});

const pinia = createPinia();
export default pinia as ReturnType<typeof createPinia>;