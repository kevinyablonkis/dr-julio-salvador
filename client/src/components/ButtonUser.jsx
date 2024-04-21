import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
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
    <div className={isActive ? " is-active" : "button_user"}>
      <span className="button_user__icon" onClick={toggleStyle}>
        <FaUser />
      </span>
      <div
        className="button_user__option"
        style={{ display: isFlex ? "flex" : "none" }}
      >
        <div className="button_user__option__date">
          <p className="button_user__option__username">{user.username}</p>
          <p className="button_user__option__email">{user.email}</p>
        </div>
        <form onSubmit={onSubmit}>
          <button
            className="button_user__option__btn"
            type="submit"
            onClick={toggleStyle}
          >
            Cerrar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default ButtonUser;
