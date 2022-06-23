interface ReduxState {
  weather: WeatherState;
}

interface RxJSState {
  value: ReduxState;
}

interface GeoResponse {
  body: CityLatLon[];
}

interface LatLon {
  lat: string;
  lon: string;
}

interface CityLatLon extends LatLon {
  name: string;
  country: string;
  state: string;
}

interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface CurrentWeatherAPI {
  coord: LatLon;
  weather: WeatherDescription[];
  base: string;
  main: Main;
  visibility: number;
  wind: any;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface Percipitation {
  dt: number;
  percipitation: number;
}

interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

interface CommonSummary {
  dt: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  pressure: number;
  weather: WeatherDescription[];
}

interface CurrentSummary extends CommonSummary {
  feels_like: FeelsLike;
  temp: number;
  sunrise: number;
  sunset: number;
  visibility: number;
}

interface HourlySummary extends CommonSummary {
  feels_like: FeelsLike;
  temp: number;
  visibility: number;
  pop: number;
}

interface DailySummary extends CommonSummary {
  feels_like: number;
  temp: Temp;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  pop: number;
}

interface Alert {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: number;
  tags: string[];
}

interface OneCallAPI {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentSummary;
  minutely: Percipitation[];
  hourly: HourlySummary[];
  daily: DailySummary[];
  alerts: Alert[];
}

interface City {
  id: number;
  name: string;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
  coord: LatLon;
}

interface HourlyMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface Rain {
  "3h": number;
}

interface HourlySys {
  pod: string;
}

interface HourlyForecaseSummary {
  dt: number;
  main: HourlyMain;
  weather: WeatherDescription[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain: Rain;
  sys: HourlySys;
  dt_txt: string;
}

interface HourlyForecastAPI {
  cod: string;
  message: number;
  cnt: number;
  list: HourlyForecaseSummary[];
  city: City;
}

interface WeatherState {
  currentWeatherAPI: CurrentWeatherAPI;
  oneCallAPI: OneCallAPI;
  hourlyForecastAPI: HourlyForecastAPI;
}
