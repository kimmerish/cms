<!-- resources/js/components/Shared/Sidebar.vue -->
<template>
    <aside>
        <nav>
            <ul>
                <li><router-link to="/admin/dashboard">Dashboard</router-link></li>
                <li><router-link to="/admin/site">Site</router-link></li>
                <li><router-link to="/admin/news">News</router-link></li>
                <!-- Add other links as needed -->
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {
    name: 'Sidebar',
};
</script>

<style scoped>
aside {
    width: 200px;
    background-color: #f4f4f4;
    padding: 1rem;
    border-right: 1px solid #ddd;
}
nav ul {
    list-style: none;
    padding: 0;
}
nav ul li {
    margin-bottom: 0.5rem;
}
nav ul li a {
    text-decoration: none;
    color: #333;
}
</style>
