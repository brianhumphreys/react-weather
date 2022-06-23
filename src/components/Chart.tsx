import { useChart } from "../hooks/useChart";
import { ChartControls } from "./ChartControls";

export const Chart = () => {
  useChart();
  return (
    <div className="card transparent-card">
      <h5 className="card-header">Interactive Weather Chart</h5>
      <div className="card-body transparent-card">
        <ChartControls />
        {/* <div className="center center-padding"> */}
        <div id="chart-temp" style={{ width: "600px", height: "250px" }}></div>
        {/* </div> */}
        <div>
          <span className="badge text-bg-info">Apex Charts</span>
        </div>
        <div>
          <a
            href="https://apexcharts.com/docs/installation/"
            className="btn btn-info"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};
