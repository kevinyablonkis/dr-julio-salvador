import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { NavLink } from "../components/NavLink";
import { FaUser } from "react-icons/fa";

import "../css/ButtonUser.css";

function ButtonUser() {
  const { user, logout } = useAuth();

  const { handleSubmit } = useForm();

  const [isFlex, setIsFlex] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleStyle = () => {
    setIsFlex((prevState) => !prevState);
    setIsActive((prevState) => !prevState);
  };

  const onSubmit = handleSubmit(async (values) => {
    logout(values);
  });

  return (
    <div className={isActive ? " is-active" : "create_login"}>
      <span className="create_login__icon" onClick={toggleStyle}>
        <FaUser />
      </span>
      <div
        className="create_login__option"
        style={{ display: isFlex ? "flex" : "none" }}
      >
        <NavLink to={"/perfil"} onClick={toggleStyle}>
          {" "}
          Perfil
        </NavLink>
        <form onSubmit={onSubmit}>
          <button className="" type="submit" onClick={toggleStyle}>
            Cerrar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default ButtonUser;
