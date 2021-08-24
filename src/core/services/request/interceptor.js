import "./bootstrap";
// import router from "@/core/router";
// import Jwt from "@/core/services/jwt";

// Create axios instance
const service = window.axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 50000, // Request timeout
  headers: {
    Accept: "application/json"
  }
});