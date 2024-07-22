import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

import "../css/PDFPreview.css";

const PdfPreview = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChangePDF = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "aplication/pdf") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPdfFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPdfFile(null);
    }
  };

  const handleClickPDF = () => {
    document.getElementById("fileInput").click();
  };

  const toggleContentInputFilePDF = () => {
    setPdfFile(null);
  };

  return (
    <div
      className={pdfFile ? "create_article__pdf" : "create_article__pdf_empyt"}
    >
      <input
        type="file"
        id="fileInput"
        accept=".pdf"
        onChange={handleFileChangePDF}
        style={{ display: "none" }}
      />
      {pdfFile && (
        <div className="create_article_div_successFile">
          <FaCheckCircle color="rgb(18, 107, 18)" size={"90px"} />
          <span>¡Archivo cargado!</span>
        </div>
      )}
      {pdfFile && (
        <button
          className="btn_archive_pdf_close"
          onClick={toggleContentInputFilePDF}
        >
          <IoCloseOutline size={"20px"} />
        </button>
      )}
      {!pdfFile && (
        <button className="btn_archive_pdf" onClick={handleClickPDF}>
          Selecciona un archivo .PDF
        </button>
      )}
    </div>
  );
};

export default PdfPreview;
