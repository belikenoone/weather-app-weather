import React, { useState, useContext, useEffect } from "react";
import AppContext from "../store/context";

const Search = () => {
  const [searchValue, setsearchValue] = useState("");
  const { weatherData, fetchData } = useContext(AppContext);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          fetchData(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.log(error);
          return null;
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(searchValue);
    setsearchValue("");
  };
  return (
    <form
      className="flex justify-center items-center gap-5 flex-col sm:flex-row "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search Here.."
        value={searchValue}
        onChange={(e) => setsearchValue(e.target.value)}
        className="py-2 px-3 rounded-md"
      />
      <button className="bg-blue-500 text-white px-3 rounded-md py-2">
        Search
      </button>
    </form>
  );
};

export default Search;
