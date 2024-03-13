import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { React, useState, useEffect } from "react";
import moment from "moment";
import logo from "../../images/logo.png";

function Home() {
  const [currentDate, setCurrentDate] = useState({
    day: moment().format("dddd - MMMM Do"),
    hours: moment().format("HH:mm"),
    seconds: moment().format("ss"),
    ampm: moment().format("A"),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(
        {
          day: moment().format("dddd - MMMM, Do"),
          hours: moment().format("HH:mm"),
          seconds: moment().format("ss"),
          ampm: moment().format("A"),
        },
        1000
      );
      return () => clearInterval(interval);
    }, []);
  });

  return (
    <>
      <div className="container-responsive">
        <div className="row text-center">
          <div className="col">
            <img src={logo} alt="logo" className="logo" />
          </div>
        </div>
        <div className="row time">
          <div className="col-xl-7 col-lg-8 col-md-6 col-sm-6 hours">
            {currentDate.hours}
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="ampm">{currentDate.ampm}</div>
            <div className="seconds">{currentDate.seconds}</div>
          </div>
        </div>
        <div className="row day-month">
          <div className="col">
            <div className="">{currentDate.day}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
