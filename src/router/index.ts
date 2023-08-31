import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 路由配置
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/Home/index.vue'),
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: () => import('../views/Home/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router