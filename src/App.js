import React, { useState, useEffect } from "react";
import "./styles.scss";
import Instructions from "./Instructions";

const App = () => {
  const [candleHeight, setCandleHeight] = useState(80);

  useEffect(() => {
    if (candleHeight > 10) {
      setTimeout(() => setCandleHeight(candleHeight - 1), 2000);
    }
  }, [candleHeight]);

  function handleClick() {
    setCandleHeight(80);
  }

  return (
    <>
      <Instructions />
      <div className="block candleContainer">
        <div>
          <button className="btn-smaller" onClick={handleClick}>
            make new candle
          </button>
        </div>
        <div className="candle">
          <div className="flame">
            <div className="shadows" />
            <div className="top" />
            <div className="middle" />
            <div className="bottom" />
          </div>
          <div className="wick" />
          <div className="wax" style={{ height: `${candleHeight}%` }} />
        </div>
      </div>
    </>
  );
};

export default App;
