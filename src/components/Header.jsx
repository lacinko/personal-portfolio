import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import "../css/header.css";

export const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
    if (ref.current.getBoundingClientRect().top === 0) {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const openMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className={`nav__wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
        <nav className="nav sticky-inner">
          <h1
            className={`nav__heading ${
              isSticky ? "nav__heading--black-bg" : ""
            }`}
          >
            Ladislav Topoľský
          </h1>
          <div className="nav__btn">
            {isOpen ? (
              <MenuOpenIcon onClick={openMenu} />
            ) : (
              <MenuIcon onClick={openMenu} />
            )}
          </div>
          <ul className={isOpen ? "nav__list--open nav__list" : "nav__list"}>
            <li className="nav__list-item">
              <a href="#about-me" className="nav__link">
                About Me
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#skills" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#projects" className="nav__link">
                Projects
              </a>
            </li>
            <li className="nav__list-item nav__list-item--btn">
              <a href="#contact" className="nav__link">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
