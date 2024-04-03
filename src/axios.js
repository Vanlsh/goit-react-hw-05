import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_API_TOKEN}`,
  },
  params: {
    language: "en-US",
  },
});

export default instance;
