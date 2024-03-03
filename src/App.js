import "./styles.css";
import Map from "./components/Map";
import Info from "./components/Info";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="App">
      <Button></Button>
      <div className="bg">
        <Info />
        <Map />

      </div>
    </div>
  );
}
