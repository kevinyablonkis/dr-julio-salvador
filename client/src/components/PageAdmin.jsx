import "../css/PageAdmin.css";

function PageAdmin() {
  return (
    <section className="admin">
      <div className="admin__header">
        <h1>Admin</h1>
        <div className="admin__header__new">
          <div className="admin__header__new__blog">Blog</div>
          <div className="admin__header__new__article">Articulo</div>
        </div>
      </div>
      <div className="admin__content">
        <div className="admin__content__dashboard">
          <div className="admin__content__dashboard__option">
            <p>option 1</p>
            <p>option 2</p>
            <p>option 3</p>
          </div>
        </div>
        <div className="admin__content__blogs_and_articles">
          <div className="admin__content__blogs_and_articles__search">
            <p>buscar</p>
          </div>
          <div className="admin__content__blogs_and_articles__container">
            <div className="blogs_and_articles__container__element">
              <div className="blogs_and_articles__container__element__img"></div>
              <div className="blogs_and_articles__container__element__dates">
                <p>Description</p>
                <div className="blogs_and_articles__container__element__dates__date">
                  <p>Date 1</p>
                  <p>Date 2</p>
                  <p>Date 3</p>
                  <p>Date 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageAdmin;
