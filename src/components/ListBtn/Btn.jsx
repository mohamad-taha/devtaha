import { useEffect } from "react";
import { toggleSidebar } from "./../../utils/ToggleSidebar/ToggleSidebar";
import { CgClose } from "react-icons/cg";
import { VscListFlat } from "react-icons/vsc";
const Btn = ({ showSidebar, setShowSidebar }) => {
  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth > 1023) {
        setShowSidebar(false);
      }
    };
  });

  return (
    <>
      <button onClick={() => toggleSidebar(setShowSidebar)} className="listBtn">
        {showSidebar ? (
          <CgClose fontSize={20} />
        ) : (
          <VscListFlat fontSize={20} />
        )}
      </button>
    </>
  );
};

export default Btn;
