import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json"
  }
});

export default {
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
  getEvents() {
    return apiClient.get("/events");
  }
};

// localhost:2000
// localhost:2000/videos
// localhost:2000/events
// localhost:2000/images
