<template>
  <div class="container-lg py-5">
    <h1 class="text-glow fw-bold text-center mb-4">📂 網頁設計作品集</h1>

    <!-- ✅ 篩選按鈕 + 搜尋框 -->
    <div class="d-flex flex-wrap justify-content-center gap-3 mb-4">
      <!-- ✅ 篩選按鈕組 -->
      <div class="btn-group gap-2">
        <button @click="filterCategory('all')" 
          :class="['btn', 'rounded-pill', selectedCategory === 'all' ? 'btn-warning' : 'btn-primary']">🏷 所有類型
        </button>
        <button @click="filterCategory('custom')" 
          :class="['btn', 'rounded-pill', selectedCategory === 'custom' ? 'btn-warning' : 'btn-primary']">🛠 客製型
        </button>
        <button @click="filterCategory('template')" 
          :class="['btn', 'rounded-pill', selectedCategory === 'template' ? 'btn-warning' : 'btn-primary']">📄 套版型
        </button>
      </div>

      <!-- ✅ 搜尋框 -->
      <div class="input-group w-auto">
        <input type="text" v-model="searchQuery" class="form-control form-control-lg search-box rounded-pill" placeholder="🔍 輸入作品關鍵字">
        <button @click="searchProjects" class="btn btn-primary btn-lg rounded-pill">搜尋</button>
      </div>
    </div>

    <!-- ✅ 作品展示區 -->
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div v-for="(item, index) in filteredProjects" :key="index" class="col">
        <div class="card h-100 shadow-glow p-3">
          <img :src="item.image" class="card-img-top rounded image-glow" :alt="item.title" style="height: 180px; object-fit: cover;">
          <div class="card-body text-center">
            <h5 class="card-title fw-bold">{{ item.title }}</h5>
            <p class="card-text text-muted">{{ item.description }}</p>

            <!-- ✅ 多個 URL -->
            <div v-if="item.urls.length > 1" class="d-flex flex-column gap-2 mt-3">
              <select v-model="selectedUrls[item.title]" class="form-select rounded-pill neon-dropdown">
                <option v-for="(url, i) in item.urls" :key="i" :value="url.link">
                  {{ url.name }}
                </option>
              </select>
              <button @click="openSelectedUrl(item.title)" class="btn btn-outline-primary w-100 rounded-pill text-white btn-glow">
                🔗 前往
              </button>
            </div>

            <!-- ✅ 單個 URL -->
            <a v-else :href="item.urls[0].link" target="_blank" class="btn btn-primary w-100 mt-3 rounded-pill btn-glow">
              🔗 查看作品
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: 'all',
      searchQuery: '',
      selectedUrls: {},
      portfolioItems: [
        {
          title: "作品展示",
          category: "template",
          image: "/images/personal-portfolio.jpg",
          description: "作品集網站",
          urls: [
            { name: "主要作品", link: "https://owentseng.netlify.app/" },
            { name: "加密貨幣分析", link: "https://cryptoanalysisc.netlify.app/" },
            { name: "其他作品", link: "https://page.netlify.app/" }
          ]
        },
        {
          title: "企業形象網站",
          category: "template",
          image: "/images/corporate.jpg",
          description: "企業形象設計",
          urls: [
            { name: "官方網站", link: "https://onepageowenchris.netlify.app/" }
          ]
        },
        {
          title: "AI 問答機器人",
          category: "custom",
          image: "/images/ai-bot.jpg",
          description: "AI chatbot",
          urls: [
            { name: "AI Bot", link: "https://docgensite.netlify.app/" }
          ]
        }
      ]
    };
  },
  computed: {
    filteredProjects() {
      return this.portfolioItems
        .filter(item => this.selectedCategory === 'all' || item.category === this.selectedCategory)
        .filter(item => item.title.includes(this.searchQuery) || item.description.includes(this.searchQuery));
    }
  },
  methods: {
    filterCategory(category) {
      this.selectedCategory = category;
    },
    searchProjects() {
      // Vue 會自動更新 computed 屬性
    },
    openSelectedUrl(title) {
      const url = this.selectedUrls[title];
      if (url) {
        window.open(url, "_blank");
      }
    }
  }
}
</script>
