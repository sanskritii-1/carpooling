import { useState, useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';

export default function LocationMarker(props) {
    const [position, setPosition] = useState(null);
    const map = useMap();
  
    console.log(navigator.geolocation.getCurrentPosition(()=>{

    }))

    useEffect(() => {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]); 
        //   map.flyTo([latitude, longitude]);
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
  
      return () => {
        navigator.geolocation.clearWatch(watchId); 
      };
    }, []); 
  
    return position === null ? null : (
      <Marker position={position} icon={props.icon}>
        <Popup>You are here</Popup>
      </Marker>
    );
}
