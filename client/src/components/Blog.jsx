import Button from "../components/Button";

// ICONS
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

import "../css/Blog.css";

function Blog() {
  return (
    <section className="blog">
      <h1>Blog</h1>
      <div className="blog__last_blog">
        <div className="blog__last_blog__info_text">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <div className="blog__last_blog__info_text__temas">
            <span>Tema 1</span>
            <span>Tema 2</span>
            <span>Tema 3</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum hic
          ratione impedit voluptas autem voluptates ex placeat explicabo sint
          optio earum aperiam inventore, labore, sunt neque temporibus minima
          delectus aspernatur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Provident, harum exercitationem deleniti cum, rerum
          animi error dicta at in eos, ipsum consectetur totam asperiores
          tenetur pariatur. Esse sed exercitationem magnam. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Voluptas ipsa ex blanditiis
          corporis quia officiis tempore numquam, commodi sapiente
          necessitatibus eos quasi ab est vel alias ut. Distinctio, modi itaque!
        </p>
        <Button valor="Leer" ancho={"150px"} />
        <div className="blog__last_blog__details_blog">
          <span>
            <FaRegHeart size={"18px"} />
            1.5K
          </span>
          <span>
            <MdOutlineRemoveRedEye size={"20px"} />
            5K
          </span>
          <span>
            <FaRegComment size={"18px"} />
            800
          </span>
        </div>
      </div>
      <section className="blog__last_blogs">
        <h2>Últimos Blogs</h2>
        <div className="blog__last_blogs__cards">
          <h3>Enero</h3>
          <div className="blog__last_blogs__cards__card">
            <span>Miercoles 15</span>
            <div className="blog__last_blogs__cards__card__info">
              <div className="blog__last_blogs__cards__card__info__text">
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, consequatur. Doloremque.
                </h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo itaque hic, non totam veritatis, adipisci commodi
                  alias laudantium velit cumque ducimus quis, excepturi eius
                  enim? Praesentium at veniam aspernatur officiis?
                </p>
              </div>
              <div className="blog__last_blogs__cards__card__info__">
                <div className="blog__last_blogs__cards__card__info__details_blog">
                  <span>
                    <FaRegHeart size={"16px"} />
                    1.5K
                  </span>
                  <span>
                    <MdOutlineRemoveRedEye size={"20px"} />
                    5K
                  </span>
                  <span>
                    <FaRegComment size={"16px"} />
                    800
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

export default Blog;
