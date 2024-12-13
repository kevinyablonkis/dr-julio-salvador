import { Route, Routes } from "react-router-dom";

import Menu from "./components/Menu";
import NavegationInPage from "./components/NavegationInPage";
import Footer from "./components/Footer";

import Port from "./components/Port";
import DateDoctor from "./components/DateDoctor";
import Patients from "./components/Patients";
import InfoServices from "./components/InfoServices";

import PageServices from "./components/PageServices";
import PageRegister from "./components/PageRegister";
import PageLogin from "./components/PageLogin";
import PageBlog from "./components/PageBlog";
import PageArticle from "./components/PageArticle";
import PageAdmin from "./components/PageAdmin";

import ProtectedRoute from "./ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";
import { PostProvider } from "./context/PostContext";

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

function App() {
  return (
    <AuthProvider>
      <PostProvider>
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

                {/* <Route element={<ProtectedRoute />}> */}
                <Route path="admin" element={<PageAdmin />} />
                {/* </Route> */}
              </Routes>
            </main>
          </div>
        </div>
        <Footer />
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
