import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // 確保這行存在，並指向剛剛新增的 router
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import './assets/style.css' // 如果有全域 CSS，可以保留這行

const app = createApp(App)
app.use(router)  // 啟用 Vue Router
app.mount('#app')
