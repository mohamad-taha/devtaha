import { useEffect } from "react";
import { toggleSidebar } from "./../../utils/ToggleSidebar/ToggleSidebar";
import { CgClose } from "react-icons/cg";
import { VscListFlat } from "react-icons/vsc";
import Sidebar from "../Sidebar/Sidebar";
const Btn = ({ showSidebar, setShowSidebar }) => {
  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth > 1023) {
        setShowSidebar(false);
      }
    };
  });

  const closeSidebar = () => setShowSidebar(false);

  return (
    <>
      <button onClick={() => toggleSidebar(setShowSidebar)} className="listBtn">
        {showSidebar ? (
          <CgClose fontSize={20} />
        ) : (
          <VscListFlat fontSize={20} />
        )}
      </button>
      <Sidebar display={showSidebar} />
      {showSidebar && <div className="overlay" onClick={closeSidebar}></div>}
    </>
  );
};

export default Btn;
