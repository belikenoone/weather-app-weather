import React from "react";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import { AppProvider } from "./store/context";
const App = () => {
  return (
    <AppProvider>
      <div className="wrapper relative h-screen w-full flex flex-col items-center py-8 gap-7">
        <Search />
        <WeatherCard />
      </div>
    </AppProvider>
  );
};

export default App;
