import React from 'react';
import { ReactBingmaps } from 'react-bingmaps';

function MapContainer(props) {
    const { latitude, longitude } = props;

    return (
        <ReactBingmaps
            bingmapKey="ApqAOABlkfzxlWLbMeK6u3Bfb5WxXRkQDoW_ILJ1ASY0_PMFe2wz63OVER0SkIjY"
            center={[latitude, longitude]}
            zoom={10}
            mapTypeId={'road'}
            height={'100vh'}
            pushPins={[
                {
                    location: [latitude, longitude],
                    option: { color: 'red' },
                },
            ]}
        />
    );
}

export default MapContainer;
