import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherinfo] = useState({
    city: "Delhi",
    feelsLike: 26.05,
    humidity: 69,
    temp: 26.05,
    tempMax: 26.05,
    tempMin: 26.05,
    weather: "haze",
  });
  let updateInfo = (newInfo) => {
    setWeatherinfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App by Aman</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
