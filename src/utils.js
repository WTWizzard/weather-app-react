const mistCategory = ["Mist", "Smoke", "Haze", "Fog"];
const dustCategory = ["Dust", "Sand"];
const cloudCategory = [
  "few_clouds",
  "scattered_clouds",
  "broken_clouds",
  "overcast_clouds",
];

export const selectIconByDescription = (weatherObj) => {
  const weatherCategory = weatherObj.main;
  const weatherDescription = weatherObj.description;
  let result = "";

  if (mistCategory.includes(weatherCategory)) {
    result = "mist";
    return result;
  } else if (dustCategory.includes(weatherCategory)) {
    result = "dust";
    return result;
  }

  switch (weatherCategory) {
    case "Rain":
      result = "rain";
      break;
    case "Snow":
      result = "snow";
      break;
    case "Thunderstorm":
      result = "thunder";
    case "Drizzle":
      result = "drizzle";
      break;
    case "Clouds":
      result = cloudCategory.find((desc) => {
        return desc.split("_").join(" ") === weatherDescription;
      });
      break;
    default:
      result = "clear";
      break;
  }
  return result;
};

export const checkIsThisDay = (cityData, cardData) => {
  const cardTime = new Date(cardData.dt * 1000);

  const cardTime_m = cardTime.getHours() * 60 + cardTime.getMinutes();

  const sunset = new Date(cityData.sunset * 1000);
  const sunrise = new Date(cityData.sunrise * 1000);

  const sunrise_m = sunrise.getHours() * 60 + sunrise.getMinutes();
  const sunset_m = sunset.getHours() * 60 + sunset.getMinutes();

  if (cardTime_m > sunrise_m + 60 && cardTime_m <= sunset_m - 60) {
    console.log("day");
  } else {
    console.log("night");
  }

  return cardTime_m > sunrise_m + 60 && cardTime_m <= sunset_m - 60;
};

export const splitTime = (time) => {
  return new Date(typeof time === "number" ? time * 1000 : time)
    .toString()
    .split(" ")[4]
    .slice(0, 5);
};

export const findMostFrequentElement = (arr) => {
  let occurrences = {};
  // Iterate through the array and count the occurrences
  arr.forEach((obj) => {
    let weather = obj.weather[0];

    if (occurrences[weather.main]) {
      occurrences[weather.main].count++;
    } else {
      occurrences[weather.main] = {
        count: 1,
        weather: weather,
      };
    }
  });

  let maxElement = null;
  let maxCount = 0;
  // Iterate through the occurrences object to find the element with the highest occurrence
  for (let element in occurrences) {
    if (occurrences[element].count > maxCount) {
      maxCount = occurrences[element].count;
      maxElement = occurrences[element].weather;
    }
  }

  return maxElement;
};

export const fromatDataForSecondaryCard = (data) => {
  const temperatureArray = data.map((item) => item.main.temp);
  const date = new Date(data[0].dt_txt);

  const minTemp = Math.min(...temperatureArray);
  const maxTemp = Math.max(...temperatureArray);
  const mainWeatherOfTheDay = findMostFrequentElement(data);
  const weatherIcon = selectIconByDescription(mainWeatherOfTheDay);
  const dayOfTheWeek = date.toString().split(" ")[0];

  return {
    dayOfTheWeek,
    mainWeatherOfTheDay,
    weatherIcon,
    maxTemp,
    minTemp,
  };
};

export const separateDataByDay = (data) => {
  let currentDate = new Date().getDate();

  const tempArray = [];

  return data?.reduce((acc, curr) => {
    let date = new Date(curr.dt_txt);

    if (date.getDate() === currentDate) {
      tempArray.push(curr);
    } else {
      acc.push([...tempArray]);
      currentDate = date.getDate();
      tempArray.splice(0, tempArray.length);
      return acc;
    }
    return acc;
  }, []);
};

export const checkingCityName = (searchValue = "", responseValue) => {
  let result;

  if (searchValue.toLocaleLowerCase() === responseValue.toLocaleLowerCase()) {
    result = responseValue;
    return result;
  }
  let lowerCaseValue = searchValue.toLowerCase();
  let firstLetter = lowerCaseValue.charAt(0);
  result = lowerCaseValue.replace(firstLetter, firstLetter.toUpperCase());

  return result;
};
