import React from "react";
import ReactLoader from "react-loader";

const Loader = ({ isLoaded }) => {
  return (
    <ReactLoader
      loaded={isLoaded}
      lines={13}
      length={20}
      width={10}
      radius={30}
      corners={1}
      rotate={0}
      direction={1}
      color="#00CDBD"
      speed={1}
      trail={60}
      shadow={false}
      hwaccel={false}
      zIndex={2e9}
      top="50%"
      left="50%"
      scale={1.0}
      loadedClassName="loadedContent"
    />
  );
};

export default Loader;
