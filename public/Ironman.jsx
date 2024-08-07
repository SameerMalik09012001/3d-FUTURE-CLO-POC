import React, { useEffect, useMemo, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Color } from "three";

export default function Model({ metalness, roughness, props, scale, setColor, color }) {
  const { nodes, materials } = useGLTF("/ironman.glb");

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
      materials[componentName].color = new Color(color); // Red color
      setColor(null);
      setComponentName(null);
    }
  }, [materials, color, hoveredMesh]);

  return (
    <group {...props} scale={scale} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.005}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[148.256, 229.637, 2.618]}>
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_893_Mat2_0.geometry}
              material={materials["Mat.2"]}
            />
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_893_Mat2_0_1.geometry}
              material={materials["Mat.2"]}
            />
          </group>
          <group position={[101.043, 211.938, 16.962]}>
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_894_Mat_0.geometry}
              material={materials.material}
            />
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_894_Mat_0_1.geometry}
              material={materials.material}
            />
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_894_Mat_0_2.geometry}
              material={materials.material}
            />
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_894_Mat_0_3.geometry}
              material={materials.material}
            />
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_894_Mat_0_4.geometry}
              material={materials.material}
            />
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_894_Mat_0_5.geometry}
              material={materials.material}
            />
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_894_Mat_0_6.geometry}
              material={materials.material}
            />
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_894_Mat_0_7.geometry}
              material={materials.material}
            />
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_894_Mat_0_8.geometry}
              material={materials.material}
            />
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_894_Mat_0_9.geometry}
              material={materials.material}
            />
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_894_Mat_0_10.geometry}
              material={materials.material}
            />
          </group>
          <group position={[57.743, 225.546, -10.71]}>
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_379_Mat1_0.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_379_Mat1_0_1.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_379_Mat1_0_2.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_379_Mat1_0_3.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_379_Mat1_0_4.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_379_Mat1_0_5.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              onPointerOver={(e) => handlePointerOver(e)}
              onPointerOut={handlePointerOut}
              geometry={nodes.Subdivision_Surface_379_Mat1_0_6.geometry}
              material={materials["Mat.1"]}
            />
          </group>
          <mesh
            onPointerOver={(e) => handlePointerOver(e)}
            onPointerOut={handlePointerOut}
            geometry={nodes["������������_��������������_3_����������������6_0"].geometry}
            material={materials.material_3}
            position={[143.3, 245.671, 7.436]}
          />
          <mesh
            onPointerOver={(e) => handlePointerOver(e)}
            onPointerOut={handlePointerOut}
            geometry={nodes["��������������_5_����������������7_0"].geometry}
            material={materials.material_4}
            position={[0, 268.177, 43.955]}
            rotation={[1.293, 0, 0]}
          />
          <mesh
            onPointerOver={(e) => handlePointerOver(e)}
            onPointerOut={handlePointerOut}
            geometry={nodes["Retopo_Subdivision_Surface_831_����������������5_0"].geometry}
            material={materials.material_5}
            position={[-62.727, 188.619, 23.532]}
            rotation={[0.824, 0.341, -0.582]}
          />
          <mesh
            onPointerOver={(e) => handlePointerOver(e)}
            onPointerOut={handlePointerOut}
            geometry={nodes["Retopo_Subdivision_Surface_830_����������������4_0"].geometry}
            material={materials.material_6}
            position={[-81.242, 168.204, 11.128]}
            rotation={[1.789, 0.274, 1.691]}
          />
          <mesh
            onPointerOver={(e) => handlePointerOver(e)}
            onPointerOut={handlePointerOut}
            geometry={nodes["Retopo_Subdivision_Surface_829_����������������1_0"].geometry}
            material={materials.material_7}
            position={[-81.981, 168.289, 16.471]}
            rotation={[1.539, 0.296, 1.536]}
          />
          <mesh
            onPointerOver={(e) => handlePointerOver(e)}
            onPointerOut={handlePointerOut}
            geometry={nodes["Retopo_Subdivision_Surface_828_����������������2_0"].geometry}
            material={materials.material_8}
            position={[-80.023, 171.819, 26.563]}
            rotation={[1.464, 0.078, 1.161]}
          />
          <mesh
            onPointerOver={(e) => handlePointerOver(e)}
            onPointerOut={handlePointerOut}
            geometry={nodes["Retopo_Subdivision_Surface_827_����������������3_0"].geometry}
            material={materials.material_9}
            position={[-81.507, 169.519, 21.854]}
            rotation={[1.479, 0.218, 1.387]}
          />
          <mesh
            onPointerOver={(e) => handlePointerOver(e)}
            onPointerOut={handlePointerOut}
            geometry={nodes["Retopo_Subdivision_Surface_826_����������������_0"].geometry}
            material={materials.material_10}
            position={[-82.348, 180.473, 16.029]}
            rotation={[1.308, 0.019, 1.445]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/ironman.glb");
