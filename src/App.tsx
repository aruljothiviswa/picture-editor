import "./App.css";
import CanvasComponent from "./components/Canvas";
import ControlPanel from "./components/ControlPanel";
import LayersPanel from "./components/LayersPanel";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <>
      <div className="app">
        <Toolbar />
        <div className="main">
          <ControlPanel />
          <CanvasComponent />
          <LayersPanel />
        </div>
      </div>
    </>
  );
}

export default App;
