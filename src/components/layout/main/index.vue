<script setup>
import PageHeader from "@/components/page-header/index.vue";

</script>

<template>
  <div class="main-wrap bg-base-100">
    <PageHeader></PageHeader>
    <div class="max-w-[80rem] mx-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
