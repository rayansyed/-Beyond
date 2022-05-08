import React from "react";
import "./marquee.css";

const MarqueeText= ({game, time, studio, release, platform}) => {
  return (
    <div className="marquee">
      <div className="track">
        <div className="content">&nbsp;
          <p className="m-item">{game}</p>
          <p className="m-item">{time}</p>
          <p className="m-item">{studio}</p>
          <p className="m-item">{release}</p>
          <p className="m-item">{platform}</p>
          <p className="m-item">{game}</p>
          <p className="m-item">{time}</p>
          <p className="m-item">{studio}</p>
          <p className="m-item">{release}</p>
          <p className="m-item">{platform}</p>
          <p className="m-item">{game}</p>
          <p className="m-item">{time}</p>
          <p className="m-item">{studio}</p>
          <p className="m-item">{release}</p>
          <p className="m-item">{platform}</p>
          <p className="m-item">{game}</p>
          <p className="m-item">{time}</p>
          <p className="m-item">{studio}</p>
          <p className="m-item">{release}</p>
          <p className="m-item">{platform}</p>
          <p className="m-item">{game}</p>
          <p className="m-item">{time}</p>
          <p className="m-item">{studio}</p>
          <p className="m-item">{release}</p>
          <p className="m-item">{platform}</p>
          <p className="m-item">{game}</p>
          <p className="m-item">{time}</p>
          <p className="m-item">{studio}</p>
          <p className="m-item">{release}</p>
          <p className="m-item">{platform}</p>
          <p className="m-item">{game}</p>
          <p className="m-item">{time}</p>
          <p className="m-item">{studio}</p>
          <p className="m-item">{release}</p>
          <p className="m-item">{platform}</p>
        </div>
      </div>
    </div>
  );
}

export default MarqueeText;