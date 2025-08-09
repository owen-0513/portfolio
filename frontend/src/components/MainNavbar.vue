<template>
  <nav
    :class="['navbar', { scrolled: isScrolled }]"
    class="navbar navbar-expand-lg navbar-dark fixed-top"
  >
    <div class="container">
      <router-link class="navbar-brand fw-bold text-glow" to="/"
        >OOOOOO</router-link
      >
      <button class="navbar-toggler" type="button" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ show: mobileMenu }">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link highlight" to="/">🏠 首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link highlight" to="/portfolio"
              >🖼 作品集</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link highlight" to="/about"
              >💡 關於我</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link highlight" to="/contact"
              >📧 聯絡我</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: false,
      isScrolled: false,
    };
  },
  methods: {
    toggleMenu() {
      this.mobileMenu = !this.mobileMenu;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50; // 滾動超過 50px 改變 Navbar 樣式
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
