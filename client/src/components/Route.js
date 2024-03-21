import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
  // console.log("coor: ",props.end[0],props.end[1])
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(props.start[0],props.start[1]),
      L.latLng(props.end[0],props.end[1])
      // L.latLng(33.50546582848033, 36.29547681726967)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    createMarker: function() { return null; }, 
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
    instructions: false,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);


export default RoutingMachine;