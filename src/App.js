import "./styles.css";
import Map from "./components/Map";
import Info from "./components/Sidebar";

export default function App() {
  return (
    <div className="App">
      <Info />
      <Map />
    </div>
  );
}
