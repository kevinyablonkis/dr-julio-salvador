import ListGreen from "./ListGreen";
import ListRed from "./ListRed";
import Button from "./Button";
import "../css/PageServices.css";

function Services() {
  return (
    <section className="services">
      <h1>Servicios</h1>
      <div className="services__container">
        <div className="services__container__service">
          <div className="services__container__name_price">
            <p>Plan Personalizado</p>
            <span>$100-150</span>
          </div>
          <ul className="services__container__service__list">
            <div>
              <ListGreen content="Asesoría inicial" />
            </div>
            <div>
              <ListGreen content="Evaluación de necesidades" />
            </div>
            <div>
              <ListGreen content="Plan de acción" />
            </div>
            <div>
              <ListRed content="Seguimiento regular" />
            </div>
            <div>
              <ListRed content="Planificación detallada" />
            </div>
            <div>
              <ListRed content="Soluciones a medida" />
            </div>
            <div>
              <ListRed content="Atención personalizada" />
            </div>
            <div>
              <ListRed content="Recursos premium" />
            </div>
          </ul>
          <Button valor="Contratar" ancho={"200px"} />
        </div>
        <div className="services__container__service">
          <div className="services__container__name_price">
            <p>Asesoría Personal</p>
            <span>$500-850</span>
          </div>
          <ul className="services__container__service__list">
            <div>
              <ListGreen content="Asesoría inicial" />
            </div>
            <div>
              <ListGreen content="Evaluación de necesidades" />
            </div>
            <div>
              <ListGreen content="Plan de acción" />
            </div>
            <div>
              <ListGreen content="Seguimiento regular" />
            </div>
            <div>
              <ListGreen content="Planificación detallada" />
            </div>
            <div>
              <ListRed content="Soluciones a medida" />
            </div>
            <div>
              <ListRed content="Atención personalizada" />
            </div>
            <div>
              <ListRed content="Recursos premium" />
            </div>
          </ul>
          <Button valor="Contratar" ancho={"200px"} />
        </div>
        <div className="services__container__service">
          <div className="services__container__name_price">
            <p>Consulta Privada</p>
            <span>$1200-1500</span>
          </div>
          <ul className="services__container__service__list">
            <div>
              <ListGreen content="Asesoría inicial" />
            </div>
            <div>
              <ListGreen content="Evaluación de necesidades" />
            </div>
            <div>
              <ListGreen content="Plan de acción" />
            </div>
            <div>
              <ListGreen content="Seguimiento regular" />
            </div>
            <div>
              <ListGreen content="Planificación detallada" />
            </div>
            <div>
              <ListGreen content="Soluciones a medida" />
            </div>
            <div>
              <ListGreen content="Atención personalizada" />
            </div>
            <div>
              <ListGreen content="Recursos premium" />
            </div>
          </ul>
          <Button valor="Contratar" ancho={"200px"} />
        </div>
      </div>
    </section>
  );
}

export default Services;
