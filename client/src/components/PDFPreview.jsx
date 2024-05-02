import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "../css/PDFPreview.css";

const PdfPreview = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPdfFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPdfFile(null);
    }
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  const toggleContentInputFile = () => {
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
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {pdfFile && (
        <embed
          src={pdfFile}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      )}
      {pdfFile && (
        <button
          className="btn_archive_pdf_close"
          onClick={toggleContentInputFile}
        >
          <IoCloseOutline size={"20px"} />
        </button>
      )}
      {!pdfFile && (
        <button className="btn_archive_pdf" onClick={handleClick}>
          Selecciona un archivo PDF
        </button>
      )}
    </div>
  );
};

export default PdfPreview;
