import Article from "../models/article.model.js";

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
