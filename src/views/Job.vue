<template>
  <div class="container mt-3 d-flex justify-content-center">
    <router-link
      class="event-link"
      :to="{ name: 'job-details', params: { id: event.id } }"
    >
      <div class="card event-card" style="width: 20rem;">
        <div class="card-body">
          <h3 class="card-title">{{ event.title }}</h3>
          <h4 class="card-title">{{ event.company }}</h4>
          <BaseIcon name="navigation" />
          <span>{{ event.location }} on {{ event.expireDate }}</span>
          <hr />
          <BaseIcon name="layers" />
          <span>{{ event.skills.length }} skills</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
/* styles are scoped just for this component */
.event-card {
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 16px 0 rgba(0, 0, 0, 0.19);
}

.event-link {
  color: black;
  text-decoration: none;
}
</style>
