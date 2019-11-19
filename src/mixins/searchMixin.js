export default {
  computed: {
    filteredJobs: function() {
      return this.events.filter(item => {
        return (
          item.title.toLowerCase().match(this.search.toLowerCase()) ||
          item.location.toLowerCase().match(this.search.toLowerCase()) ||
          item.company.toLowerCase().match(this.search.toLowerCase())
        );
      });
    }
  }
};
