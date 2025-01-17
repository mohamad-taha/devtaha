import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import ProfileImg from "/assets/imgs/myPhoto.jpg";
import { useTranslation } from "react-i18next";
import "./Hero.css";

const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="mt">
      <div className="container">
        <div className="hero">
          <div className="heroContent">
            <div className="heroHeader">
              <span>{t("hi")}</span>
              <h1
                style={
                  i18n.language === "ar"
                    ? {
                        borderLeft: "0.15em solid #f9fafb",
                        borderRight: "none",
                      }
                    : {}
                }
              >
                {t("myName")}
              </h1>
            </div>
            <p>{t("myCareer")}</p>
            <div className="heroFooter">
              <a target="_blank" href="https://github.com/mohamad-taha">
                <FiGithub fontSize={25} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mohamdtahakasir/"
              >
                <CiLinkedin fontSize={25} />
              </a>
            </div>
          </div>
          <div className="heroBg">
            <img
              style={i18n.language === "ar" ? { right: "-40px" } : {}}
              src={ProfileImg}
              alt="taha's photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
