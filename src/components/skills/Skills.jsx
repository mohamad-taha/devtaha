import MySkill from "./MySkill";
import { useTranslation } from "react-i18next";
import "./skills.css";

const skills = () => {
  const { t } = useTranslation();
  return (
    <section className="mt">
      <div className="container">
        <div className="skills">
          <h2 className="sectionTitle">{t("skills")}</h2>
          <p>{t("theTechnicles")}</p>
          <div className="skillIcons">
            <MySkill
              name="HTML"
              alt="html icon"
              src="./assets/imgs/html.webp"
              delay="100"
            />
            <MySkill
              name="CSS"
              alt="css icon"
              src="./assets/imgs/css.png"
              delay="200"
            />
            <MySkill
              name="JavaScript"
              alt="js icon"
              src="./assets/imgs/javascript.svg"
              delay="300"
            />
            <MySkill
              name="Figma"
              alt="figma icon"
              src="./assets/imgs/figma.svg"
              delay="400"
            />
            <MySkill
              name="Git"
              alt="git icon"
              src="./assets/imgs/git.svg"
              delay="500"
            />
            <MySkill
              name="React"
              alt="react icon"
              src="./assets/imgs/react.svg"
              delay="600"
            />
            <MySkill
              name="Material UI"
              alt="mui icon"
              src="./assets/imgs/materialUi.png"
              delay="700"
            />
            <MySkill
              name="Tailwind CSS"
              alt="tailwindcss icon"
              src="./assets/imgs/tailwindcss.svg"
              delay="800"
            />
            <MySkill
              name="React Router"
              alt="reactrouter icon"
              src="./assets/imgs/reactRouter.png"
              delay="900"
            />
            <MySkill
              name="I18N"
              alt="i18n icon"
              src="./assets/imgs/i18n.png"
              delay="1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
