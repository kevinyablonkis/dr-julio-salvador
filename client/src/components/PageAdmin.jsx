import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
// import PDFPreview from "./PDFPreview";
// import MDPreview from "./MDPreview";
import AdminContent from "../components/AdminContent";
import Button from "../components/Button";
import { usePost } from "../context/PostContext";
import "../css/PageAdmin.css";
import "../css/PDFPreview.css";
import "../css/MDPreview.css";

function PageAdmin() {
  const [isActiveBlog, setIsActiveBlog] = useState(false);
  const [isActiveArticle, setIsActiveArticle] = useState(false);

  const toggleStyleBlog = () => {
    setIsActiveBlog((prevState) => !prevState);
  };

  const toggleStyleArticle = () => {
    setIsActiveArticle((prevState) => !prevState);
  };

  const {
    register: register1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();

  const { PostBlog, PostArticle, errors: errorForm } = usePost();

  const onSubmitBlog = handleSubmit1((data) => {
    console.log(data);
    PostBlog(data);
  });

  const onSubmitArticle = handleSubmit2((data) => {
    console.log(data);
    PostArticle(data);
  });

  const [mdFile, setMdFile] = useState(null);

  const handleFileChangeMD = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === "text/markdown") {
      const reader = await new FileReader();
      reader.onloadend = () => {
        setMdFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setMdFile(null);
    }
  };

  const handleClickMD = () => {
    document.getElementById("fileInputMD").click();
  };

  const toggleContentInputFileMD = () => {
    setMdFile(null);
    document.getElementById("fileInputMD").value = "";
  };

  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChangePDF = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const reader = await new FileReader();
      reader.onloadend = () => {
        setPdfFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPdfFile(null);
    }
  };

  const handleClickPDF = () => {
    document.getElementById("fileInputPDF").click();
  };

  const toggleContentInputFilePDF = () => {
    setPdfFile(null);
    document.getElementById("fileInputPDF").value = "";
  };

  return (
    <section className="admin">
      <div
        className="create_blog__container"
        style={{ display: isActiveBlog ? "flex" : "none" }}
      >
        <form className="create_blog" onSubmit={onSubmitBlog}>
          {/* {errorForm.map((error, i) => (
            <div key={i} className="error_form_login_used">
              {error}
            </div>
          ))} */}
          <span
            className="create_blog__btn_close"
            onClick={() => toggleStyleBlog()}
          >
            <IoCloseOutline fontSize={"20px"} />
          </span>
          {/* <MDPreview /> */}
          <div className={mdFile ? "create_blog__md" : "create_blog__md_empyt"}>
            <input
              type="file"
              {...register1("name_archive", { required: true })}
              id="fileInputMD"
              accept=".md"
              onChange={handleFileChangeMD}
              style={{ display: "none" }}
            />
            {errors1.name_archive && (
              <p
                style={{
                  margin: "5px 0",
                }}
                className="error_form_login"
              >
                Archivo requerido
              </p>
            )}
            {mdFile && (
              <div className="create_blog_div_successFile">
                <FaCheckCircle color="rgb(18, 107, 18)" size={"90px"} />
                <span>¡Archivo cargado!</span>
              </div>
            )}
            {mdFile && (
              <span
                className="btn_archive_md_close"
                onClick={toggleContentInputFileMD}
              >
                <IoCloseOutline size={"20px"} />
              </span>
            )}
            {!mdFile && (
              <span className="btn_archive_md" onClick={handleClickMD}>
                Selecciona un archivo .MD
              </span>
            )}
          </div>
          <div className="create_blog__info">
            <h3>Datos del Blog</h3>
            <div className="create_blog__info__container">
              <label htmlFor="title_blog">Titulo del Blog</label>
              <input
                className="blog__title__ip"
                id="title_blog"
                {...register1("title", { required: true })}
                type="text"
              />
              {errors1.title && (
                <p className="error_form_login">Título requerido</p>
              )}
              <label htmlFor="description_blog">Descripción:</label>
              <textarea
                className="blog__description__ip"
                id="description_blog"
                {...register1("description", { required: true })}
                type="text"
              />
              {errors1.description && (
                <p className="error_form_login">Descripción requerida</p>
              )}
            </div>
            <Button valor="Publicar" ancho="250px" type="submit" />
          </div>
        </form>
      </div>
      <div
        className="create_article__container"
        style={{ display: isActiveArticle ? "flex" : "none" }}
      >
        <form className="create_article" onSubmit={onSubmitArticle}>
          {/* {errorForm.map((error, i) => (
            <div key={i} className="error_form_login_used">
              {error}
            </div>
          ))} */}
          <span
            className="create_article__btn_close"
            onClick={() => toggleStyleArticle()}
          >
            <IoCloseOutline fontSize={"20px"} />
          </span>
          {/* <PDFPreview /> */}
          <div
            className={
              pdfFile ? "create_article__pdf" : "create_article__pdf_empyt"
            }
          >
            <input
              type="file"
              {...register2("name_archive", { required: true })}
              id="fileInputPDF"
              accept=".pdf"
              onChange={handleFileChangePDF}
              style={{ display: "none" }}
            />
            {errors2.name_archive && (
              <p
                style={{
                  margin: "5px 0",
                }}
                className="error_form_login"
              >
                Archivo requerido
              </p>
            )}
            {pdfFile && (
              <div className="create_article_div_successFile">
                <FaCheckCircle color="rgb(18, 107, 18)" size={"90px"} />
                <span>¡Archivo cargado!</span>
              </div>
            )}
            {pdfFile && (
              <span
                className="btn_archive_pdf_close"
                onClick={toggleContentInputFilePDF}
              >
                <IoCloseOutline size={"20px"} />
              </span>
            )}
            {!pdfFile && (
              <span className="btn_archive_pdf" onClick={handleClickPDF}>
                Selecciona un archivo .PDF
              </span>
            )}
          </div>
          <div className="create_article__info">
            <h3>Datos del Artículo</h3>
            <div className="create_article__info__container">
              <label htmlFor="title_article">Titulo del Artículo</label>
              <input
                className="article__title__ip"
                id="title_article"
                {...register2("title", { required: true })}
                type="text"
              />
              {errors2.title && (
                <p className="error_form_login">Título requerido</p>
              )}
              <label htmlFor="description_article">Descripción:</label>
              <textarea
                className="article__description__ip"
                id="description_article"
                {...register2("description", { required: true })}
                type="text"
              />
              {errors2.description && (
                <p className="error_form_login">Descripción requerida</p>
              )}
            </div>
            <Button valor="Publicar" ancho="250px" type="submit" />
          </div>
        </form>
      </div>
      <div className="admin__header">
        <h1>Admin</h1>
        <div className="admin__header__new">
          <button
            className="admin__header__new__blog"
            onClick={toggleStyleBlog}
          >
            Crear Blog
          </button>
          <button
            className="admin__header__new__article"
            onClick={toggleStyleArticle}
          >
            Crear Artículo
          </button>
        </div>
      </div>
      <AdminContent />
    </section>
  );
}

export default PageAdmin;
