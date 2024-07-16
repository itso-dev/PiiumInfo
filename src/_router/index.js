import { createRouter, createWebHistory } from 'vue-router'
import CommonRoutes from "./common.routes.js";

const routes = [
    ...CommonRoutes,
    { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})
export default router;

router.beforeEach(async (to) => {
    document.title = to.meta.title;

});

router.afterEach((to, from, failure) => {
    document.title = to.meta.title
});