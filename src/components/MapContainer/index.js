import React, { useCallback, useRef } from 'react';
import { GoogleMap,useJsApiLoader } from '@react-google-maps/api';
import { ReactBingmaps } from 'react-bingmaps';

function MapContainer(props) {
    const { latitude, longitude } = props;
    const { isLoaded,loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBEkQmvOCbsXnKeRbMEs7m0CdFVbRlbNZo"
      })
    
      const mapRef = useRef()
      const mapOnLoad = useCallback((map)=>{
        mapRef.current=map
      },[])

      if(loadError) return

      const center = {
        lat: -3.745,
        lng: -38.523
      };

    return (
       <div>
        <GoogleMap
        mapContainerStyle={{height:"100vh",width:"100%"}}
        zoom={13}
        onLoad={mapOnLoad}
        center={center}>
            
        </GoogleMap>
       </div>
    );
}

export default MapContainer;
