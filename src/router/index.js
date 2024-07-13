import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import DashboardContainer from "@/components/Containers/DashboardContainer.vue";
import DashboardIndex from "@/views/dashboard/DashboardIndex.vue";
import Projects from "@/views/dashboard/Projects.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },

    {
      path: "/dashboard",
      component: DashboardContainer,
      children: [
        {
          path: "",
          name: "dashboard",
          component: DashboardIndex,
        },
        {
          path: "projects",
          name: "projects",
          component: Projects,
        },
      ],
    },

    {
      path: "/register",
      name: "register",
      component: Register,
    },
    // {
    //   path: "/about",
    //   name: "about",

    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
