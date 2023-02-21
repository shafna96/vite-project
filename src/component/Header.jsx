import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

function Header() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    var val = e.target.getAttribute("data-set-theme");
    setTheme(val);
  };
  return (
    <header className="sticky top-0 z-50 py-2 bg-base-100">
      <div className="container">
        <div className="navbar px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-primary btn-circle lg:hidden mr-1"
              >
                <i className="bi bi-list text-2xl"></i>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-base-200 rounded-box w-52"
              >
                <li>
                  <a href="#!">Home</a>
                </li>
                <li>
                  <a href="#!">Services</a>
                </li>
                <li>
                  <a href="#!">About</a>
                </li>
                <li>
                  <a href="#!">Work</a>
                </li>
                <li>
                  <a href="#!">Case Study</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-0 font-medium">
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">Services</a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Work</a>
              </li>
              <li>
                <a href="#!">Case Study</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn">
                {THEMES.length} Theme
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 max-h-96 overflow-y-auto"
              >
                {THEMES.map((theme, i) => (
                  <li className="w-full" key={theme + i}>
                    <label
                      tabIndex={0}
                      data-set-theme={theme}
                      onClick={handleThemeChange}
                    >
                      {i + 1 + ". " + theme}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
