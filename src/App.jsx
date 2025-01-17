import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useSwipeable } from "react-swipeable";
import Sidebar from "./components/Sidebar/Sidebar";
import LanguageBtn from "./components/LanguageBtn/Btn";
import ListBtn from "./components/ListBtn/Btn";
import "./App.css";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    setDir(localStorage.getItem("dir"));
  });

  localStorage.setItem(
    "dir",
    localStorage.getItem("i18nextLng") === "ar" ? "rtl" : "ltr"
  );

  const closeSidebar = () => setShowSidebar(false);

  const handlers = useSwipeable({
    onSwipedRight: () => setShowSidebar(true),
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <div dir={dir} {...handlers}>
      <Navbar
        btn={
          <ListBtn showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        }
        LanguageBtn={<LanguageBtn dir={setDir} />}
      />
      <Sidebar
        display={showSidebar}
        languageBtn={
          <LanguageBtn dir={setDir} setShowSidebar={setShowSidebar} />
        }
      />
      {showSidebar && <div className="overlay" onClick={closeSidebar}></div>}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
