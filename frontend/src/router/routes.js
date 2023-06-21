export const routes = [
  {
    path: "",
    name: "index",
    component: () => import("@/views/ViewHome.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/views/ViewLogin.vue"),
      },
    ],
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/ViewCart.vue"),
  },
  {
    path: "/user",
    name: "user",
    redirect: "/user/orders",
    component: () => import("@/views/ViewUser.vue"),
    children: [
      {
        path: "orders",
        name: "orders",
        component: () => import("@/views/ViewOrders.vue"),
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("@/views/ViewProfile.vue"),
      },
    ],
  },
];
