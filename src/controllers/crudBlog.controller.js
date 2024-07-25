import Blog from "../models/blog.model.js";

export const getBlog = async (req, res) => {
  const getBlog = await Blog.find();
  res.json(getBlog);
};

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
