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
          import(/* webpackChunkName: "home" */ "../pages/Home.vue"),
      },
      {
        path: "/test1",
        name: "Test1",
        component: () =>
          import(/* webpackChunkName: "test1" */ "../pages/Test1.vue"),
      },
      {
        path: "/test2",
        name: "Test2",
        component: () =>
          import(/* webpackChunkName: "test2" */ "../pages/Test2.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
