import { Route, Routes } from "react-router-dom";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Port from "./components/Port";
import DateDoctor from "./components/DateDoctor";
import InfoServices from "./components/InfoServices";
import Services from "./components/Services";
import Login from "./components/Login";
import Register from "./components/Register";
import Patients from "./components/Patients";
import NavegationInPage from "./components/NavegationInPage";
import Blog from "./components/Blog";
import Article from "./components/Article";

import { AuthProvider } from "./context/AuthContext";

import "./App.css";

const Home = () => {
  return (
    <>
      <Port />
      <DateDoctor />
      <InfoServices />
      <Patients />
      <NavegationInPage />
    </>
  );
};

const PageBlog = () => {
  return <Blog />;
};

const PageArticle = () => {
  return <Article />;
};

const PageServices = () => {
  return <Services />;
};

const PageRegister = () => {
  return <Register />;
};

const PageLogin = () => {
  return <Login />;
};

function App() {
  return (
    <AuthProvider>
      <>
        <div className="container_menu_main">
          <Menu />
          <div className="content_of_page">
            <main className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="blog" element={<PageBlog />} />
                <Route path="articulos" element={<PageArticle />} />
                <Route path="servicios" element={<PageServices />} />
                <Route path="registrarse" element={<PageRegister />} />
                <Route path="iniciar-sesion" element={<PageLogin />} />
              </Routes>
            </main>
          </div>
        </div>
        <Footer />
      </>
    </AuthProvider>
  );
}

export default App;
