import { FaFileDownload } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Btn.css";

const Btn = () => {
  const { t } = useTranslation();

  return (
    <a
      dir="ltr"
      href="assets/pdf/MohamadTahaKasirResume.pdf"
      download="MohamadTahaKasirCV"
      className="resumeBtn"
    >
      {t("resumeBtn")}
      <FaFileDownload fontSize={16} />
    </a>
  );
};

export default Btn;
