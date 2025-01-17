import Links from "../Links/Links";
import DownloadResumeBtn from "./../ResumeBtn/Btn";
import Logo from "/assets/imgs/DevTaha.png";
import "./Sidebar.css";

const Sidebar = ({ display,languageBtn }) => {
  return (
    <>
      <div className={`${display ? "showSidebar" : ""} sidebar`}>
        <a href="">
          <img src={Logo} alt="logo" />
        </a>
        <Links />
        {languageBtn}
        <DownloadResumeBtn />
      </div>
    </>
  );
};

export default Sidebar;
