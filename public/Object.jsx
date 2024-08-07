import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Color } from "three";

export default function Model({ metalness, roughness, props, scale, setColor, color }) {
  const { nodes, materials } = useGLTF("/object.glb");
  const [hoveredMesh, setHoveredMesh] = useState(null);
  const [componentName, setComponentName] = useState(null);

  useEffect(() => {
    for (let ele in materials) {
      materials[ele].metalness = metalness;
      materials[ele].roughness = roughness;
      materials[ele].normalMap = null;
    }
  }, [metalness, roughness]);

  const handlePointerOver = (e) => {
    e.stopPropagation();
    console.log(e);
    if (color) {
      setHoveredMesh(e);
    }
  };

  useEffect(() => {
    console.log(hoveredMesh?.object?.material?.name);
    if (hoveredMesh !== null) {
      setComponentName(hoveredMesh?.object?.material?.name);
      setHoveredMesh(null);
    }
  }, [hoveredMesh]);

  const handlePointerOut = () => {
    setHoveredMesh(null);
  };

  useEffect(() => {
    console.log("rededer...");
    if (componentName) {
      materials[componentName].color = new Color(color);
      setColor(null);
      setComponentName(null);
    }
  }, [materials, color, hoveredMesh]);

  return (
    <group {...props} scale={scale} dispose={null}>
      <group position={[0.026, -0.036, -0.001]}>
        <group position={[0.028, 0.077, 0.005]} rotation={[-1.294, 0.09, 1.485]}>
          <mesh
            onPointerOver={(e) => handlePointerOver(e)}
            onPointerOut={handlePointerOut}
            geometry={nodes._mesh_2.geometry}
            name="cursore"
            material={materials.cursore_2311}
          />
          <mesh
            onPointerOver={(e) => handlePointerOver(e)}
            onPointerOut={handlePointerOut}
            geometry={nodes._mesh_3.geometry}
            name="pelle"
            material={materials["pelle grainy borse_1901"]}
          />
          <mesh
            onPointerOver={(e) => handlePointerOver(e)}
            onPointerOut={handlePointerOut}
            geometry={nodes._mesh_4.geometry}
            name="ruby loop"
            material={materials["231116_RUBY LOOP_2335"]}
          />
        </group>
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.BindedTrim_91589_mesh_BAKED_11.geometry}
          material={materials["Zipper 2_2422"]}
        />
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.BindedTrim_91589_mesh_BAKED_11_1.geometry}
          material={materials["231116_RUBY LOOP_2335"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/object.glb");
