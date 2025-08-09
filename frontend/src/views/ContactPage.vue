<template>
  <div class="contact-page container py-5">
    <!-- 🔹 標題 -->
    <h1 class="text-glow text-center fw-bold">📩 聯絡我</h1>
    <p class="contact-text text-center">
      如果你對我的作品有興趣，歡迎聯絡我！
    </p>

    <!-- 🔹 聯絡資訊 -->
    <div class="row justify-content-center mt-5">
      <div class="col-md-8 text-center">
        <p class="contact-info">
          📧 電子郵件：
          <a href="mailto:as05130502@gmail.com" class="contact-link"
            >as05130502@gmail.com</a
          >
        </p>
        <p class="contact-info">
          🌐 GitHub：
          <a href="https://github.com/owen-0513" class="contact-link"
            >https://github.com/owen-0513</a
          >
        </p>
      </div>
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
  name: "ContactPage",
};
</script>
