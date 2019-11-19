<template>
  <div class="container">
    <h1>Job List Page</h1>

    <form class="form-inline mt-2 justify-content-center">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search Jobs"
        v-model="search"
      />
    </form>
    <div class="wrapper">
      <Job v-for="event in filteredJobs" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script>
import Job from "../views/Job";
import JobService from "../services/JobService.js";
import searchMixin from "../mixins/searchMixin";
export default {
  components: {
    Job
  },
  data() {
    return {
      events: [],
      search: ""
    };
  },
  created() {
    JobService.getEvents()
      .then(response => {
        this.events = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  mixins: [searchMixin]
};
</script>

<style>
.wrapper {
  display: grid;
  grid-template-columns: 30% 40% 30%;
}
</style>
