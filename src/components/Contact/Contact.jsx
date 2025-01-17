import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { LuCopy } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const [emailIcon, setEmailIcon] = useState(<LuCopy fontSize={30} />);
  const [phoneIcon, setPhoneIcon] = useState(<LuCopy fontSize={30} />);

  const copyToClipboard = (text, setIcon) => {
    navigator.clipboard.writeText(text);
    setIcon(<IoCheckmarkDoneOutline fontSize={30} />);
    setTimeout(() => {
      setIcon(<LuCopy fontSize={30} />);
    }, 400);
  };

  return (
    <section id="contact" className="mt">
      <div className="container">
        <div className="contact">
          <h2 className="sectionTitle">{t("getInTouch")}</h2>
          <p>{t("lookingForDeveloper")}</p>
          <div dir="ltr">
            <MdOutlineMail fontSize={30} />
            mohamadTahaKasir@gmail.com
            <button
              className="copyBtn"
              onClick={() =>
                copyToClipboard("mohamadTahaKasir@gmail.com", setEmailIcon)
              }
            >
              {emailIcon}
            </button>
          </div>
          <div dir="ltr">
            <FiPhone fontSize={30} />
            +963 935447842
            <button
              className="copyBtn"
              onClick={() => copyToClipboard("+963 935447842", setPhoneIcon)}
            >
              {phoneIcon}
            </button>
          </div>
          <span>{t("youCanFindMe")}</span>
          <div>
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
      </div>
    </section>
  );
};

export default Contact;
