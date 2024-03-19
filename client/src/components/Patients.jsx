import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import "../css/Patients.css";

function Patients() {
  return (
    <section className="patients" id="patients">
      <h2>Comentarios</h2>
      <div className="patients_cards">
        <div className="patients_card" id="coments_1">
          <div className="info_user_coments">
            <p>Este es un texto de ejemplo...</p>
          </div>
          <div className="info_user">
            <p>Jessica Ortega</p>
            <div className="info_user_img"></div>
          </div>
        </div>
        <div className="patients_card" id="coments_2">
          <div className="info_user_coments">
            <p>Este es un texto de ejemplo...</p>
          </div>
          <div className="info_user">
            <p>Jessica Ortega</p>
            <div className="info_user_img"></div>
          </div>
        </div>
        <div className="patients_card" id="coments_3">
          <div className="info_user_coments">
            <p>Este es un texto de ejemplo...</p>
          </div>
          <div className="info_user">
            <p>Jessica Ortega</p>
            <div className="info_user_img"></div>
          </div>
        </div>
        <div className="patients_card" id="coments_4">
          <div className="info_user_coments">
            <p>Este es un texto de ejemplo...</p>
          </div>
          <div className="info_user">
            <p>Jessica Ortega</p>
            <div className="info_user_img"></div>
          </div>
        </div>
        <div className="patients_card" id="coments_5">
          <div className="info_user_coments">
            <p>Este es un texto de ejemplo...</p>
          </div>
          <div className="info_user">
            <p>Jessica Ortega</p>
            <div className="info_user_img"></div>
          </div>
        </div>
      </div>
      <div className="patients_navigation">
        <FaArrowLeft className="FaArrowLeft" />
        <div className="container_pages">
          <a className="pages"></a>
          <a className="pages"></a>
          <a className="pages"></a>
          <a className="pages"></a>
          <a className="pages"></a>
        </div>
        <FaArrowRight className="FaArrowRight" />
      </div>
    </section>
  );
}

export default Patients;
