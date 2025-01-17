import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineTranslate } from "react-icons/hi";
import { TiArrowSortedDown } from "react-icons/ti";
import "./Btn.css";

const Btn = ({ dir, setShowSidebar }) => {
  const { t, i18n } = useTranslation();
  const [isHoverd, setIsHoverd] = useState(false);

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "ar" ? "en-US" : "ar";
    dir(newLanguage === "ar" ? "rtl" : "ltr");
    i18n.changeLanguage(newLanguage);
    setShowSidebar(false);
  };

  return (
    <div className="langBtnContainer">
      <span dir="ltr" className={isHoverd ? "spanHoverd" : ""}>
        <TiArrowSortedDown fontSize={15} />
        {t("changeTo")}
      </span>
      <button
        onMouseOver={() => setIsHoverd(true)}
        onMouseLeave={() => setIsHoverd(false)}
        className="langBtn"
        onClick={() => toggleLanguage()}
      >
        <HiOutlineTranslate fontSize={16} />
        <span>{i18n.language === "ar" ? "ar" : "en"}</span>
      </button>
    </div>
  );
};

export default Btn;
