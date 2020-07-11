import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/admin",
    component: () => import("@/views/Admin.vue"),
    children: [
      {
        name: "admin-home",
        path: "",
        component: () => import("@/views/AdminHome.vue")
      },
      {
        name: "admin-station",
        path: "stations",
        component: () => import("@/views/AdminStation.vue")
      },
      {
        name: "admin-line",
        path: "lines",
        component: () => import("@/views/AdminLine.vue")
      },
      {
        name: "admin-edge",
        path: "edges",
        component: () => import("@/views/AdminEdge.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
