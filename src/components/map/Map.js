import React from "react";
import { number } from "prop-types";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

const MapContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 400px;
`;

const GOOGLE_MAP_KEY = "AIzaSyB0Jcj0uaFxlDOlV4ZS5UdnWCjjiR4kTu0";

const WeedMap = ({ latitude, longitude }) => {
  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_KEY }}
        defaultCenter={{ lat: latitude, lng: longitude }}
        defaultZoom={15}
      >
        <i className={"fas fa-cannabis"} lat={latitude} lng={longitude} />
      </GoogleMapReact>
    </MapContainer>
  );
};

WeedMap.propTypes = {
  latitude: number.isRequired,
  longitude: number.isRequired
};

export default WeedMap;
