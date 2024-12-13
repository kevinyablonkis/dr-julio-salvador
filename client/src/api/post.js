import axios from "./axios";

export const createPostBlog = (data) => {
  axios.post("/blog", data);
};

export const createPostArticle = (data) => {
  axios.post("/article", data);
};
