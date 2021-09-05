import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestWeather, weatherSelector } from "./slice";
import "./style.scss";
const Weather = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(weatherSelector);
  useEffect(() => {
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
      console.log("Not Available");
    }
  }, []);

  // console.log(data, loading, error, "data, loading, error");
  return (
    <div className="weather">
      <div className="icons">
        {data?.weather?.map((item, index) => (
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
  );
};
export default Weather;
