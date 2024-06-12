import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './main.css';  // Certifique-se de que o caminho está correto

async function init() {
  await loadInitialData();

  const app = createApp(App);
  app.use(router);
  app.mount('#app');
}

async function loadInitialData() {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.length === 0) {
    localStorage.setItem('users', JSON.stringify([
      { id: 1, email: 'admin@example.com', password: 'admin' }
    ]));
  }

  const people = JSON.parse(localStorage.getItem('people')) || [];
  if (people.length === 0) {
    localStorage.setItem('people', JSON.stringify([
      { id: 1, name: 'John Doe', emailOrPhone: 'john@example.com', birthDate: '1990-01-01' }
    ]));
  }
}

init();
