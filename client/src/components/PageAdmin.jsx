import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import PDFPreview from "./PDFPreview";
import MDPreview from "./MDPreview";
import AdminContent from "../components/AdminContent";
import Button from "../components/Button";
import "../css/PageAdmin.css";

function PageAdmin() {
  const [isActiveBlog, setIsActiveBlog] = useState(false);
  const [isActiveArticle, setIsActiveArticle] = useState(false);

  const toggleStyleBlog = () => {
    setIsActiveBlog((prevState) => !prevState);
  };

  const toggleStyleArticle = () => {
    setIsActiveArticle((prevState) => !prevState);
  };

  return (
    <section className="admin">
      <div
        className="create_blog__container"
        style={{ display: isActiveBlog ? "flex" : "none" }}
      >
        <form className="create_blog">
          <span
            className="create_blog__btn_close"
            onClick={() => toggleStyleBlog()}
          >
            <IoCloseOutline fontSize={"20px"} />
          </span>
          <MDPreview />
          <div className="create_blog__info">
            <h3>Datos del Blog</h3>
            <div className="create_blog__info__container">
              <label htmlFor="title_blog">Titulo del Blog</label>
              <input
                className="blog__title__ip"
                id="title_blog"
                name="title"
                type="text"
              />
              <label htmlFor="description_blog">Descripción:</label>
              <textarea
                className="blog__description__ip"
                id="description_blog"
                name="description"
                type="text"
              />
            </div>
            <Button valor="Publicar" ancho="250px" type="submit" />
          </div>
        </form>
      </div>
      <div
        className="create_article__container"
        style={{ display: isActiveArticle ? "flex" : "none" }}
      >
        <form className="create_article">
          <span
            className="create_article__btn_close"
            onClick={() => toggleStyleArticle()}
          >
            <IoCloseOutline fontSize={"20px"} />
          </span>
          <PDFPreview />
          <div className="create_article__info">
            <h3>Datos del Árticulo</h3>
            <div className="create_article__info__container">
              <label htmlFor="title_article">Titulo del Árticulo</label>
              <input
                className="article__title__ip"
                id="title_article"
                name="title"
                type="text"
              />
              <label htmlFor="description_article">Descripción:</label>
              <textarea
                className="article__description__ip"
                id="description_article"
                name="description"
                type="text"
              />
            </div>
            <Button valor="Publicar" ancho="250px" type="submit" />
          </div>
        </form>
      </div>
      <div className="admin__header">
        <h1>Admin</h1>
        <div className="admin__header__new">
          <button
            className="admin__header__new__blog"
            onClick={toggleStyleBlog}
          >
            Crear Blog
          </button>
          <button
            className="admin__header__new__article"
            onClick={toggleStyleArticle}
          >
            Crear Árticulo
          </button>
        </div>
      </div>
      <AdminContent />
    </section>
  );
}

export default PageAdmin;
