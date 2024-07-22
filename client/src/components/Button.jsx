import "../css/Button.css";

function Button({ valor, ancho }) {
  const estiloBoton = {
    width: ancho,
  };

  return (
    <button className="button_primary" style={estiloBoton}>
      {valor}
    </button>
  );
}

export default Button;
