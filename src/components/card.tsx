import { useCardData } from "../hooks/useCardData";

export const Card = () => {
  const subArrays = useCardData();
  return (
    <div className="card transparent-card" style={{ padding: "0" }}>
      <div
        className="card-header"
        style={{ padding: "0.75rem 1.25rem 0 1.25rem" }}
      >
        <div className="row g-3">
          <div className="col">
            <h3 className="mb-3">Daily Forecast</h3>
          </div>
          <div className="col text-right">
            <a
              className="btn btn-primary mb-3 mr-1"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-arrow-left"></i>
            </a>
            <a
              className="btn btn-primary mb-3 "
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div
        className="card-body transparent-card"
        style={{ padding: "1.25rem 0.3rem 0.3rem 0.3rem" }}
      >
        <div className="col-12">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {subArrays.map((subDays, i) => {
                return (
                  <div
                    key={`card-row-${i}`}
                    className={`carousel-item ${i == 0 ? "active" : ""}`}
                  >
                    <div className="row">
                      {subDays.map((day, j) => {
                        return (
                          <div
                            className="col-md-3 mb-3"
                            key={`card-row-${i}_col-${j}`}
                          >
                            <div className="card">
                              <div className="card-body">
                                <p>
                                  <img src={day.icon} alt="icon"></img>
                                  <span className="temp__date">
                                    {day.date_time}
                                  </span>
                                </p>
                                <div>
                                  <span className="temp__high">
                                    High: {Math.round(day.temp.max)}{" "}
                                    <span>deg</span>
                                  </span>
                                </div>
                                <p>
                                  <span className="temp__low">
                                    Low: {Math.round(day.temp.min)}{" "}
                                    <span>deg</span>
                                  </span>
                                </p>
                                <div>
                                  <span className="temp__info">
                                    Feels like: {Math.round(day.feels_like.day)}{" "}
                                    <span>deg</span>
                                  </span>
                                </div>
                                <p>
                                  <span className="temp__info">
                                    Humidity: {Math.round(day.humidity)} %
                                  </span>
                                </p>
                                <p>
                                  <span className="temp__info">
                                    Sunrise Time: {day.sunrise_string}{" "}
                                    <span>AM</span>
                                  </span>
                                </p>
                                <p>
                                  <span className="temp__info">
                                    Sunrise Time: {day.sunset_string}{" "}
                                    <span>PM</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
