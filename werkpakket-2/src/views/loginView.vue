<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required />
      <br />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/counter';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const authStore = useAuthStore();
      // Simulate a login request, replace with actual authentication logic
      if (this.username === 'testuser' && this.password === 'testpassword') {
        authStore.login({
          username: this.username,
          // Add other user-related data here
        });
        alert('Succesful login');
        // Redirect or perform other actions after successful login
      } else {
        alert('Invalid credentials');
      }
    },
  },
};
</script>

