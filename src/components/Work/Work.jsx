import Project from "./MyProject";
import Technicles from "./ProjectsTechnicles";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import "./Work.css";

const Work = () => {
  const { t } = useTranslation();

  return (
    <section id="work" className="mt">
      <div className="container">
        <div className="work">
          <h2 className="sectionTitle">{t("work")}</h2>
          <p>{t("someOfMyProjects")}</p>
          <Project
            img="assets/imgs/projectBlogs.webp"
            name={t("blogs")}
            desc={t("blogsDesc")}
            technicles={
              <>
                <Technicles name="HTML" /> <Technicles name="CSS" />
                <Technicles name="JavaScript" /> <Technicles name="React" />
                <Technicles name="React Router" />
                <Technicles name="React Icons" />
              </>
            }
            link="https://mohamad-taha.github.io/Blogs/"
          />
          <Project
            img="assets/imgs/projectEdupress.jpg"
            name={t("edupress")}
            desc={t("edupressDesc")}
            technicles={
              <>
                <Technicles name="HTML" /> <Technicles name="CSS" />
                <Technicles name="JavaScript" />
              </>
            }
            link="https://mohamad-taha.github.io/EduPress/"
          />
          <Project
            img="assets/imgs/projectForm.png"
            name={t("multiStepsForm")}
            desc={t("multiStepsDesc")}
            technicles={
              <>
                <Technicles name="HTML" /> <Technicles name="CSS" />
                <Technicles name="JavaScript" />
              </>
            }
            link="https://mohamad-taha.github.io/-Multi-step-form/"
          />
          <Project
            img="assets/imgs/projectPosts.png"
            name={t("managePosts")}
            desc={t("managePostsDesc")}
            technicles={
              <>
                <Technicles name="HTML" /> <Technicles name="CSS" />
                <Technicles name="JavaScript" /> <Technicles name="API" />
              </>
            }
            link="https://mohamad-taha.github.io/manage-posts/"
          />
          <a
            target="_blank"
            href="https://github.com/mohamad-taha?tab=repositories"
          >
            {t("viewMore")} <FaArrowUpRightFromSquare fill="#D1D5DB" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
