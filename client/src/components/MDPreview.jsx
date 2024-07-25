import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

import "../css/MDPreview.css";

const MDPreview = () => {
  const [mdFile, setMdFile] = useState(null);

  const handleFileChangeMD = async (e) => {
    const file = e.target.files[0];
    console.log(file);
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

  return (
    <div className={mdFile ? "create_blog__md" : "create_blog__md_empyt"}>
      <input
        type="file"
        id="fileInputMD"
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
