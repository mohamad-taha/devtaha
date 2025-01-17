import { useEffect, useState } from "react";
import Links from "./../Links/Links";
import DownloadResume from "./../ResumeBtn/Btn";
import { FaArrowAltCircleUp } from "react-icons/fa";
import Logo from "/assets/imgs/DevTaha.png";
import "./Navbar.css";

const Navbar = ({ btn, LanguageBtn }) => {
  const [windowScrolled, setWindowScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 0) {
        setWindowScrolled(true);
      } else {
        setWindowScrolled(false);
      }
    };
  });

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      <nav
        dir="ltr"
        id="home"
        className={windowScrolled ? "navbarScrolled" : ""}
      >
        <a href="">
          <img src={Logo} alt="logo" />
        </a>
        <div className="navActions">
          <Links />
          {LanguageBtn}
          <DownloadResume />
        </div>
        {btn}
      </nav>

      <button
        onClick={() => goTop()}
        className={`${windowScrolled ? "goTop" : ""} goTopHidden`}
      >
        <FaArrowAltCircleUp fontSize={20} />
      </button>
    </div>
  );
};
export default Navbar;
