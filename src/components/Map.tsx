import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  height: '100%',
  width: '100%',
};

const center = {
  lat: 0,
  lng: -180,
};

const position = {
  lat: 37.772,
  lng: -122.214,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2}>
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
