import { Route, Routes } from "react-router-dom";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Port from "./components/Port";
import DateDoctor from "./components/DateDoctor";
import Services from "./components/Services";
import Patients from "./components/Patients";
import NavegationInPage from "./components/NavegationInPage";
import Blog from "./components/Blog";
import Article from "./components/Article";

import "./App.css";

const Home = () => {
  return (
    <>
      <Port />
      <DateDoctor />
      <Services />
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

function App() {
  return (
    <>
      <div className="container_menu_main">
        <Menu />
        <div className="content_of_page">
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="blog" element={<PageBlog />} />
              <Route path="articulos" element={<PageArticle />} />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
