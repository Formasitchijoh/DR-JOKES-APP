import React, { useState } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Welcome from "./components/Welcome";
import Jokes from "./components/Jokes";
import CreateJoke from "./components/CreateJoke";
import Footer from "./components/Footer";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "./hooks/useDarkMode";
import JokeSlider from "./components/JokeSlider";
const App = () => {
  const [colorTheme, setColorTheme] = useDarkMode();
  //select state
  const [selectCategory, setSelectCategory] = useState("African Jokes");
  const [isDarkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setColorTheme(colorTheme);
    setDarkMode(checked);
  };
  //track select value change
  const handleChange = (e) => {
    setSelectCategory(e.target.value);
  };
  return (
    <div className="lg:flex min-h-[100vh]">
      <Nav
        colorTheme={colorTheme}
        setColorTheme={setColorTheme}
        isDarkMode={isDarkMode}
        setDarkMode={setColorTheme}
        toggleDarkMode={toggleDarkMode}
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
        handleChange={handleChange}
      />
      <main className="dark:bg-[#121212] lg:w-4/5">
        <div className="lg:flex justify-between items-center h-16 px-4">
          <Welcome />
          <DarkModeSwitch
            className="sm:hidden md:hidden"
            size={35}
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
        </div>
        <Jokes selectCategory={selectCategory} />
        <CreateJoke />
        <div>
          <JokeSlider />
          <JokeSlider />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
