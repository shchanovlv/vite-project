import { createRouter, createWebHistory } from "vue-router";
    import DataTableCrudDemo from "./DataTableCrudDemo.vue"

    export const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: "/", component: DataTableCrudDemo }]
});