import { useState } from "react";
import PDFPreview from "./PDFPreview";
import { IoCloseOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import Button from "../components/Button";
import CardInfoOfAdmin from "../components/CardInfoOfAdmin";
import "../css/PageAdmin.css";

function PageAdmin() {
  const [isFlex, setIsFlex] = useState(false);
  const [isActiveBlog, setIsActiveBlog] = useState(false);
  const [isActiveArticle, setIsActiveArticle] = useState(false);

  const toggleStyle = () => {
    setIsFlex((prevState) => !prevState);
  };

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
        <article className="create_blog">
          <button
            className="create_blog__btn_close"
            onClick={() => toggleStyleBlog()}
          >
            <IoCloseOutline fontSize={"20px"} />
          </button>
          <div className="create_blog__pdf"></div>
          <form className="create_blog__info">
            <h3>Datos del Blog</h3>
            <div className="create_blog__info__container">
              <label htmlFor="">Titulo del Blog</label>
              <input className="blog__title__ip" type="text" />
              <label htmlFor="">Descripción:</label>
              <textarea className="blog__description__ip" type="text" />
            </div>
            <Button valor="Publicar" ancho="250px" />
          </form>
        </article>
      </div>

      <div
        className="create_article__container"
        style={{ display: isActiveArticle ? "flex" : "none" }}
      >
        <article className="create_article">
          <button
            className="create_article__btn_close"
            onClick={() => toggleStyleArticle()}
          >
            <IoCloseOutline fontSize={"20px"} />
          </button>
          <PDFPreview />
          <form className="create_article__info">
            <h3>Datos del Árticulo</h3>
            <div className="create_article__info__container">
              <label htmlFor="">Titulo del Árticulo</label>
              <input className="article__title__ip" type="text" />
              <label htmlFor="">Descripción:</label>
              <textarea className="article__description__ip" type="text" />
            </div>
            <Button valor="Publicar" ancho="250px" />
          </form>
        </article>
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
      <div className="admin__content">
        <div className="admin__content__dashboard">
          <h2>Titulo</h2>
          <div className="admin__content__dashboard__option">
            <button>Conjunto de valores</button>
            <button>Relaciones especificas</button>
            <button>Medicamentos perfectos</button>
          </div>
        </div>
        <div className="admin__content__blogs_and_articles">
          <div className="admin__content__blogs_and_articles__search">
            <div className="blogs_and_articles__search__container">
              <input type="text" placeholder="Buscar" />
              <span className="search__container__icon">
                <IoSearch size="20px" />
              </span>
            </div>
            <button onClick={toggleStyle}>
              <CiFilter size="25px" />
              Filtros
            </button>
            <div
              className="admin__content__blogs_and_articles__container_filter"
              style={{ display: isFlex ? "flex" : "none" }}
            >
              <span>Vistos</span>
              <span>Amados</span>
              <span>Compartidos</span>
              <span>Comentados</span>
            </div>
          </div>
          <div className="admin__content__blogs_and_articles__container">
            <CardInfoOfAdmin />
            <CardInfoOfAdmin />
            <CardInfoOfAdmin />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageAdmin;
