import "../css/NavegationInPage.css";

function NavegationInPage() {
  return (
    <div className="navegation_in_page">
      <nav className="navegation_in_page_nav">
        <ul className="navegation_in_page_nav_list">
          <li>
            <a href="#port"></a>
          </li>
          <li>
            <a href="#dateDoctor"></a>
          </li>
          <li>
            <a href="#services"></a>
          </li>
          <li>
            <a href="#patients"></a>
          </li>
          <li>
            <a className="link_to_footer" href="#footer"></a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavegationInPage;
