import Blog from "../models/blog.model.js";
import Article from "../models/article.model.js";

export const createBlog = async (req, res) => {
  const { title, description, name_archive } = req.body;

  const newBlog = new Blog({
    title,
    description,
    name_archive,
  });

  const savedBlog = await newBlog.save();

  res.json(savedBlog);
};

export const deleteBlog = async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!Blog) return res.status(404).json({ message: "Blog no encontrado" });

  res.json(blog);
};

export const updateBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!blog) return res.status(404).json({ message: "Árticulo no encontrado" });

  res.json(blog);
};

export const createArticle = async (req, res) => {
  const { title, description, name_archive } = req.body;

  const newArticle = new Article({
    title,
    description,
    name_archive,
  });

  const savedArticle = await newArticle.save();

  res.json(savedArticle);
};

export const deleteArticle = async (req, res) => {
  const article = await Article.findByIdAndDelete(req.params.id);
  if (!article)
    return res.status(404).json({ message: "Árticulo no encontrado" });

  res.json(article);
};

export const updateArticle = async (req, res) => {
  const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!article)
    return res.status(404).json({ message: "Árticulo no encontrado" });

  res.json(article);
};
