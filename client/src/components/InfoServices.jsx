import { NavLink } from "./NavLink";
import "../css/InfoServices.css";
import Button from "./Button";

function Services() {
  return (
    <section className="services" id="services">
      <h2>Servicios Disponibles</h2>
      <div className="services_container">
        <div className="services_cards">
          <div className="services_cards_text">
            <h3>Plan Personalizado</h3>
            <p>
              Recibe un enfoque integral para tu bienestar neurológico con un
              plan personalizado que aborda tus necesidades específicas,
              incluyendo seguimiento continuo, ajustes terapéuticos y una
              atención especializada.
            </p>
          </div>
          <NavLink to="/servicios">
            <Button valor="Explorar Precios" ancho={"200px"} />
          </NavLink>
        </div>
        <div className="services_cards">
          <div className="services_cards_text">
            <h3>Asesoría Personal</h3>
            <p>
              Obtén orientación especializada sobre problemas neurológicos a
              través de sesiones personales que te brindarán información
              detallada y recomendaciones adaptadas a tus necesidades
              específicas.
            </p>
          </div>
          <NavLink to="/servicios">
            <Button valor="Explorar Precios" ancho={"200px"} />
          </NavLink>
        </div>
        <div className="services_cards">
          <div className="services_cards_text">
            <h3>Consulta Privada</h3>
            <p>
              Accede a un servicio exclusivo con un neurólogo experto, donde
              podrás discutir de manera privada tus síntomas, recibir
              diagnósticos precisos y explorar opciones de tratamiento de manera
              detallada.
            </p>
          </div>
          <NavLink to="/servicios">
            <Button valor="Explorar Precios" ancho={"200px"} />
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Services;
