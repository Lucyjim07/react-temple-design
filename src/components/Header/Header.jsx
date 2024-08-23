import "./Header.css";

const Header = () => {
  return (
    <header className="header blur-header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <i className="ri-ancient-gate-line"></i>
          <span>Temple</span>
        </a>

        <div className="nav__menu show-menu" id="nav-menu">
          <ul className="nav__list">
            <li>
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Location
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Explore
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Contact
              </a>
            </li>
          </ul>

          {/* Close button */}
          <div className="nav__close" id="nav-close">
            <i className="ri-close-large-line"></i>
          </div>
        </div>

        {/* Toggle button */}
        <div className="nav__toggle" id="nav-toggle">
          <i className="ri-apps-2-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// TODO: Crear funcionalidad para mostrar y quitar el menú en tamaño pequeño (video 7:40)
// TODO: Crear funcionalidad para que cuando se hace click en cualquiern item del menu, el menú se quite (video 8:05)
// TODO: Crear funcionalidad para que cuando se haga scroll en la pantalla, el header se convierta en blur (video 21:12)
