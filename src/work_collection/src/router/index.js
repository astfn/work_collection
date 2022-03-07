import { createRouter, createWebHashHistory } from "vue-router";

const WorkCollection = () => import("pages/work-collection/WorkCollection");
const Profile = () => import("pages/profile/Profile");
const Theme = () => import("pages/theme/Theme");

const routes = [
  {
    path: "/",
    redirect: "/workCollection",
  },
  {
    path: "/workCollection",
    component: WorkCollection,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/theme",
    component: Theme,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
