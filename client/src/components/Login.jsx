import { NavLink } from "../components/NavLink";
// import { Button } from "../components/Button";
import "../css/Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <h1>Iniciar Sesión</h1>
        <form className="login__form" action="" method="post">
          <label>Gmail</label>
          <input type="text" />
          <label>Contraseña</label>
          <input type="password" />
          <button className="button_primary" type="submit">
            Registrar
          </button>
        </form>
        <div className="login__option_register">
          <span>¿No tienes un cuenta?</span>
          <NavLink to="/registrarse">
            <span className="to_register">Registrate</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
