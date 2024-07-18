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
  <div class="bg-base-200">
    <!-- <icon-account-box style="font-size: 1em; color: red" /> -->
    <!-- {{ getUserId }} -->
    <!-- <el-button type="primary" @click="add">点我</el-button> -->
    <div class="hero bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <router-link to="/about">
            <button class="btn btn-primary">Get Started</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
