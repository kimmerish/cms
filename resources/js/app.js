// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import Vuex from 'vuex';

// Vue.use(VueRouter);
// Vue.use(Vuex);

// const router = new VueRouter({
//     routes: [
//         // Ваші маршрути
//     ]
// });

// new Vue({
//     el: '#app',
//     router,
//     store,
// });
// resources/js/app.js

require('./bootstrap');

import { createApp } from 'vue';
import Dashboard from './components/Admin/Dashboard.vue';
import Site from './components/Admin/Site.vue';
import News from './components/Admin/News.vue';
import Page from './components/Admin/Page.vue';
import Portfolio from './components/Admin/Portfolio.vue';
import Bot from './components/Admin/Bot.vue';
import Theme from './components/Admin/Theme.vue';
import Template from './components/Admin/Template.vue';
import Email from './components/Admin/Email.vue';
import Product from './components/Admin/Product.vue';
import WebService from './components/Admin/WebService.vue';
import UserUpdate from './components/Admin/UserUpdate.vue';
import Payment from './components/Admin/Payment.vue';
import User from './components/Admin/User.vue';
import Plugin from './components/Admin/Plugin.vue';
import Setting from './components/Admin/Setting.vue';
import Tool from './components/Admin/Tool.vue';
import Logout from './components/Admin/Logout.vue';
import Home from './components/Site/Home.vue';
import Gallery from './components/Site/Gallery.vue';
import About from './components/Site/About.vue';
import SiteNews from './components/Site/News.vue';
import Media from './components/Site/Media.vue';
import Help from './components/Site/Help.vue';
import Projects from './components/Site/Projects.vue';
import Auction from './components/Site/Auction.vue';
import Contacts from './components/Site/Contacts.vue';
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Sidebar from './components/Shared/Sidebar.vue';
import Navbar from './components/Shared/Navbar.vue';

const app = createApp({});

app.component('dashboard', Dashboard);
app.component('admin-site', Site);
app.component('admin-news', News);
app.component('admin-page', Page);
app.component('admin-portfolio', Portfolio);
app.component('admin-bot', Bot);
app.component('admin-theme', Theme);
app.component('admin-template', Template);
app.component('admin-email', Email);
app.component('admin-product', Product);
app.component('admin-web-service', WebService);
app.component('admin-user-update', UserUpdate);
app.component('admin-payment', Payment);
app.component('admin-user', User);
app.component('admin-plugin', Plugin);
app.component('admin-setting', Setting);
app.component('admin-tool', Tool);
app.component('admin-logout', Logout);
app.component('home', Home);
app.component('gallery', Gallery);
app.component('about', About);
app.component('site-news', SiteNews);
app.component('media', Media);
app.component('help', Help);
app.component('projects', Projects);
app.component('auction', Auction);
app.component('contacts', Contacts);
app.component('header-component', Header);
app.component('footer-component', Footer);
app.component('sidebar-component', Sidebar);
app.component('navbar-component', Navbar);

app.mount('#app');
