import { ref, onMounted, onBeforeUnmount } from "vue";

const useHeaderWheel = () => {
  const scrollDirection = ref(null); // 用于存储滚动方向的响应式引用

  const handleWheel = (event) => {
    if (event.target.scrollTop > 0) {
      scrollDirection.value = "down"; // 向下滚动
    } else {
      scrollDirection.value = "up"; // 向上滚动
    }
  };

  // 在组件挂载后添加监听器
  onMounted(() => {
    const ele = document.querySelector("body");
    ele.addEventListener("scroll", handleWheel);
  });

  // 在组件卸载前移除监听器
  onBeforeUnmount(() => {
    const ele = document.querySelector("body");
    ele.removeEventListener("scroll", handleWheel);
  });

  return {
    scrollDirection,
  };
};

export default useHeaderWheel;
