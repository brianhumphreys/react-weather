export const generateDayWiseTimeSeries = (s: number, count: number) => {
  var values = [
    [4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    [2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2],
  ];
  var i = 0;
  var series = [];
  var x = new Date("11 Nov 2012").getTime();
  while (i < count) {
    series.push([x, values[s][i]]);
    x += 86400000;
    i++;
  }
  return series;
};

export const generateTimeSeries = (values: number[], inc: number): XY[] => {
  var i = 0;
  var series = [];
  var x = Date.now();
  while (i < values.length) {
    series.push({ x, y: values[i] });
    // series.push([x, values[i]]);
    x += inc;
    i++;
  }
  return series;
};

export const getHourMinute = (date: number) => {
  return new Date(date * 1000)
    .toString()
    .split(" ")[4]
    .split(":")
    .slice(0, 2)
    .join(":");
};

export const getDayMonth = (date: number) => {
  return new Date(date * 1000).toString().split(" ").slice(0, 3).join(" ");
};

export const buildIconURL = (weather: WeatherDescription[]) => {
  return weather.length > 0
    ? "http://openweathermap.org/img/w/" + weather[0].icon + ".png"
    : "";
};
