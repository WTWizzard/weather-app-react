export const mock = {
  searchValue: "Odesa",
  weatherData: {
    cod: "200",
    message: 0,
    cnt: 1,
    list: [
      {
        dt: 1731002400,
        main: {
          temp: 9.85,
          feels_like: 9.85,
          temp_min: 8.81,
          temp_max: 9.85,
          pressure: 1033,
          sea_level: 1033,
          grnd_level: 1017,
          humidity: 30,
          temp_kf: 1.04,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
        ],
        clouds: { all: 2 },
        wind: { speed: 0.9, deg: 232, gust: 0.89 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2024-11-07 18:00:00",
      },
    ],
    city: {
      id: 618069,
      name: "Chișinău Municipality",
      coord: { lat: 47.0245, lon: 28.8323 },
      country: "MD",
      population: 0,
      timezone: 7200,
      sunrise: 1730955396,
      sunset: 1730990410,
    },
  },
};
