import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [blurHeader, setBlurHeader] = useState(false);

  let showMenuStyle = showMenu ? "show-menu" : "";
  let scrollHeaderStyle = blurHeader ? "blur-header" : "";

  const handleShowMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY >= 50 ? setBlurHeader(true) : setBlurHeader(false);
    };
    window.addEventListener("scroll", scrollHandler);
    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header className={`header ${scrollHeaderStyle}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <i className="ri-ancient-gate-line"></i>
          <span>Temple</span>
        </a>

        <div className={`nav__menu ${showMenuStyle}`} id="nav-menu">
          <ul className="nav__list">
            <li>
              <a href="#" className="nav__link" onClick={handleShowMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav__link" onClick={handleShowMenu}>
                Location
              </a>
            </li>
            <li>
              <a href="#" className="nav__link" onClick={handleShowMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav__link" onClick={handleShowMenu}>
                Explore
              </a>
            </li>
            <li>
              <a href="#" className="nav__link" onClick={handleShowMenu}>
                Contact
              </a>
            </li>
          </ul>

          {/* Close button */}
          <div className="nav__close" id="nav-close" onClick={handleShowMenu}>
            <i className="ri-close-large-line"></i>
          </div>
        </div>

        {/* Toggle button */}
        <div className="nav__toggle" id="nav-toggle" onClick={handleShowMenu}>
          <i className="ri-apps-2-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
