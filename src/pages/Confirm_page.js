import "../styles.css";
import Map from "../components/Map";
import Info from "../components/Info";
import Button from "../components/Button";

export default function App(props) {
  console.log("props in confirm.js: ", props)
  console.log("in confirm.js: ", props.position);
  return (
    <div className="App">
      <Button/>
      <div className="bg">
        <Info name={props.info.name} rating={props.info.rating}/>
        <Map driverLocation={props.info.position} />

      </div>
    </div>
  );
}
