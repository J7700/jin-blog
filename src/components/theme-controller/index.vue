<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useThemeStore } from '@/store/themeStore'

import ChevronDownCircle from '~icons/icon-park-outline/down-c/'

const { changeThemeTo, getCurrentThemeIndex } = useThemeStore()

const themeIndex = ref(0)

const mode = useColorMode({
  attribute: 'data-theme',
  modes: {
    light: 'light',
    dark: 'dark',
    cupcake: 'cupcake',
    bumblebee: 'bumblebee',
    emerald: 'emerald',
    corporate: 'corporate',
    synthwave: 'synthwave',
    retro: 'retro',
    cyberpunk: 'cyberpunk',
    valentine: 'valentine',
    halloween: 'halloween',
    garden: 'garden',
    forest: 'forest',
    aqua: 'aqua',
    lofi: 'lofi',
    pastel: 'pastel',
    fantasy: 'fantasy',
    wireframe: 'wireframe',
    black: 'black',
    luxury: 'luxury',
    dracula: 'dracula',
    cmyk: 'cmyk',
    autumn: 'autumn',
    business: 'business',
    acid: 'acid',
    lemonade: 'lemonade',
    night: 'night',
    winter: 'winter'
  }
})

const themeList = ref([
  {
    name: '💖 jintheme',
    id: 'jintheme'
  },
  {
    name: '🌝 light',
    id: 'light'
  },
  {
    name: '🌚 dark',
    id: 'dark'
  },
  {
    name: '🧁 cupcake',
    id: 'cupcake'
  },
  {
    name: '🐝 bumblebee',
    id: 'bumblebee'
  },
  {
    name: '✳️ Emerald',
    id: 'emerald'
  },
  {
    name: '🏢 Corporate',
    id: 'corporate'
  },
  {
    name: '🌃 synthwave',
    id: 'synthwave'
  },
  {
    name: '👴 retro',
    id: 'retro'
  },
  {
    name: '🤖 cyberpunk',
    id: 'cyberpunk'
  },
  {
    name: '🌸 valentine',
    id: 'valentine'
  },
  {
    name: '🎃 halloween',
    id: 'halloween'
  },
  {
    name: '🌷 garden',
    id: 'garden'
  },
  {
    name: '🌲 forest',
    id: 'forest'
  },
  {
    name: '🐟 aqua',
    id: 'aqua'
  },
  {
    name: '👓 lofi',
    id: 'lofi'
  },
  {
    name: '🖍 pastel',
    id: 'pastel'
  },
  {
    name: '🧚‍♀️ fantasy',
    id: 'fantasy'
  },
  {
    name: '📝 Wireframe',
    id: 'wireframe'
  },
  {
    name: '🏴 black',
    id: 'black'
  },
  {
    name: '💎 luxury',
    id: 'luxury'
  },
  {
    name: '🧛‍♂️ dracula',
    id: 'dracula'
  },
  {
    name: '🖨 CMYK',
    id: 'cmyk'
  },
  {
    name: '🍁 Autumn',
    id: 'autumn'
  },
  {
    name: '💼 Business',
    id: 'business'
  },
  {
    name: '💊 Acid',
    id: 'acid'
  },
  {
    name: '🍋 Lemonade',
    id: 'lemonade'
  },
  {
    name: '🌙 Night',
    id: 'night'
  },
  {
    name: '❄️ Winter',
    id: 'winter'
  }
])

function _changeTheme(event, index, themeName) {
  const isSameTheme = themeIndex.value === themeName
  changeThemeTo(index, themeName)
  if (document.startViewTransition === undefined) {
    throw new Error('document.startViewTransition is undefined, please update your browser to the latest version or use a modern browser.')
  }
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

  const transition = document.startViewTransition()
  transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
    document.documentElement.animate(
      {
        clipPath: isSameTheme ? [...clipPath].reverse() : clipPath
      },
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: isSameTheme ? '::view-transition-old(root)' : '::view-transition-new(root)'
      }
    )
  })
  themeIndex.value = index
}

const changeTheme = useDebounceFn(_changeTheme, 600)

onMounted(() => {
  themeIndex.value = getCurrentThemeIndex()
})
</script>

<template>
  <div class="dropdown dropdown-bottom dropdown-end">
    <div tabindex="0" role="button" class="btn glass m-1">
      Theme
      <ChevronDownCircle class="text-base-content" />
    </div>
    <ul tabindex="0" class="dropdown-content menu flex-row bg-base-100 rounded-box z-[1] w-[16rem] p-2 shadow mt-[10px] max-h-[300px]">
      <li class="w-full" v-for="(theme, index) in themeList" @click="changeTheme($event, index, theme.id)">
        <div :data-theme="theme.id" class="flex justify-between bg-transparent active:!bg-transparent">
          <input
            type="radio"
            name="theme-dropdown"
            :aria-label="theme.name"
            :value="theme.id"
            :checked="index == themeIndex"
            class="theme-controller btn btn-sm w-3/4 justify-normal"
          />
          <div class="flex shrink-0 flex-wrap gap-1">
            <div class="h-[1.25rem] w-2 rounded bg-primary" />
            <div class="h-[1.25rem] w-2 rounded bg-secondary" />
            <div class="h-[1.25rem] w-2 rounded bg-accent" />
            <div class="h-[1.25rem] w-2 rounded bg-neutral" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown-content {
  overflow-y: auto;
  overflow-x: hidden;
}

.dropdown-content::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}

.dropdown-content::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #f7f4ed;
}

.dropdown-content::-webkit-scrollbar-thumb {
  background: #e0cbcb;
  border-radius: 100vh;
  border: 3px solid #f6f7ed;
}

.dropdown-content::-webkit-scrollbar-thumb:hover {
  background: #c0a0b9;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 999;
}

::view-transition-new(root) {
  z-index: 1;
}
</style>
