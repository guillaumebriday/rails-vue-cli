import Vue from "vue";
import Router from "vue-router";
import PostsIndex from "./views/Posts/Index";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "posts-index",
      component: PostsIndex
    },
    {
      path: "/posts/new",
      name: "posts-new",
      component: () => import("./views/Posts/New.vue")
    },
    {
      path: "/posts/:id/edit",
      name: "posts-edit",
      component: () => import("./views/Posts/Edit.vue")
    }
  ]
});
