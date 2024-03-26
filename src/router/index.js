import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/practice-area",
			name: "practice",

			component: () => import("../views/PracticeAreas.vue"),
		},

		{
			path: "/attorneys",
			name: "attorneys",

			component: () => import("../views/Attorneys.vue"),
		},
		{
			path: "/contact-us",
			name: "contact",

			component: () => import("../views/ContactUs.vue"),
		},
	],
});

export default router;
