import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorUI, LoadingUI } from "./components";
import { requestWeather, weatherSelector, rejectWeather } from "./slice";
import "./style.scss";
const Weather = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(weatherSelector);
  const fetchWeather = useCallback(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        dispatch(
          requestWeather({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          })
        );
      });
    } else {
      dispatch(rejectWeather("Not allowed"));
    }
  }, [dispatch]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return (
    <>
      {loading && <LoadingUI />}
      {!loading && data ? (
        <div className="weather">
          <div className="icons d-flex">
            {data?.weather?.slice(0, 2).map((item, index) => (
              <div className="each">
                <img
                  key={`mapIcon_${index}`}
                  src={`http://openweathermap.org/img/w/${item?.icon}.png`}
                  alt={item?.main}
                  title={item?.main}
                />
              </div>
            ))}
          </div>
          <div className="details ml-h">
            <p className="place">
              {data?.name} <b>{data?.sys?.country}</b>
            </p>
            <p className="temp">{data?.main?.temp} °C</p>
          </div>
        </div>
      ) : null}
      {error && <ErrorUI retry={() => fetchWeather()} />}
    </>
  );
};
export default Weather;
