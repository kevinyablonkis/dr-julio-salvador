import Blog from "../models/blog.model.js";

export const getBlog = async (req, res) => {
  try {
    const getBlog = await Blog.find();
    res.json(getBlog);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los blogs" });
  }
};

export const createBlog = async (req, res) => {
  console.log(req.body);
  const { title, description, name_archive } = req.body;
  try {
    const newBlog = new Blog({
      title,
      description,
      name_archive,
    });

    const savedBlog = await newBlog.save();
    res.json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el blog" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog no encontrado" });

    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el blog" });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!blog)
      return res.status(404).json({ message: "Árticulo no encontrado" });

    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el blog" });
  }
};
