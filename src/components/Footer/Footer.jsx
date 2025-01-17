import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer>
        <p>
          {t("footerParagraph")}
          <span>{t("myFullName")}</span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
