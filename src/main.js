import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes/"

import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";

import 'bootstrap/dist/css/bootstrap.css'

import './assets/fontawesome-free-6.0.0-beta3-web/css/all.css'
import './assets/fontawesome-free-6.0.0-beta3-web/css/fontawesome.css'

import './assets/css/root.css'

createApp(App)
.use(router)
.use(Toast)
.mount('#app')
