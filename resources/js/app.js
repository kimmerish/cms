// resources/js/app.js

require('./bootstrap');

import { createApp } from 'vue';
import router from './router';
import App from './components/App.vue';
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Sidebar from './components/Shared/Sidebar.vue';
import Navbar from './components/Shared/Navbar.vue';

const app = createApp(App);

app.component('header-component', Header);
app.component('footer-component', Footer);
app.component('sidebar-component', Sidebar);
app.component('navbar-component', Navbar);

app.use(router);

app.mount('#app');
