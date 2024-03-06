import { useState, useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';

export default function LocationMarker(props) {
    const [position, setPosition] = useState(null);
    const map = useMap();
  
    console.log(navigator.geolocation.getCurrentPosition(()=>{

    }))
    // useEffect hook to set up geolocation tracking
    useEffect(() => {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]); // Update marker position
        //   map.flyTo([latitude, longitude]);
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
  
      return () => {
        navigator.geolocation.clearWatch(watchId); // Clean up watchPosition
      };
    }, []); // Run effect only once when component mounts
  
    return position === null ? null : (
      <Marker position={position} icon={props.icon}>
        <Popup>You are here</Popup>
      </Marker>
    );
}
