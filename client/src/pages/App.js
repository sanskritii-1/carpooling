import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import RideOptionCard from "../components/RideOptionCard"; 
import PickupForm from "../components/PickupForm";
import ConfirmationContainer from "../components/ConfirmationContainer";
import L,{Icon} from "leaflet";
import autoImage from "../auto-rickshaw (1).svg"; 
// import autoImage from "./Linklift-Auto.jpg"; 
import carImage from "../Linklift-Car2.jpg"; 
import erickshawImage from "../Linklift-Erickshaw.jpg"; 
import '../styles.css';
import Button from "../components/Button";
import RoutingMachine from "../components/Route";
import LocationMarker from "../components/UserLocation";
import io from "socket.io-client"
import { Link } from "react-router-dom";
import Confirm_page from "./Confirm_page"
import Waiting from "../components/waitingRide";

const socket = io.connect("http://localhost:3001");


// const pickupIcon = new L.Icon({
//   iconUrl: pickupIconUrl,
//   iconSize: [38, 38],
// });

// const dropIcon = new L.Icon({
//   iconUrl: dropIconUrl,
//   iconSize: [38, 38],
// });

function App() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [date, setDate] = useState("");
  const [seats, setSeats] = useState("");
  const [rideOptions, setRideOptions] = useState([]);
  const [selectedRideOption, setSelectedRideOption] = useState(null);
  const [showRideOptions, setShowRideOptions] = useState(false);
  const [confirmRide, setConfirmRide] = useState(false);
  const [WaitingRide, setWatingRide] = useState(false);

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
    iconSize: [38,38]
  })

  const pickup = new Icon({
    iconUrl: "images/pickup_location.png",
    iconSize: [28,28]
  })

  const user = new Icon({
    iconUrl: "images/user_location.png",
    iconSize: [18,18]
  })

  const dropofflocation = [28.544938, 77.374108];

  const findRide = () => {
    const mockRideOptions = [
      {
        id: 1,
        vehicleType: "Linklift Auto",
        vehicleInfo: "Linklift Auto",
        amount: 100,
        estimatedTime: "5 mins",
        imageSrc: autoImage 
      },
      {
        id: 2,
        vehicleType: "Linklift Car",
        vehicleInfo: "Linklift Car",
        amount: 200,
        estimatedTime: "8 mins",
        imageSrc: carImage 
      },
      {
        id: 3,
        vehicleType: "E Rickshaw",
        vehicleInfo: "Linklift E-Rickshaw",
        amount: 150,
        estimatedTime: "6 mins",
        imageSrc: erickshawImage 
      },
    ];
    setRideOptions(mockRideOptions);
    setShowRideOptions(true);
  };

  const handleSelectRideOption = (rideOption) => {
    setSelectedRideOption(rideOption);
    setShowRideOptions(false); // Hide ride options container
    setConfirmRide(true); // Show confirmation container
  };

  const [driverInfo, setDriverInfo] = useState(null);

  useEffect(()=>{
    socket.on("receive_message", (data)=>{
      console.log("data received from driver")
      setDriverInfo(data)
    })
  },[socket])

  
  
  const handleConfirmRide = () => {
    // No need to set confirmRide again
    setShowRideOptions(false); // Hide ride options container
    setWatingRide(true);
    setConfirmRide(false);
    socket.emit("send_data",{
        name: "User",
        rating: "4.7",
        location: { pick: "India Gate", drop: "Rajiv Chowk" },
        status: { pick: "Pick", drop: "Drop" },
      });

  };
  
  const handleBackToSelection = () => {
    setConfirmRide(false);
    setSelectedRideOption(null);
    setShowRideOptions(true); // Show ride options container again
  };
  

  // if data received from driver, confirmed page
  if(driverInfo){
    console.log("driverInfo getting sent: ", driverInfo)
    return <Confirm_page info={driverInfo}/>
  }

  if(center)
  return (
    <div className="App">
      <Button/>
      {showRideOptions && !confirmRide && (
        <div className="ride-options-container">
          {rideOptions.map((rideOption) => (
            <RideOptionCard
              key={rideOption.id}
              rideOption={rideOption}
              onSelectRideOption={handleSelectRideOption}
            />
          ))}
        </div>
      )}
      {confirmRide && (
        <ConfirmationContainer
          selectedRideOption={selectedRideOption}
          onConfirmRide={handleConfirmRide}
          onBackToSelection={handleBackToSelection}
        />
      )}
      {!showRideOptions && !confirmRide && !WaitingRide && (
        <PickupForm
        pickupLocation={pickupLocation}
        dropLocation={dropLocation}
        date={date}
        seats={seats}
        onPickupLocationChange={setPickupLocation}
        onDropLocationChange={setDropLocation}
        onDateChange={setDate}
        onSeatsChange={setSeats}
        onFindRide={findRide}
        />
        )}
      {WaitingRide && (<Waiting/>)}

      <div className="map-container">
        <MapContainer center={center} zoom={19} scrollWheelZoom={true}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {(showRideOptions||confirmRide) && (
            <Marker position={center} icon={pickup}>
              <Popup>Pickup Location</Popup>
            </Marker>
          )}
          {(showRideOptions||confirmRide) && (
            <Marker position={dropofflocation} icon={dropoff}>
              <Popup>Drop Location</Popup>
            </Marker>
          )}
          {/* {pickupLocation && dropLocation && (
            <Polyline positions={[[28.6139, 77.2090], [28.6129, 77.2295]]} color="blue" />
          )} */}

          <LocationMarker icon={user}/>

          {(showRideOptions||confirmRide) && (
            <RoutingMachine start={center} end={dropofflocation}/>
          )}

        </MapContainer>
      </div>
    </div>
  );
}

export default App;
