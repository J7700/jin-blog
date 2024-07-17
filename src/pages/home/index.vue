<script setup>
import { storeToRefs } from "pinia";
import { user } from "@/store/index.js";

const { getUserId } = storeToRefs(user());

const add = () => {
  user().setUserId();
};
</script>

<template>
  <div>
    主页
    {{ getUserId }}
    <el-button type="primary" @click="add">点我</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
