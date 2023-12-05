import ContactoVue from "src/pages/Contacto.vue";
import IndexPageVue from "src/pages/IndexPage.vue";
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: IndexPageVue },
      { path: "/contacto", component: ContactoVue },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
