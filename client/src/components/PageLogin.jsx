import { NavLink } from "./NavLink";
import { useForm } from "react-hook-form";
import "../css/PageLogin.css";
import { useAuth } from "../context/AuthContext";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className="login">
      <div className="login__container">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit} className="login__form">
          {signinErrors.map((error, i) => (
            <div key={i} className="error_form_login_used">
              {error}
            </div>
          ))}
          <label>Correo Electronico</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && (
            <p className="error_form_login">Correo requerido</p>
          )}
          <label>Contraseña</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="error_form_login">Contraseña requerido</p>
          )}
          <button className="button_primary" type="submit">
            Abrir sesión
          </button>
        </form>
        <div className="login__option_register">
          <span>¿No tienes una cuenta?</span>
          <NavLink to="/registrarse">
            <span className="to_register">Registrate</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
