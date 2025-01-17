import { useTranslation } from "react-i18next";
import "./About.css";
import illustrationWorking from "/assets/imgs/illustration-working.svg";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="mt">
      <div className="container">
        <div className="about ">
          <h2 className="sectionTitle">{t("aboutMe")}</h2>
          <div className="aboutContainer">
            <div>
              <div className="aboutContent">
                <h3>{t("curiousAboutMe")}</h3>
                <p>{t("whoIAm")}</p>
                <p>{t("mySikllsInclude")}</p>
                <div>
                  <p>{t("mySkillOne")}</p>
                  <p>{t("mySkillTwo")}</p>
                  <p>{t("mySkillThree")}</p>
                  <p>{t("mySikllFour")}</p>
                </div>
                <p>{t("iHavePassion")}</p>
              </div>
            </div>
            <img src={illustrationWorking} alt="laptop img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
