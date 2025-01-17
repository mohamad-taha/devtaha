import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const MyProject = ({ img, name, desc, link, technicles }) => {
  const { i18n } = useTranslation();
  AOS.init();
  return (
    <div
      style={
        i18n.language === "ar"
          ? {
              backgroundImage:
                "linear-gradient(to left, #4b5563 50%, #1f2937 50%)",
            }
          : {}
      }
      className="projectContainer"
      data-aos="zoom-in-up"
    >
      <div>
        <img src={img} alt="project-img" />
      </div>
      <div>
        <p className="projectName">{name}</p>
        <p>{desc}</p>
        <div className="projectTech">{technicles}</div>
        <a target="_blank" href={link}>
          <FaArrowUpRightFromSquare fill="#4b5563" />
        </a>
      </div>
    </div>
  );
};

export default MyProject;
