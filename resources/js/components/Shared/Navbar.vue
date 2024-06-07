<!-- resources/js/components/Shared/Navbar.vue -->
<template>
    <nav class="navbar">
        <router-link to="/" class="logo">My CMS</router-link>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
};
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 1rem;
}
.navbar .logo {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
}
.navbar ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}
.navbar ul li {
    margin-left: 1rem;
}
.navbar ul li a {
    color: white;
    text-decoration: none;
}
</style>
