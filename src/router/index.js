import {
  createRouter,
  createWebHistory
} from 'vue-router'
import SideBar from './../components/SideBar.vue'
import LoginPage from './../components/LoginPage.vue'

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [{
      path: '/',
      component: LoginPage
    },
    {
      path: '/home',
      component: SideBar
    },
    {
      path: '/login',
      component: LoginPage
    }
  ]
});

export default router;
