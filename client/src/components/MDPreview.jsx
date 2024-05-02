import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "../css/MDPreview.css";

const MDPreview = () => {
  const [mdFile, setMdFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/md") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMdFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setMdFile(null);
    }
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  const toggleContentInputFile = () => {
    setMdFile(null);
  };

  return (
    <div
      className={mdFile ? "create_article__md" : "create_article__md_empyt"}
    >
      <input
        type="file"
        id="fileInput"
        accept=".md"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {mdFile && (
        <embed
          src={mdFile}
          type="application/md"
          width="100%"
          height="600px"
        />
      )}
      {mdFile && (
        <button
          className="btn_archive_md_close"
          onClick={toggleContentInputFile}
        >
          <IoCloseOutline size={"20px"} />
        </button>
      )}
      {!mdFile && (
        <button className="btn_archive_md" onClick={handleClick}>
          Selecciona un archivo .MD
        </button>
      )}
    </div>
  );
};

export default MDPreview;
