import React, { useEffect, useState } from "react";
import { useData } from "../context/DataProvider.jsx";
import { checkingCityName, separateDataByDay, splitTime } from "../utils.js";
import { MainImage } from "./MainImage.jsx";
import sunrise from "../assets/images/sunrise.svg";
import sunset from "../assets/images/sunset.svg";
import { Loader } from "./Loader.jsx";

export const MainContent = () => {
  const { data, loading, error, updateData } = useData();
  const { searchValue, weatherData } = data;
  const cityData = weatherData.city;
  const [current, setCurrent] = useState(weatherData.list[0]);
  const [graphIndex, setGraphIndex] = useState(0)

  useEffect(() => {
    setCurrent(weatherData.list[0]);
  }, [data]);

  console.log(data, "DATA FROM CONTEXT PROVIDER");

  const separatedData = separateDataByDay(weatherData?.list);

  console.log(separatedData[0]);

  return (
    <main className="main">
      <div className="wrapper">
        <section className="main__weather sky-gradient-05">
          {loading ? (
            <Loader />
          ) : (
            <>
              <MainImage cityName={cityData.name} data={current} />
              <div className="main__weather-time-graph">
                {separatedData[graphIndex].map((timestamp, index) => {
                  return (
                    <div
                      className="graph-item"
                      key={`graph-item-key-${index}`}
                      style={{
                        height: `${Math.ceil(timestamp.main.temp * 5)}px`,
                      }}
                      data-time={splitTime(timestamp.dt_txt)}
                      data-temp={Math.ceil(timestamp.main.temp) + "°"}
                      onClick={() => {
                          setCurrent(separatedData[index]);
                      }}
                    ></div>
                  );
                })}
              </div>
              <div className="main__weather-info">
                <span className="main__weather-info-time">
                  {new Date(current?.dt_txt).toString().slice(0, 21)}
                </span>
                <h2 className="main__weather-info-city">
                  <span className="main__weather-info-city-name">
                    {checkingCityName(searchValue, cityData.name)}
                  </span>
                  <span className="main__weather-info-city-separator">|</span>
                  <span className="main__weather-info-city-temperature">
                    {Math.ceil(current.main.temp) + "°"}
                  </span>
                </h2>
                <hr />
                <div className="main__weather-info-city-details">
                  <p className="main__weather-info-city-wind details">
                    Wind speed: {current.wind.speed}
                  </p>
                  <p className="main__weather-info-city-pop details">
                    Probability of Rain: {(current.pop * 100).toFixed(2)}
                    <i className="main__weather-info-city-pop-i"></i>
                  </p>
                  <p className="main__weather-info-city-humidity details">
                    Humidity level: {current.main.humidity}%
                  </p>
                  <hr />
                  <div className="main__weather-info-city-sun details">
                    <div className="sunrise sun-item">
                      <p className="sunise-title">Sunrise:</p>
                      <img src={sunrise} alt="sunrise" />
                      <p className="sunrise-time">
                        {splitTime(cityData.sunrise)}
                      </p>
                    </div>
                    <div className="sunset sun-item">
                      <p className="sunset-title">Sunset:</p>
                      <img src={sunset} alt="sunset" />
                      <p className="sunset-time">
                        {splitTime(cityData.sunset)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
        <section className="main__cards">

        </section>
      </div>
    </main>
  );
};
