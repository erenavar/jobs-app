import Vue from "vue";
import Router from "vue-router";
import JobList from "./views/JobList.vue";
import JobDetails from "./views/JobDetails.vue";
import Home from "./views/Home.vue";
import Table from "./views/Table";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/jobs/:id",
      name: "job-details",
      component: JobDetails,
      props: true
    },
    {
      path: "/jobs",
      name: "job-list",
      component: JobList
    },
    {
      path: "/list",
      name: "list",
      component: Table
    }
  ]
});
