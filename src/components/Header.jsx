import React, { useEffect, useRef, useState } from "react";
import "../css/header.css";

export const Header = () => {
  const [isSticky, setSticky] = useState(false);
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
  return (
    <header className="header">
      <div className={`nav__wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
        <nav class="nav sticky-inner">
          <h1
            class={`nav__heading ${isSticky ? "nav__heading--black-bg" : ""}`}
          >
            Ladislav Topoľský
          </h1>
          <ul class="nav__list">
            <li class="nav__list-item">
              <a href="#about-me" class="nav__link">
                About Me
              </a>
            </li>
            <li class="nav__list-item">
              <a href="#skills" class="nav__link">
                Skills
              </a>
            </li>
            <li class="nav__list-item">
              <a href="#" class="nav__link">
                Projects
              </a>
            </li>
            <li class="nav__list-item">
              <a href="#" class="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
