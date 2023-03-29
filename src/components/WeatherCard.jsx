import React, { useContext } from "react";
import AppContext from "../store/context";

const WeatherCard = () => {
  const { weatherData } = useContext(AppContext);

  return (
    <>
      {weatherData ? (
        <div className="min-h-[400px] py-2 px-3 bg-[rgba(200,200,200,0.8)] w-[90%] mx-auto lg:w-1/2 flex flex-col items-center rounded-lg gap-3 justify-center">
          <span className="text-5xl">{weatherData.location.name}</span>
          <span>
            {weatherData.location.region}, {weatherData.location.country}
          </span>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="text-xl text-center">
              {weatherData.current.condition.text}
            </span>
            <img src={weatherData.current.condition.icon} alt="image-here" />
          </div>
          <div className="bg-blue-800 bg-opacity-50 flex flex-col md:flex-row justify-evenly items-center py-3 px-4 gap-4">
            <div className="flex flex-col items-center justify-center">
              <span>Current Temp.</span>
              <span className="text-3xl font-bold">
                {weatherData.current.temp_c}&#8451;
              </span>
            </div>
            <span className="rotate-90 md:rotate-0">|</span>
            <div className="flex flex-col items-center justify-center">
              <span>Wind Speed</span>
              <span className="text-3xl font-bold">
                {weatherData.current.wind_kph}
              </span>
            </div>
            <span className="rotate-90 md:rotate-0">|</span>
            <div className="flex flex-col items-center justify-center">
              <span>Humidity</span>
              <span className="text-3xl font-bold">
                {weatherData.current.humidity}
              </span>
            </div>
          </div>
        </div>
      ) : // <div>Loading..</div>
      null}
    </>
  );
};

export default WeatherCard;
