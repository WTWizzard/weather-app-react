import React, { useEffect, useState } from "react";
import { checkIsThisDay, selectIconByDescription } from "../utils.js";

export const MainImage = ({ cityName, data }) => {
  const [image, setImage] = useState("");
  const isDay = checkIsThisDay(cityName, data);

  const imageName = selectIconByDescription(data.weather[0]);

  useEffect(() => {
    const loadImage = async (imageName) => {
      try {
        await import(
          `../assets/images/${
            isDay || imageName === "mist" || imageName === "dust"
              ? imageName
              : "n-" + imageName
          }.svg`
        ).then((image) => setImage(image));
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImage(imageName);
  }, [imageName, data]);

  return (
    <img
      className="main__weather-icon"
      alt="main_image"
      width={300}
      height={300}
      src={image.default}
    />
  );
};
