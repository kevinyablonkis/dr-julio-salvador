import "../css/Patients.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <section className="patients" id="patients">
        <h2>Comentarios</h2>
        <div className="patients_cards">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="patients_card">
              <div className="info_user_coments">
                <p>Ejemplo de un comentario de un User</p>
              </div>
              <div className="info_user">
                <p>Jessica Ortega</p>
                <div className="info_user_img"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="patients_card">
              <div className="info_user_coments">
                <p>Ejemplo de un comentario de un User</p>
              </div>
              <div className="info_user">
                <p>Jessica Ortega</p>
                <div className="info_user_img"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="patients_card">
              <div className="info_user_coments">
                <p>Ejemplo de un comentario de un User</p>
              </div>
              <div className="info_user">
                <p>Jessica Ortega</p>
                <div className="info_user_img"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="patients_card">
              <div className="info_user_coments">
                <p>Ejemplo de un comentario de un User</p>
              </div>
              <div className="info_user">
                <p>Jessica Ortega</p>
                <div className="info_user_img"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="patients_card">
              <div className="info_user_coments">
                <p>Ejemplo de un comentario de un User</p>
              </div>
              <div className="info_user">
                <p>Jessica Ortega</p>
                <div className="info_user_img"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="patients_card">
              <div className="info_user_coments">
                <p>Ejemplo de un comentario de un User</p>
              </div>
              <div className="info_user">
                <p>Jessica Ortega</p>
                <div className="info_user_img"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="patients_card">
              <div className="info_user_coments">
                <p>Ejemplo de un comentario de un User</p>
              </div>
              <div className="info_user">
                <p>Jessica Ortega</p>
                <div className="info_user_img"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="patients_card">
              <div className="info_user_coments">
                <p>Ejemplo de un comentario de un User</p>
              </div>
              <div className="info_user">
                <p>Jessica Ortega</p>
                <div className="info_user_img"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="patients_card">
              <div className="info_user_coments">
                <p>Ejemplo de un comentario de un User</p>
              </div>
              <div className="info_user">
                <p>Jessica Ortega</p>
                <div className="info_user_img"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
