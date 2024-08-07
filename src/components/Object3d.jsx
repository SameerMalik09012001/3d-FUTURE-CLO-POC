import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls, OrbitControls, Environment } from "@react-three/drei";
// import Model from "../../public/CER";
import Model from "../../public/Car"; 
// import Model from "../../public/Car_rig";
// import Model from "../../public/Ironman"; 
// import Model from "../../public/Object"; 

const ObjectD = ({ roughness, curEnvironment, lightColor, lightIntensity, color, setColor, LightType, metalness , LightCod}) => {
  return (
    <Canvas
      className="canvas"
      dpr={[1, 2]}
      shadows
      camera={{ position: [0, 0, 10], fov: 20 }}
      style={{ position: "absolute", top: "0", height: "80%", width: "90%", left: "5%" }}
    >
      <color attach="background" args={["#101010"]} />
      <PresentationControls speed={2} global polar={[-0.1, Math.PI / 4]}>
        <Stage environment={curEnvironment.name}>
          <OrbitControls />
          {/* <ambientLight intensity={0.5} color={"white"} /> */}
          {LightType === "point" && (
            <>
              <pointLight position={[LightCod.x, LightCod.z, LightCod.y]} color={lightColor} intensity={lightIntensity || 20} />
            </>
          )}
          {/* {LightType === "spot" && (
            <>
              <spotLight position={[LightCod.x, LightCod.z, LightCod.y]} color={lightColor} intensity={lightIntensity || 20} />
            </>
          )} */}

          <gridHelper scale={0.009} args={[10, 10, "red", "gray"]} />
          <Model
            roughness={roughness}
            metalness={metalness}
            position={[0, -0.009, 0]}
            color={color}
            setColor={setColor}
            scale={0.015}
          />
          <Environment files={curEnvironment.path} background />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

export default ObjectD;
