import React, { useState, useEffect } from "react";
import WeatherApp from "./components/weatherApp";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/Themebtn";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <div className="max-w-sm w-full border-b-2 border-gray-300 p-4 bg-slate-400 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <ThemeBtn />
          <WeatherApp />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
