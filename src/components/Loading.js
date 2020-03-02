import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;
