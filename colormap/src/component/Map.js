import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: -17.8,
  lng: 178
};

const color = () => [
  {
    "featureType": "road",
    "stylers": [
      { "color": "green" }
    ]
  },
	
	{
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      { "color": "#ff0000" }
    ]
  },
	
	{
    "featureType": "landscape",
    "elementType": "labels",
    "stylers": [
      { "visibility": "on" }
    ]
  }
]

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDF-hI9NJYO3fDYt6fDCyRwtHi0wPyckWc">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={9.5}
				mapTypeId="hybrid"
				options={{ styles: color() }}
      >
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map);
