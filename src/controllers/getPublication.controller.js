import Article from "../models/article.model.js";
import Blog from "../models/blog.model.js";

export const getBlog = async (req, res) => {
  const getBlog = await Blog.find();
  res.json(getBlog);
};

export const getArticle = async (req, res) => {
  const getArticle = await Article.find();
  res.json(getArticle);
};
