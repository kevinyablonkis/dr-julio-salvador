import { RiArticleFill } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";

import { IconContext } from "react-icons";
import ButtonOptionUser from "../components/ButtonOptionUser";

import { NavLink } from "../components/NavLink";

import "../css/Menu.css";

function Menu() {
  return (
    <header className="header">
      <IconContext.Provider value={{ size: "28px" }}>
        <nav className="header_nav">
          <span>
            <img src="./assets/img/doctor.png" alt="img" />
          </span>
          <ul className="header_nav_list">
            <li>
              <NavLink to="/">
                <AiFillHome />
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">
                <LuPencilLine />
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/articulos">
                <RiArticleFill />
                Artículos
              </NavLink>
            </li>
          </ul>
        </nav>
        <ButtonOptionUser />
      </IconContext.Provider>
    </header>
  );
}

export default Menu;
