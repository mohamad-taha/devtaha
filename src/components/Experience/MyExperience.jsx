import AOS from "aos";
import "aos/dist/aos.css";

const MyExperience = ({
  img,
  alt,
  jop,
  jopSkill1,
  jopSkill2,
  jopSkill3,
  jopSkill4,
  jopSkill5,
  date,
  isSkill5,
}) => {
  AOS.init();

  return (
    <div className="myExperience" data-aos="zoom-in-up">
      <img src={img} alt={alt} />
      <div>
        <p>{jop}</p>
        <ul>
          <li>{jopSkill1}</li>
          <li>{jopSkill2}</li>
          <li>{jopSkill3}</li>
          <li>{jopSkill4}</li>
          {isSkill5 ? <li>{jopSkill5}</li> : ""}
        </ul>
      </div>
      <span>{date}</span>
    </div>
  );
};

export default MyExperience;
