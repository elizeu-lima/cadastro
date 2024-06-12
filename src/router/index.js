import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import RegisterPerson from '../pages/RegisterPerson.vue';
import RegisterUser from '../pages/RegisterUser.vue';
import PersonList from '../pages/PersonList.vue';
import UserList from '../pages/UserList.vue';

const routes = [
  { path: '/', name: 'login', component: Login },
  { path: '/register-person', name: 'register-person', component: RegisterPerson },
  { path: '/register-user', name: 'register-user', component: RegisterUser },
  { path: '/person-list', name: 'person-list', component: PersonList },
  { path: '/user-list', name: 'user-list', component: UserList }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
