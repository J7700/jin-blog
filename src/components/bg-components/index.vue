<script setup>
import { computed } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  bgImage: {
    type: String,
    default: ''
  }
})

const computedBackgroundImage = computed(() => ({
  backgroundImage: `url(${props.bgImage})`
}))
</script>

<template>
  <div class="bg-components-wrap">
    <div class="bg-components-bg" :style="computedBackgroundImage">
      <div class="bg-components-container">
        <div class="bg-components-top">
          <h1 class="text-base-100">{{ title }}</h1>
        </div>
        <div class="bg-components-bottom">
          <p class="text-base-100">
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-components-wrap {
  .bg-components-bg {
    height: 400px;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (min-width: 768px) {
      // md
      height: 500px;
    }
    @media (min-width: 1024px) {
      // lg
      height: 600px;
    }
    @media (min-width: 1280px) {
      // xl
      height: 600px;
    }
    @media (min-width: 1536px) {
      // 2xl
      height: 700px;
    }
    @media (min-width: 1920px) {
      // 3xl
      height: 700px;
    }
    .bg-components-container {
      height: 100%;
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media (min-width: 768px) {
        // md
        padding: 0 20px;
        align-items: center;
      }
      .bg-components-top {
        h1 {
          font-size: 2.5rem;
          font-weight: 700;
          @media (min-width: 768px) {
            // md
            font-size: 3rem;
          }
          @media (min-width: 1024px) {
            // lg
            font-size: 3.5rem;
          }
          @media (min-width: 1280px) {
            // xl
            font-size: 3.5rem;
          }
        }
      }
      .bg-components-bottom {
        p {
          font-size: 1.225rem;
          font-weight: 500;
          opacity: 0.8;
          margin-top: 20px;
          @media (min-width: 768px) {
            // md
            font-size: 1.525rem;
          }
          @media (min-width: 1024px) {
            // lg
            font-size: 1.625rem;
          }
        }
      }
    }
  }
}
</style>
