import { RiArticleFill } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";

import { IconContext } from "react-icons";
import ButtonOptionUser from "../components/ButtonOptionUser";
import ButtonUser from "../components/ButtonUser";

import { NavLink } from "../components/NavLink";
import { useAuth } from "../context/AuthContext";

import "../css/Menu.css";

function Menu() {
  const { isAuthenticated } = useAuth();

  return (
    <header className="header">
      <IconContext.Provider value={{ size: "28px" }}>
        <nav className="header_nav">
          <span>
            <img src="./assets/img/doctor.png" alt="img" />
          </span>
          <ul className="header_nav_list">
            <li>
              {isAuthenticated && (
                <li>
                  <NavLink
                    to="/admin"
                    className={({ isActive }) => {
                      return isActive ? "is-active" : undefined;
                    }}
                  >
                    <LuLayoutDashboard />
                    Admin
                  </NavLink>
                </li>
              )}
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? "is-active" : undefined;
                }}
              >
                <AiFillHome />
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => {
                  return isActive ? "is-active" : undefined;
                }}
              >
                <LuPencilLine />
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/articulos"
                className={({ isActive }) => {
                  return isActive ? "is-active" : undefined;
                }}
              >
                <RiArticleFill />
                Artículos
              </NavLink>
            </li>
          </ul>
        </nav>
        {isAuthenticated ? <ButtonUser /> : <ButtonOptionUser />}
      </IconContext.Provider>
    </header>
  );
}

export default Menu;
