import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from './layouts/MainPage.vue'
// import App from './App.vue'
// import HelloWorld from './components/HelloWorld.vue'

const routes = [
  { path: '/', component: MainPage },
  // Добавьте другие маршруты по мере необходимости
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})