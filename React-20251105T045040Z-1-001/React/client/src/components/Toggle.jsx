import { useState } from "react";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const ToggleFunction = () => {
    setDarkMode(!darkMode);
  };
  const lightTheme = {
    backgroundColor: "white",
    color: "black",
    height: "100vh",
    display: "flex",
    flexDirection: "Column",
    justifyContent: "center",
    alignItems: "center",
  };
  const darkTheme = {
    backgroundColor: "black",
    color: "white",
    height: "100vh",
    display: "flex",
    flexDirection: "Column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={darkMode ? darkTheme : lightTheme}>
      <h1>{darkMode ? "Dark mode 🌙" : "Light Mode ☀️"}</h1>
      <button className="rounded-3 p-2 " onClick={ToggleFunction}>
        Switch to {darkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Toggle;
