<template>
  <div class="homepage">
    <!-- 🔹 上方區塊 -->
    <section class="hero">
      <div class="container text-center">
        <h1 class="text-glow fw-bold">🚀 歡迎來到我們的作品網站</h1>
        <p class="hero-text">
          我們是 <span class="highlight">全端工程師</span>，擅長
          <span class="highlight"
            >Java, Spring Boot, Python, Vue.js, Angular</span
          >。
        </p>

        <!-- 兩個主要按鈕 -->
        <div class="mt-4">
          <router-link
            to="/portfolio"
            class="btn btn-primary btn-lg rounded-pill btn-glow"
          >
            🖼 查看作品
          </router-link>
          <router-link
            to="/contact"
            class="btn btn-outline-primary btn-lg rounded-pill btn-glow"
          >
            📩 聯絡我
          </router-link>
        </div>
      </div>
    </section>

    <!-- 🔹 作品預覽 -->
    <section class="portfolio-preview container mt-5">
      <h2 class="text-glow text-center">✨ 我們的精選作品 ✨</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
        <div v-for="(item, index) in portfolioPreview" :key="index" class="col">
          <div class="card h-100 shadow-glow p-3">
            <img
              :src="item.image"
              class="card-img-top rounded image-glow"
              :alt="item.title"
            />
            <div class="card-body text-center">
              <h5 class="card-title text-white">{{ item.title }}</h5>
              <p class="card-text text-white">{{ item.description }}</p>
              <a
                :href="item.url"
                target="_blank"
                class="btn btn-primary w-100 rounded-pill btn-glow"
              >
                🔗 查看作品
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 🔹 查看更多作品 -->
      <div class="text-center mt-4">
        <router-link
          to="/portfolio"
          class="btn btn-outline-primary btn-lg rounded-pill btn-glow"
        >
          🔍 瀏覽全部作品
        </router-link>
      </div>
    </section>
    <!-- ✅ 加入回到頂部按鈕 -->
    <BackToTop />
  </div>
</template>

<script>
import BackToTop from "@/components/BackToTop.vue"; // 引入回到頂部組件

export default {
  components: {
    BackToTop, // 註冊組件
  },
  data() {
    return {
      portfolioPreview: [
        {
          title: "作品展示",
          image: "/images/personal-portfolio.jpg",
          description: "作品集網站",
          url: "https://owentseng.netlify.app/",
        },
        {
          title: "企業形象網站",
          image: "/images/corporate.jpg",
          description: "企業形象設計",
          url: "https://aiseetech.netlify.app/",
        },
        {
          title: "AI 問答機器人",
          image: "/images/ai-bot.jpg",
          description: "AI chatbot",
          url: "https://docgensite.netlify.app/",
        },
      ],
    };
  },
};
</script>
