import { generateDayWiseTimeSeries } from "./utils";

export const options = {
  chart: {
    type: "area",
    height: 200,
    width: window.innerWidth * 0.92,
    foreColor: "#999",
    stacked: true,
    dropShadow: {
      enabled: true,
      enabledSeries: [0],
      top: -2,
      left: 2,
      blur: 5,
      opacity: 0.06,
    },
  },
  colors: ["#00E396", "#0090FF"],
  stroke: {
    curve: "smooth",
    width: 3,
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: "View 1",
      data: generateDayWiseTimeSeries(0, 18),
    },
    {
      name: "View 2",
      data: generateDayWiseTimeSeries(1, 18),
    },
  ],
  markers: {
    size: 0,
    strokeColor: "#cbc5b4",
    strokeWidth: 3,
    strokeOpacity: 1,
    fillOpacity: 1,
    hover: {
      size: 6,
    },
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    style: {
      colors: ["blue"],
      fontSize: "12px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: 400,
      cssClass: "apexcharts-xaxis-label",
    },
  },
  yaxis: {
    labels: {
      offsetX: 14,
      offsetY: -5,
    },
    tooltip: {
      enabled: true,
    },
  },
  grid: {
    padding: {
      left: -5,
      right: 5,
    },
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy",
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
  },
  fill: {
    type: "solid",
    fillOpacity: 0.7,
  },
};

// export default options;
