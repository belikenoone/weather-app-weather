import { createContext, useState } from "react";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async (cityName) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "API_KEY",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`,
      options
    );
    if (response.status === 404) {
      alert("Location Not Found");
    } else {
      const data = await response.json();
      setWeatherData(data);
    }
  };
  return (
    <AppContext.Provider value={{ weatherData, fetchData }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
