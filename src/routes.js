import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HelloWorld.vue';
import User from './components/User.vue';

const routes = [
    { path: '/', name: 'Home', component: Home }, 
    { path: '/user', name: 'User', component: User }, 
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
