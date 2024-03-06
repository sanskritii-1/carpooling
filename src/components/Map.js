import React,{useState, useEffect} from "react";
import L,{Icon} from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMarker from "./Location";
import RoutingMachine from "./Route";


export default function Map() {

  const [center, setCenter] = useState(null)
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log("jjdjslsin")
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      setCenter([lat,long])
      console.log("coor: ",lat,long)
    })
  },[])

  const dropoff = new Icon({
    iconUrl: "images/destination_pin.png",
    iconSize: [28,28]
  })

  const pickup = new Icon({
    iconUrl: "images/pickup_location.png",
    iconSize: [28,28]
  })

  const user = new Icon({
    iconUrl: "images/user_location.png",
    iconSize: [18,18]
  })

  if(center)
  return (
    <div className="map-container">
      <MapContainer center={center} zoom={19} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={pickup}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[0,0]} icon={dropoff}>
          <Popup>Destination</Popup>
        </Marker>
        <LocationMarker icon={user}/>
        <RoutingMachine start={center} end="[0,0]"/>

      </MapContainer>
    </div>
  );
}
