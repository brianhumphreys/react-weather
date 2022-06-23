import { useSelector } from "react-redux";
import { Range } from "../utils/enums";
import { buildIconURL, getDayMonth, getHourMinute } from "../utils/utils";

interface CardData extends DailySummary {
  icon: string;
  date_time: string;
  sunrise_string: string;
  sunset_string: string;
}

export const useCardData = (): CardData[][] => {
  return useSelector(({ weather }: ReduxState) => {
    if (!weather.oneCallAPI) {
      return [];
    }

    const chunkSize = 4;
    const subArrays: CardData[][] = [];
    for (let i = 0; i < weather.oneCallAPI.daily.length; i += chunkSize) {
      subArrays.push(
        weather.oneCallAPI.daily.slice(i, i + chunkSize).map<CardData>((x) => ({
          ...x,
          date_time: getDayMonth(x.dt),
          sunrise_string: getHourMinute(x.sunrise * 1000),
          sunset_string: getHourMinute(x.sunset * 1000),
          icon: buildIconURL(x.weather),
        })),
      );
    }
    return subArrays;
  });
};
