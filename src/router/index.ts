import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeLayout from "@/layouts/home/Index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomeLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "about" */ "../pages/Home.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
