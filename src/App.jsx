import React, { useState } from "react";

import "./App.css";
import Color from "./components/Color";
import Dropdown from "./components/Dropdown";
import Range from "./components/Range";
import ObjectD from "./components/Object3d";
import ColorLight from "./components/ColorLight";
import RangeLight from "./components/RangeLight";

function App() {
  const [environments, setEnvironments] = useState([
    { name: "city", path: "/hdri/city.hdr" },
    { name: "apartment", path: "/hdri/apartment.hdr" },
    { name: "dawn", path: "/hdri/dawn.hdr" },
    { name: "forest", path: "/hdri/forest.hdr" },
    { name: "lobby", path: "/hdri/lobby.hdr" },
    { name: "night", path: "/hdri/night.hdr" },
    { name: "park", path: "/hdri/park.hdr" },
    { name: "studio", path: "/hdri/studio.hdr" },
    { name: "sunset", path: "/hdri/sunset.hdr" },
    { name: "warehouse", path: "/hdri/warehouse.hdr" },
  ]);
  const lightExample = [
    { name: "point", path: "point" },
  ];
  const [lightType, setLightType] = useState({name:'point', path:'point'})
  const [lightIntensity, setIntensity] = useState(1);
  const [metalness, setMetalness] = useState(0.7);
  const [roughness, setRoughness] = useState(0);
  const [LightCod, setLightCod] = useState({ x: 0, y: 0, z: 0 });
  const [color, setColor] = useState(null);
  const [lightColor, setLightColor] = useState('white');
  const [curEnvironment, setCurEnvironment] = useState(environments[0]);

  const handleDragStart = (e) => {
    let color;

    if (e.target.getAttribute("value")) {
      color = e.target.getAttribute("value");
    } else {
      color = e.target.value;
    }
    setColor(color);
  };

  const changeLightColor = (e) => {
    let color;
    console.log(e);

    if (e.target.getAttribute("value")) {
      color = e.target.getAttribute("value");
    } else {
      color = e.target.value;
    }
    setLightColor(color);
  };

  return (
    <>
      <ObjectD
        color={color}
        setColor={setColor}
        lightColor={lightColor}
        curEnvironment={curEnvironment}
        lightIntensity={lightIntensity}
        LightType={lightType.name}
        metalness={metalness}
        roughness={roughness}
        LightCod={LightCod}
      />
      <div className="color">
        <Color handleDragStart={handleDragStart} drag={true} />
        <Dropdown setCurEnvironment={setCurEnvironment} environments={environments} />
        <Range
          title={"Intensity"}
          step={1}
          min={1}
          max={20}
          setIntensity={setIntensity}
          lightIntensity={lightIntensity}
        />
        <ColorLight changeLightColor={changeLightColor} />
        <Dropdown setCurEnvironment={setLightType} environments={lightExample} />
        <Range
          title={"Metalness"}
          step={0.1}
          min={0.0}
          max={1.0}
          setIntensity={setMetalness}
          lightIntensity={metalness}
        />
        <Range
          title={"Roughness"}
          step={0.1}
          min={0.0}
          max={1.0}
          setIntensity={setRoughness}
          lightIntensity={roughness}
        />

        <RangeLight title={"X"} step={0.05} min={-3.0} max={3.0} setLightCod={setLightCod} LightCod={LightCod} />
        <RangeLight title={"Y"} step={0.05} min={-3.0} max={3.0} setLightCod={setLightCod} LightCod={LightCod} />
        <RangeLight title={"Z"} step={0.05} min={-3.0} max={3.0} setLightCod={setLightCod} LightCod={LightCod} />
      </div>
    </>
  );
}

export default App;
