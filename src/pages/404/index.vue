<template>
    <div class="error-wrap">
        <div class="error-header">

        </div>
        404
        <router-link to="/home">
            <button class="btn btn-primary">回到首页</button>
        </router-link>
    </div>
</template>

<script setup></script>

<style scoped>
.error-wrap {
    height: 100px;

    .error-header {
        height: 60px;
    }
}
</style>
