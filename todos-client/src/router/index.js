import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";
// import Example from "@/components/Example";
import TodoPage from "@/components/TodoPage";
import Main from "@/components/Main";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "TodoPage",
      component: TodoPage
    },
    {
      path: "/dev",
      name: "main",
      component: Main
    }
  ]
});
