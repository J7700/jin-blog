<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import ThemeController from '@/components/theme-controller/index.vue'
import MdiAbjadHebrew from '~icons/mdi/abjad-hebrew'
import IconParkSearch from '~icons/icon-park-outline/search'

import useScrollDirection from '@/hooks/useScrollDirection'

const menuList = [
  {
    title: '首页',
    icon: defineAsyncComponent(() => import('~icons/icon-park-outline/like')),
    path: '/home',
    children: []
  },
  {
    title: '时间轴',
    icon: defineAsyncComponent(() => import('~icons/icon-park-outline/alarm-clock')),
    path: '/archive',
    children: []
  },
  {
    title: '说说',
    path: '/talk',
    icon: defineAsyncComponent(() => import('~icons/icon-park-outline/comment')),
    children: [
      {
        title: '关于我xx',
        icon: defineAsyncComponent(() => import('~icons/fa6-regular/face-kiss-wink-heart')),
        path: '/more/about'
      }
    ]
  },
  {
    title: '更多',
    icon: defineAsyncComponent(() => import('~icons/icon-park-solid/align-text-right-one')),
    icon: defineAsyncComponent(() => import('~icons/icon-park-outline/align-text-right-one')),
    path: '/more',
    children: [
      {
        title: 'x关于我xxxx',
        icon: defineAsyncComponent(() => import('~icons/fa6-regular/face-kiss-wink-heart')),
        path: '/more/xxxx'
      },
      {
        title: '测试',
        icon: defineAsyncComponent(() => import('~icons/fa6-regular/face-kiss-wink-heart')),
        path: '/more/test'
      }
    ]
  }
]

const { scrollDirection } = useScrollDirection()
</script>

<template>
  <div class="header-wrap bg-base-100" :class="{ 'hide-header': scrollDirection === 'down' }">
    <div class="header-left">
      <MdiAbjadHebrew class="logo text-base-content"></MdiAbjadHebrew>
    </div>
    <div class="header-right">
      <div class="header-right-container">
        <div class="header-right-search">
          <button class="btn glass btn-circle">
            <IconParkSearch class="text-base-content" />
          </button>
        </div>
        <div class="header-right-nav">
          <div v-for="menu in menuList" :key="menu.path" class="header-right-menu">
            <div v-if="menu.children.length" :index="menu.path" class="dropdown dropdown-end">
              <div tabindex="0" role="button" class="btn glass m-1">
                <component class="menu-icon text-base-content" :is="menu.icon"></component>
                {{ menu.title }}
              </div>
              <ul tabindex="0" class="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow">
                <li v-for="subMenu in menu.children" :key="subMenu.path" :index="subMenu.path">
                  <router-link :to="subMenu.path">
                    <component class="menu-icon text-base-content" :is="subMenu.icon"></component>
                    {{ subMenu.title }}
                  </router-link>
                </li>
              </ul>
            </div>
            <div v-else :index="menu.path">
              <router-link :to="menu.path" class="btn glass m-1">
                <component class="menu-icon text-base-content" :is="menu.icon"></component>
                {{ menu.title }}
              </router-link>
            </div>
          </div>
        </div>
        <ThemeController class="theme-controller"></ThemeController>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-wrap {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 10px;
  opacity: 0.75;
  z-index: 999;
  .header-left {
    width: 20%;

    .logo {
      width: 3rem;
      height: 3rem;
      transition: all 0.3s;
    }

    .logo:hover {
      transform: rotate(180deg);
      cursor: pointer;
    }
  }

  .header-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .header-right-container {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 0.5rem;
      .header-right-search {
        button {
          margin-right: 0.25rem;
        }
      }
      .header-right-nav {
        display: flex;
        align-items: stretch;
        .header-right-menu {
          display: flex;
          align-items: stretch;
        }
      }
    }
  }
}

.hide-header {
  animation-name: hideHeader;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;

  @keyframes hideHeader {
    0% {
      transform: translateY(0);
    }

    to {
      transform: translateY(-60px);
    }
  }
}
</style>
