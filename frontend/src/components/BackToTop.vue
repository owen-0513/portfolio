<template>
  <transition>
    <button v-show="isVisible" class="back-to-top" @click="scrollToTop">
      <i class="fas fa-arrow-up"></i>
    </button>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 300; // 滾動超過 300px 顯示按鈕
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
