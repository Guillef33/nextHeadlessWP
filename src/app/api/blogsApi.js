import axios from "axios";

export const blogsApi = axios.create({
  baseURL: "https://guilleflores2.peymi.net/wp-json/wp/v2/",
});
