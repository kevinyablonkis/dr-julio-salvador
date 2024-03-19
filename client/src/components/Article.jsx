import Button from "../components/Button";
import ButtonDownload from "../components/ButtonDownload";

// ICONS
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

import "../css/Article.css";

function Article() {
  return (
    <section className="article">
      <h1>Árticulos</h1>
      <div className="article__last_article">
        <div className="article__last_article__img">
          <ButtonDownload value={<MdOutlineFileDownload size={"18px"} />} />
        </div>
        <div className="article__last_article__container">
          <div className="article__last_article__info_text">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum hic
              ratione impedit voluptas autem voluptates ex placeat explicabo
              sint optio earum aperiam inventore, labore, sunt neque temporibus
              minima delectus aspernatur. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Provident, harum exercitationem deleniti cum,
              rerum animi error dicta at in eos, ipsum consectetur totam
              asperiores tenetur pariatur. Esse sed exercitationem magnam.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              ipsa ex blanditiis corporis quia officiis tempore numquam, commodi
              sapiente necessitatibus eos quasi ab est vel alias ut. Distinctio,
              modi itaque!
            </p>
          </div>
          <div className="article__last_article__info_text__btn_details">
            <div className="article__last_article__details_article">
              <span>
                <FaRegHeart size={"18px"} />
                1.5K
              </span>
              <span>
                <MdOutlineFileDownload size={"20px"} />
                5K
              </span>
            </div>
            <Button valor="Leer" ancho={"150px"} />
          </div>
        </div>
      </div>
      <section className="article__last_articles">
        <h2>Últimos Árticulos</h2>
        <div className="article__last_articles__cards">
          <h3>Enero</h3>
          <div className="article__last_articles__cards__card">
            <span>Miercoles 15</span>
            <div className="article__last_articles__cards__card__info">
              <div className="article__last_articles__cards__card__info__text">
                <div className="article__last_article__img">
                  <ButtonDownload
                    value={<MdOutlineFileDownload size={"18px"} />}
                  />
                </div>
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, consequatur. Doloremque.
                </h3>
              </div>
              <div className="article__last_articles__cards__card__info__">
                <div className="article__last_articles__cards__card__info__details_article">
                  <span>
                    <FaRegHeart size={"16px"} />
                    700
                  </span>
                  <span>
                    <MdOutlineFileDownload size={"20px"} />
                    1K
                  </span>
                </div>
                <Button valor={<FaArrowRightLong />} ancho={"50px"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Article;
