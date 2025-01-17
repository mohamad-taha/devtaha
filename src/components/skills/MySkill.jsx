import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const mySkill = ({ src, alt, name, delay }) => {
  AOS.init();

  return (
    <div
      className="skill"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "max-content",
        gap: "10px",
      }}
    >
      <img
        data-aos="zoom-in-up"
        data-aos-delay={delay}
        src={src}
        alt={alt}
        style={{ objectFit: "contain", width: "70px", height: "70px" }}
      />
      <p data-aos="zoom-in-up" data-aos-delay={delay}>
        {name}
      </p>
    </div>
  );
};

export default mySkill;
