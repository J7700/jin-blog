<script setup>
import { storeToRefs } from "pinia";
import { user } from "@/store/index.js";

const { getUserId } = storeToRefs(user());

const add = () => {
  user().setUserId();
};

import IconAccountBox from "~icons/mdi/account-box";
</script>

<template>
  <div class="home-wrap">
    <!-- <icon-account-box style="font-size: 1em; color: red" /> -->
    <!-- {{ getUserId }} -->
    <!-- <el-button type="primary" @click="add">点我</el-button> -->
    <div class="home-content">
      <router-link to="/about">
        <button class="btn btn-primary mt-10">去到关于</button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-wrap {
  .home-content {
    height: 1500px;
  }
}
</style>
