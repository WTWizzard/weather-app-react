import React, { createContext, useContext, useState, useEffect } from "react";
import { getWeatherData } from "../requests/getWeatherData.js";
import { mock } from "../assets/mock.js";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(mock);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWeatherData();
        setData({ searchValue: response.city.name, weatherData: response });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const updateData = (newData) => {
    setData(newData);
    console.log(data);
  };

  return (
    <DataContext.Provider value={{ data, loading, error, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
