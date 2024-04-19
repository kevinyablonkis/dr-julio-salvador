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
              <ListGreen content="Servicio Tal" />
            </div>
            <div>
              <ListGreen content="Servicio Tal" />
            </div>
            <div>
              <ListGreen content="Servicio Tal" />
            </div>
            <div>
              <ListRed content="Servicio Tal" />
            </div>
            <div>
              <ListRed content="Servicio Tal" />
            </div>
            <div>
              <ListRed content="Servicio Tal" />
            </div>
            <div>
              <ListRed content="Servicio Tal" />
            </div>
            <div>
              <ListRed content="Servicio Tal" />
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
              <ListGreen content="Servicio Tal" />
            </div>
            <div>
              <ListGreen content="Servicio Tal" />
            </div>
            <div>
              <ListGreen content="Servicio Tal" />
            </div>
            <div>
              <ListGreen content="Servicio Tal" />
            </div>
            <div>
              <ListGreen content="Servicio Tal" />
            </div>
            <div>
              <ListRed content="Servicio Tal" />
            </div>
            <div>
              <ListRed content="Servicio Tal" />
            </div>
            <div>
              <ListRed content="Servicio Tal" />
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
              <ListGreen content="Servicio Tal" />
            </div>
            <div>
              <ListGreen content="Servicio Tal" />
            </div>
            <div>
              <ListGreen content="Servicio Tal" />
            </div>
            <div>
              <ListGreen content="Servicio Tal" />
            </div>
            <div>
              <ListGreen content="Servicio Tal" />
            </div>
            <div>
              <ListGreen content="Servicio Tal" />
            </div>
            <div>
              <ListGreen content="Servicio Tal" />
            </div>
            <div>
              <ListGreen content="Servicio Tal" />
            </div>
          </ul>
          <Button valor="Contratar" ancho={"200px"} />
        </div>
      </div>
    </section>
  );
}

export default Services;
