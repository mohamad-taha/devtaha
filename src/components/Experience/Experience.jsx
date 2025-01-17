import MyExperince from "./MyExperience";
import projectsLogo from "/assets/imgs/projectsSy.png";
import vicaLogo from "/assets/imgs/vica.png";
import { useTranslation } from "react-i18next";
import "./Experience.css";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id="experience" className="mt">
      <div className="container">
        <div className="experience">
          <h2 className="sectionTitle">{t("experience")}</h2>
          <p>{t("quickSummaryOfMyEsxperience")}</p>
          <MyExperince
            img={vicaLogo}
            alt="Vica Web Solutions"
            jop={t("frontendTrainee")}
            jopSkill1={t("builtUserInterfacesWith")}
            jopSkill2={t("usingFigma")}
            jopSkill3={t("usingApi")}
            jopSkill4={t("achievedRating")}
            jopSkill5={t("receivedDigitalCertificate")}
            date="08/2024 - 01/2025"
            isSkill5={true}
          />
          <MyExperince
            img={projectsLogo}
            alt="Projects SY"
            jop={t("frontendStudent")}
            jopSkill1={t("learnWebTech")}
            jopSkill2={t('createdResponsiveDesign')}
            jopSkill3={t('completedSeveralProjects')}
            jopSkill4={t('earnedWebCertification')}
            date="09/2023 - 11/2023"
            isSkill5={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
