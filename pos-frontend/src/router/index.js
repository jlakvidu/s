import { createRouter, createWebHistory } from "vue-router";
import Signup from "@/components/Signup.vue";
import Signin from "@/components/Signin.vue";
import Dashboard from "@/components/Dashboard.vue";
import SalesDashboard from "@/components/SalesDashboard.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "signin",
            component: Signin
        },
        {
            path: "/signin",
            name: "signin-page",
            component: Signin
        },
        {
            path: "/signup",
            name: "signup",
            component: Signup
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard
        },
        {
            path: "/sales-dashboard",
            name: "sales-dashboard",
            component: SalesDashboard
        }
    ]
});

export default router;