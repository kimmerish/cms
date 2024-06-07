<template>
    <div>
        <header-component></header-component>
        <navbar-component></navbar-component>
        <div class="main-content">
            <sidebar-component></sidebar-component>
            <router-view></router-view>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style scoped>
.main-content {
    display: flex;
}
</style>
