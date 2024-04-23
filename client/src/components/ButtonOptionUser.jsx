import { useState } from "react";

import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "../components/NavLink";

import "../css/ButtonOptionUser.css";

function ButtonOptionUser() {
  const [isFlex, setIsFlex] = useState(false);
  const [isActiveOption, setIsActiveOption] = useState(false);

  const toggleStyle = () => {
    setIsFlex((prevState) => !prevState);
    setIsActiveOption((prevState) => !prevState);
  };

  return (
    <div className={isActiveOption ? "is-active" : "create_login"}>
      <span className="create_login__icon" onClick={toggleStyle}>
        <FaUserCircle />
      </span>
      <div
        className="create_login__option"
        style={{ display: isFlex ? "flex" : "none" }}
      >
        <NavLink to={"/iniciar-sesion"} onClick={toggleStyle} > Iniciar Sessión</NavLink>
        <NavLink to={"/registrarse"} onClick={toggleStyle} > Crear Cuenta</NavLink>
      </div>
    </div>
  );
}

export default ButtonOptionUser;
