import React, { useCallback, useRef } from 'react';
import { GoogleMap,useJsApiLoader } from '@react-google-maps/api';
import GoogleMapReact from 'google-map-react';

function MapContainer(props) {
    const { latitude, longitude } = props;
    const AnyReactComponent = ({ text }) => <div style={{width:"100%"}}>{text}</div>;

    const defaultProps = {
      center: {
        lat: 10.99835602,
        lng: 77.01502627
      },
      zoom: 15
    };

    return (
      <div style={{ height: '100vh', width: '100vw' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyB_kV2qe_BocjKsgGBcCCYXHFqjS9URRh0" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={latitude}
        lng={longitude}
        text="My Marker"
      />
    </GoogleMapReact>
    
  </div>
    );
}

export default MapContainer;
