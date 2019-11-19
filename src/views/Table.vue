<template>
  <div id="jobs">
    <div class="container">
      <form class="form-inline mt-2">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search Jobs"
          v-model="search"
        />
      </form>
      <table class="table table-striped table-light mt-3">
        <thead id="special">
          <tr>
            <th scope="col">Job Id</th>
            <th scope="col">companyName</th>
            <th scope="col">location</th>
            <th scope="col">position</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="job in filteredJobs" :key="job.id">
            <td>{{ job.jobId }}</td>
            <td>{{ job.companyName }}</td>
            <td>{{ job.location }}</td>
            <td>{{ job.position }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import data from "../../data";
export default {
  name: "list",
  data() {
    return {
      jobs: data,
      search: ""
    };
  },
  computed: {
    filteredJobs: function() {
      return this.jobs.filter(job => {
        return (
          job.location.toLowerCase().match(this.search.toLowerCase()) ||
          job.companyName.toLowerCase().match(this.search.toLowerCase()) ||
          job.position.toLowerCase().match(this.search.toLowerCase())
        );
      });
    }
  }
};
</script>

<style></style>
