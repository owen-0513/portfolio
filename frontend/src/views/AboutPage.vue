<template>
  <div class="about-page container py-5">
    <!-- 🔹 標題 -->
    <h1 class="text-glow text-center fw-bold">💡 關於我</h1>
    <p class="about-text text-center">這是一個關於我的網頁作品。</p>

    <!-- 🔹 個人簡介 -->
    <div class="row justify-content-center mt-5">
      <div class="col-md-8 text-center">
        <img
          src="/images/profile.jpg"
          alt="我們的照片"
          class="profile-image image-glow"
        />
        <h2 class="mt-3">
          👨‍💻 我是 <span class="highlight">Owen</span>
        </h2>
        <p class="about-text">
          我們是一名熱愛開發的全端工程師，擅長
          <span class="highlight">Java,Sprint boot,Python,Vue.js,Angular</span
          >、<span class="highlight">JavaScript</span>。
          我喜歡挑戰不同的專案，讓使用者擁有最好的體驗！
        </p>
      </div>
    </div>

    <!-- 🔹 技能標籤 -->
    <div class="text-center mt-4">
      <h3 class="text-glow">🚀 我的技能</h3>
      <div class="d-flex flex-wrap justify-content-center gap-3 mt-3">
        <span class="skill-badge">Java</span>
        <span class="skill-badge">Sprint boot</span>
        <span class="skill-badge">Python</span>
        <span class="skill-badge">Vue.js</span>
        <span class="skill-badge">Angular</span>
        <span class="skill-badge">JavaScript</span>
        <span class="skill-badge">HTML</span>
        <span class="skill-badge">CSS / SCSS</span>
        <span class="skill-badge">Bootstrap</span>
        <span class="skill-badge">Tailwind CSS</span>
        <span class="skill-badge">UI/UX 設計</span>
        <span class="skill-badge">OracleDB</span>
        <span class="skill-badge">MSSQLDB</span>
        <span class="skill-badge">MYSQLDB</span>
        <span class="skill-badge">PSDB</span>
      </div>
    </div>

    <!-- 🔹 主要按鈕 -->
    <div class="text-center mt-5">
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
  name: "AboutPage",
};
</script>
