import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import CardInfoOfAdmin from "../components/CardInfoOfAdmin";

function AdminHeader() {
  const [isFlex, setIsFlex] = useState(false);

  const toggleStyle = () => {
    setIsFlex((prevState) => !prevState);
  };
  return (
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
  );
}

export default AdminHeader;
