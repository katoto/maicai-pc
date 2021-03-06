import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/intro",
        name: "Intro",
        component: () =>
            import(/* webpackChunkName: "intro" */ "../views/Intro.vue")
    },
    {
        path: "/news",
        name: "news",
        component: () => import(/* webpackChunkName: "news" */ "../views/News.vue")
    },
    {
        path: "/bigHealth",
        name: "bigHealth",
        component: () =>
            import(/* webpackChunkName: "bigHealth" */ "../views/BigHealth.vue")
    },
    {
        path: "/server",
        name: "server",
        component: () =>
            import(/* webpackChunkName: "server" */ "../views/Server.vue")
    },
    {
        path: "/contentUs",
        name: "contentUs",
        component: () =>
            import(/* webpackChunkName: "contentUs" */ "../views/ContentUs.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
