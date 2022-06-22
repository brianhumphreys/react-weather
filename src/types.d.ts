interface GeoResponse {
  body: CityLatLon[];
}

interface CityLatLon {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}
