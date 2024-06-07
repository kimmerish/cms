// resources/js/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Site/Home.vue';
import Gallery from '../components/Site/Gallery.vue';
import About from '../components/Site/About.vue';
import SiteNews from '../components/Site/News.vue';
import Media from '../components/Site/Media.vue';
import Help from '../components/Site/Help.vue';
import Projects from '../components/Site/Projects.vue';
import Auction from '../components/Site/Auction.vue';
import Contacts from '../components/Site/Contacts.vue';
import Dashboard from '../components/Admin/Dashboard.vue';
import AdminSite from '../components/Admin/Site.vue';
import AdminNews from '../components/Admin/News.vue';
// Додайте інші імпорти компонентів за потребою

const routes = [
    { path: '/', component: Home },
    { path: '/gallery', component: Gallery },
    { path: '/about', component: About },
    { path: '/news', component: SiteNews },
    { path: '/media', component: Media },
    { path: '/help', component: Help },
    { path: '/projects', component: Projects },
    { path: '/auction', component: Auction },
    { path: '/contacts', component: Contacts },
    { path: '/admin/dashboard', component: Dashboard },
    { path: '/admin/site', component: AdminSite },
    { path: '/admin/news', component: AdminNews },
    // Додайте інші маршрути за потребою
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
