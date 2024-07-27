<script lang="ts" setup>
import BgComponents from '@/components/bg-components/index.vue'
import bgImage from '@/assets/image/bg/02.png'
</script>

<template>
  <div class="home-wrap">
    <BgComponents title="Welcome to Jin's Blog" text="This is a blog built with Vue 3 and Vite 5" :bgImage="bgImage"></BgComponents>
    <div class="home-content max-w-[1280px] mx-auto">
      <el-row class="mt-16">
        <el-col :span="18">
          <div class="card bg-base-100 shadow-xl mr-6 h-[400px]">
            <figure>
              <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="mockup-phone border-error">
            <div class="camera"></div>
            <div class="display">
              <div class="artboard artboard-demo phone-1">欢迎来到Jin的博客</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="mt-6">
        <el-col :span="18">
          <div class="card bg-base-100 shadow-xl mr-6 h-[400px]">
            <figure>
              <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="card bg-base-100 w-96 shadow-xl h-[400px]">
            <figure>
              <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="mt-6">
        <el-col :span="18">
          <div class="card bg-base-100 shadow-xl mr-6 h-[400px]">
            <figure>
              <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="card bg-base-100 w-96 shadow-xl h-[400px] mb-10">
            <figure>
              <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
