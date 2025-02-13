import { useState } from "react";
import Toggle from "./icons/Toggle.jsx";
import "../App.css"

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <header className="shadow-md px-3 py-4 dark:bg-[#2b3945] bg-[#e9edc9]">
      <div className="flex items-center justify-between max-w-[1440px] w-11/12 mx-auto">
        <h1 className="font-bold sm:text-lg text-base">Where in the world?</h1>

        <button
          className="flex items-center justify-center gap-1"
          onClick={toggleDarkMode}
        >
          <Toggle dark={darkMode} />
          <p className="sm:text-[12px] text-[10px]">{darkMode ? "Dark Mode" : "Light Mode"}</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
