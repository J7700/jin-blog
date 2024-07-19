<script setup>
import { reactive } from "vue";
import HomeBanner from "@/assets/image/home-banner.jpg";

const params = reactive({
  currentPage: 1,
  pageSize: 5,
});

const articleList = [
  {
    id: 1,
    title: "博客部署",
    cover: HomeBanner,
    createTime: "2019-04-12 20:46",
  },
  {
    id: 2,
    title: "博客部署",
    cover: HomeBanner,
    createTime: "2018-04-12 20:46",
  },
  {
    id: 3,
    title: "博客部署",
    cover: HomeBanner,
    createTime: "2018-04-12 20:46",
  },
  {
    id: 4,
    title: "博客部署",
    cover: HomeBanner,
    createTime: "2018-04-12 20:46",
  },
  {
    id: 5,
    title: "博客部署",
    cover: HomeBanner,
    createTime: "2018-04-12 20:46",
  },
];

const getArticleList = () => {};
</script>

<template>
  <el-card>
    <div class="max-w-[880px] p-[40px]">
      <el-timeline style="max-width: 600px">
        <el-timeline-item center placement="top" v-for="(article, index) in articleList" :key="index">
          <div class="item flex items-center">
            <div class="cover w-[6rem] h-[6rem] overflow-hidden">
              <el-image class="w-[100%] h-[100%] duration-300 hover:scale-110" fit="cover" :src="article.cover"></el-image>
            </div>
            <div class="info ml-5">
              <div class="title text-xl">{{ article.title }}</div>
              <div class="title">{{ article.createTime }}</div>
            </div>
          </div>
        </el-timeline-item>
      </el-timeline>
      <div class="flex justify-center items-center">
        <el-pagination v-model:current-page="params.currentPage" v-model:page-size="params.pageSize" background layout="prev, pager, next" :total="articleList.length" @change="getArticleList" />
      </div>
    </div>
  </el-card>
</template>
