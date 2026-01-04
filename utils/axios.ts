import axios from "axios";

const api = axios.create({
  // Use your environment variable or the hardcoded string
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://buddyride-server-ouc4.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
