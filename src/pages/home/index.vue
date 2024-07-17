<script setup>
import { storeToRefs } from "pinia";
import { user } from "@/store/index.js";

const { getUserId } = storeToRefs(user());

const add = () => {
  user().setUserId();
};

import ThemeController from "@/components/theme-controller/index.vue";

</script>

<template>
  <div>
    主页
    {{ getUserId }}
    <el-button type="primary" @click="add">点我</el-button>
    <ThemeController></ThemeController>
  </div>
</template>

<style lang="scss" scoped></style>
