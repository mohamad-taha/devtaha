import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Links.css";

const Links = () => {
  const [activeSection, setActiveSection] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const links = [
    { id: "about", text: t("about") },
    { id: "experience", text: t("experience") },
    { id: "work", text: t("work") },
    { id: "contact", text: t("contact") },
  ];

  return (
    <div className="links">
      {links.map((link) => (
        <a
          key={link.id}
          className={activeSection === link.id ? "active" : ""}
          href={`#${link.id}`}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default Links;
