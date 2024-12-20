import "../css/Button.css";

function Button({ valor, ancho, type }) {
  const estiloBoton = {
    width: ancho,
  };

  const tipoBoton = type ? "submit" : "none";

  return (
    <button className="button_primary" style={estiloBoton} type={tipoBoton}>
      {valor}
    </button>
  );
}

export default Button;
