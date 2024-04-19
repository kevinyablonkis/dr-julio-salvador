import { useForm } from "react-hook-form";
import { NavLink } from "../components/NavLink";
import { useAuth } from "../context/AuthContext";
import "../css/Register.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="signup">
      <div className="signup__container">
        <h1>Registro</h1>
        <form onSubmit={onSubmit} className="signup__form">
          {registerErrors.map((error, i) => (
            <div key={i} className="error_form_register_used">
              {error}
            </div>
          ))}
          <label>Usuario</label>
          <input type="text" {...register("username", { required: true })} />
          {errors.username && (
            <p className="error_form_register">Usuario es requerido</p>
          )}
          <label>Correo Eléctronico</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && (
            <p className="error_form_register">Correo es requerido</p>
          )}
          <label>Contraseña</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="error_form_register">Contraseña es requerida</p>
          )}
          <button className="button_primary" type="submit">
            Registrar
          </button>
        </form>
        <div className="signup__option_register">
          <span>¿Ya estas registrado?</span>
          <NavLink to="/iniciar-sesion">
            <span className="to_register">Iniciar Sesión</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Register;
