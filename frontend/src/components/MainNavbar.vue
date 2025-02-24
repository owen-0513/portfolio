<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">OOOOOO</router-link>
      <button class="navbar-toggler" type="button" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ 'show': mobileMenu }">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">🏠 首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/portfolio">🖼 作品集</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">💡 關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">📧 聯絡我</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return { mobileMenu: false };
  },
  methods: {
    toggleMenu() {
      this.mobileMenu = !this.mobileMenu;
    }
  }
};
</script>
