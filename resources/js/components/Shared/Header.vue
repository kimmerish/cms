<!-- resources/js/components/Shared/Header.vue -->
<template>
    <header>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style scoped>
header {
    background-color: #333;
    color: white;
    padding: 1rem;
}
nav ul {
    list-style: none;
    padding: 0;
    display: flex;
}
nav ul li {
    margin-right: 1rem;
}
nav ul li a {
    color: white;
    text-decoration: none;
}
</style>
