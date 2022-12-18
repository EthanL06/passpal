import { useEffect, useState } from "react";
import { Key, Sun, Moon } from "./icons";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");

    const range = document.querySelector("input[type=range]");
    range.classList.toggle("range-dark");
    range.classList.toggle("range-light");
  };

  return (
    <div className="flex justify-between gap-x-4 w-full items-center dark:text-white">
      <div className="w-6 h-6 invisible"></div>
      <div className="flex items-center gap-x-4">
        <div className="float">
          <Key />
        </div>
        <span className="font-black text-4xl ">PassPal</span>
      </div>
      <button
        className="active:translate-y-0.5 duration-100"
        onClick={toggleTheme}
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};
export default Header;
