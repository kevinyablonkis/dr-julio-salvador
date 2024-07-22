import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

import "../css/MDPreview.css";

const MDPreview = () => {
  const [mdFile, setMdFile] = useState(null);

  const handleFileChangeMD = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "text/markdown") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMdFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setMdFile(null);
    }
  };

  const handleClickMD = () => {
    document.getElementById("fileInput").click();
  };

  const toggleContentInputFileMD = () => {
    setMdFile(null);
  };

  return (
    <div className={mdFile ? "create_blog__md" : "create_blog__md_empyt"}>
      <input
        type="file"
        id="fileInput"
        accept=".md"
        onChange={handleFileChangeMD}
        style={{ display: "none" }}
      />
      {mdFile && (
        <div className="create_blog_div_successFile">
          <FaCheckCircle color="rgb(18, 107, 18)" size={"90px"} />
          <span>¡Archivo cargado!</span>
        </div>
      )}
      {mdFile && (
        <button
          className="btn_archive_md_close"
          onClick={toggleContentInputFileMD}
        >
          <IoCloseOutline size={"20px"} />
        </button>
      )}
      {!mdFile && (
        <button className="btn_archive_md" onClick={handleClickMD}>
          Selecciona un archivo .MD
        </button>
      )}
    </div>
  );
};

export default MDPreview;
