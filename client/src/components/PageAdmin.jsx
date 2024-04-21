import { useState } from "react";
import CardInfoOfAdmin from "../components/CardInfoOfAdmin";
import { CiFilter } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import "../css/PageAdmin.css";

function PageAdmin() {
  const [isFlex, setIsFlex] = useState(false);

  const toggleStyle = () => {
    setIsFlex((prevState) => !prevState);
  };

  return (
    <section className="admin">
      <div className="admin__header">
        <h1>Admin</h1>
        <div className="admin__header__new">
          <button className="admin__header__new__blog">Crear Blog</button>
          <button className="admin__header__new__article">
            Crear Árticulo
          </button>
        </div>
      </div>
      <div className="admin__content">
        <div className="admin__content__dashboard">
          <h2>Titulo</h2>
          <div className="admin__content__dashboard__option">
            <span>Conjunto de valores</span>
            <span>Relaciones especificas</span>
            <span>Medicamentos perfectos</span>
          </div>
        </div>
        <div className="admin__content__blogs_and_articles">
          <div className="admin__content__blogs_and_articles__search">
            <div className="blogs_and_articles__search__container">
              <p>Buscar</p>
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
