<template>
  <div class="container">
    <div class="jumbotron mt-3">
      <div>
        <span>@{{ event.expireTime }} on {{ event.expireDate }}</span>
        <h1 class="display-5">{{ event.title }}</h1>
        <h5>Opened by {{ event.company }}</h5>
        <h5>Category: {{ event.category }}</h5>
      </div>

      <hr class="my-4" />
      <BaseIcon name="map"></BaseIcon>
      <span class="lead">{{ event.location }}</span>
      <h3>Job Details</h3>
      <p class="lead">{{ event.description }}</p>
      <h3>Core Skills</h3>
      <ul class="list-group">
        <li v-for="skill in event.skills" :key="skill.id" class="list-item">
          <i>{{ skill.name }}</i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import JobService from "@/services/JobService.js";

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      event: {},
      getNumber() {
        console.log(this.id);
      }
    };
  },
  // created lifecycle hook
  created() {
    JobService.getEvent(this.id)
      .then(response => {
        this.event = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.list-group {
  list-style: none;
}
.list-item {
  padding: 6px 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
