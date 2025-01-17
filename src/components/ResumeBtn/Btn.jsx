import { FaFileDownload } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Btn.css";

const Btn = () => {
  const { t } = useTranslation();

  return (
    <a
      dir="ltr"
      href="assets/pdf/MohamadTahaKasirResume.pdf"
      download="MohamadTahaKasirCV.pdf"
      className="resumeBtn"
    >
      <span>{t("resumeBtn")}</span>
      <FaFileDownload fontSize={16} />
    </a>
  );
};

export default Btn;
