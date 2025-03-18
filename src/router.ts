import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Main",
      redirect: { name: "Compare" },
      component: () => import("./layouts/TheDefaultLayout.vue"),
      children: [
        {
          path: "/compare",
          name: "Compare",
          component: () => import("./tasks/Compare.vue"  as any),
        },
        {
          path: "/event-loop",
          name: "EventLoop",
          component: () => import("./tasks/EventLoop.vue"),
        },
        {
          path: "/chain",
          name: "FunctionalChain",
          component: () => import("./tasks/FunctionalChain.vue"),
        },
        {
          path: "/fns",
          name: "Fns",
          component: () => import("./tasks/Functions.vue"),
        },
        {
          path: "/mapping",
          name: "Mapping",
          component: () => import("./tasks/Mapping.vue"),
        },
        {
          path: "/rest-spread",
          name: "RestSpread",
          component: () => import("./tasks/restAndSpread.vue"),
        },
        {
          path: "/unique",
          name: "Unique",
          component: () => import("./tasks/UniqueElements.vue"),
        },
        {
          path: "/slots",
          name: "ScopedSlots",
          component: () => import("./tasks/SlotsTask.vue"),
        },
        {
          path: "/lifecycles",
          name: "VueLifeCycle",
          component: () => import("./tasks/VueLifeCycle.vue"),
        },
      ],
    },
  ],
});
