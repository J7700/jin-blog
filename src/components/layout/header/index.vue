<script setup>
import { ref, onMounted, onBeforeUnmount, defineAsyncComponent } from "vue";
import ThemeController from "@/components/theme-controller/index.vue";
import MdiAbjadHebrew from "~icons/mdi/abjad-hebrew";

const menuList = [
  {
    title: "首页",
    icon: defineAsyncComponent(() => import("~icons/icon-park-solid/like/")),
    path: "/home",
    children: [],
  },
  {
    title: "时间轴",
    icon: defineAsyncComponent(() => import("~icons/icon-park-solid/alarm-clock")),
    path: "/archive",
    children: [],
  },
  {
    title: "说说",
    path: "/talk",
    icon: defineAsyncComponent(() => import("~icons/icon-park-solid/comment")),
    children: [
      {
        title: "关于我xx",
        icon: defineAsyncComponent(() => import("~icons/fa6-regular/face-kiss-wink-heart")),
        path: "/more/about",
      },
    ],
  },
  {
    title: "更多",
    icon: defineAsyncComponent(() => import("~icons/icon-park-solid/align-text-right-one")),
    path: "/more",
    children: [
      {
        title: "x关于我xxxx",
        icon: defineAsyncComponent(() => import("~icons/fa6-regular/face-kiss-wink-heart")),
        path: "/more/xxxx",
      },
      {
        title: "测试",
        icon: defineAsyncComponent(() => import("~icons/fa6-regular/face-kiss-wink-heart")),
        path: "/more/test",
      }
    ],
  },
];

// vue3监听鼠标滚动时候header-wrap添加隐藏hide-header动画

const scrollDirection = ref(null); // 用于存储滚动方向的响应式引用  

// 处理滚轮事件的方法  
const handleWheel = (event) => {
  const deltaY = event.deltaY;
  if (deltaY < 0) {
    scrollDirection.value = 'up'; // 向上滚动  
  } else if (deltaY > 0) {
    scrollDirection.value = 'down'; // 向下滚动  
  }
};

// 在组件挂载后添加监听器  
onMounted(() => {
  window.addEventListener('wheel', handleWheel);
});

// 在组件卸载前移除监听器  
onBeforeUnmount(() => {
  window.removeEventListener('wheel', handleWheel);
});
</script>

<template>
  <div class="header-wrap" :class="{'hide-header': scrollDirection === 'down'}">
    <div class="header-left">
      <MdiAbjadHebrew class="logo text-primary"></MdiAbjadHebrew>
    </div>
    <div class="header-right">
      <div class="flex justify-end px-2">
        <div v-for="menu in menuList" :key="menu.path" class="flex items-stretch">
          <div v-if="menu.children.length" :index="menu.path" class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn glass m-1">
              <component class="menu-icon text-primary" :is="menu.icon"></component>
              {{ menu.title }}
            </div>
            <ul tabindex="0" class="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow">
              <li v-for="subMenu in menu.children" :key="subMenu.path" :index="subMenu.path">
                <router-link :to="subMenu.path">
                  <component class="menu-icon text-primary" :is="subMenu.icon"></component>
                  {{ subMenu.title }}
                </router-link>
              </li>
            </ul>
          </div>
          <div v-else :index="menu.path">
            <router-link :to="menu.path" class="btn glass m-1">
              <component class="menu-icon text-primary" :is="menu.icon"></component>
              {{ menu.title }}
            </router-link>
          </div>
        </div>
        <ThemeController class="theme-controller" </ThemeController>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-wrap {
  display: flex;
  align-items: center;

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
  }
}

.hide-header {
  animation-name: hideHeader;
  animation-duration: .8s;
  animation-fill-mode: forwards;

  @keyframes hideHeader {
    0% {
      transform: translateY(0)
    }

    to {
      transform: translateY(-60px)
    }
  }
}
</style>
