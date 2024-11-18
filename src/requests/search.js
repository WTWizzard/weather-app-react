import { getWeatherData } from "./getWeatherData.js";

export const search = async (value) => {
  const [city, countryCode] = value.split(",");
  if (!countryCode) {
    alert("Please add country code after city name, and separate by comma");
    return null;
  }
  return await getWeatherData(city, countryCode);
};
