import { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import { useSelector } from "react-redux";
import { options } from "../utils/options";
import { generateTimeSeries } from "../utils/utils";
import { useChartData } from "./useChartData";

export const useChart = () => {
  const { oneCallAPI, currentWeatherAPI, hourlyForecastAPI, currentChart } =
    useSelector(({ weather }: ReduxState) => weather);
  const [chart, setChart] = useState<ApexCharts | null>(null);
  const [series, config] = useChartData();

  useEffect(() => {
    setChart(new ApexCharts(document.querySelector("#chart-temp"), options));
  }, []);

  useEffect(() => {
    if (!chart) {
      return;
    }
    chart.render();
  }, [!!chart]);

  useEffect(() => {
    if (!oneCallAPI) {
      return;
    }
    if (!chart) {
      return;
    }
    if (series.length <= 0) {
      return;
    }
    const newSeries: ApexAxisChartSeries = [
      {
        name: currentChart.metric + " per " + currentChart.range,
        data: series,
      },
    ];
    chart.updateOptions({
      ...options,
      yaxis: {
        ...options.yaxis,
        min: Math.min(...(newSeries[0].data as XY[]).map((x) => x.y)),
        max: Math.max(...(newSeries[0].data as XY[]).map((x) => x.y)),
      },
    });
    chart.updateSeries(newSeries);
  }, [
    oneCallAPI?.lat,
    !!chart,
    config,
    currentChart.metric,
    currentChart.range,
  ]);
};
