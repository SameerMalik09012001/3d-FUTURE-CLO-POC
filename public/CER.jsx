import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Color } from "three";

export default function Model({ metalness, roughness, props, scale, setColor, color, position }) {
  const { nodes, materials } = useGLTF("/CER.glb");

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
    <group {...props} position={position} scale={scale} dispose={null}>
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_1.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_2.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_3.geometry}
        material={materials["Default Topstitch_304746"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_4.geometry}
        material={materials["Default Topstitch_304746"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_5.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_6.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_7.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_8.geometry}
        material={materials["Default Buttonhole_304679"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_9.geometry}
        material={materials["Default Buttonhole_304679"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_10.geometry}
        material={materials["Default Topstitch_304746"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_11.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_12.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_13.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_14.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_15.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_16.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_17.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_18.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_19.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_20.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_21.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_22.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_23.geometry}
        material={materials["Default Topstitch_304746"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_24.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_25.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_26.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_27.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_28.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_29.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_30.geometry}
        material={materials["Default Topstitch_304746"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_31.geometry}
        material={materials["Default Topstitch_304746"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_32.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_33.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_34.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_35.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_36.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_37.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_38.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_39.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_40.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_41.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_42.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_43.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_44.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_45.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_46.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_47.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_48.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_49.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_50.geometry}
        material={materials["Default Topstitch_304746"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_51.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_52.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_53.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_54.geometry}
        material={materials["Default Topstitch_304746"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_55.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_56.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_57.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_58.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_59.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_60.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_61.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_62.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_63.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_64.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_65.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_66.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_67.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_68.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_69.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_70.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_71.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_72.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_73.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_74.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_75.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_76.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_77.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_78.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_79.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_80.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_81.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_82.geometry}
        material={materials["ETICHETTA 2_2593559"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_83.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_84.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_85.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_86.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_87.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_88.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_89.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_90.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_91.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_92.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_93.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_94.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_95.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_96.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_97.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_98.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_99.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_100.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_101.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_102.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_103.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_104.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_105.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_106.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_107.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_108.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_109.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_110.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_111.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_112.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_113.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_114.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_115.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_116.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_117.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_118.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_119.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_120.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_121.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_122.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_123.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_124.geometry}
        material={materials["PATTERN 1_304563"]}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_125.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_126.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_127.geometry}
        material={materials.Cotton_Sateen_789150}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_128.geometry}
        material={materials.Cotton_Twill_2878141}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_129.geometry}
        material={materials.Cotton_Twill_2878141}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_130.geometry}
        material={materials.Cotton_Twill_2878141}
      />
      <mesh
        onPointerOver={(e) => handlePointerOver(e)}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cloth_mesh_131.geometry}
        material={materials["ETICHETTA 1_2918045"]}
      />
      <group position={[0.004, 1.196, 0.125]} rotation={[-3.072, 1.236, -1.628]} scale={10}>
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_2182596.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2341576"]}
        />
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_2182596_1.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2341579"]}
        />
      </group>
      <group position={[-0.014, 1.085, 0.127]} rotation={[-1.084, -1.486, -2.634]} scale={10}>
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8168747.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2341576"]}
        />
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8168747_1.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2341579"]}
        />
      </group>
      <group position={[0.282, 0.93, 0.082]} rotation={[3.008, -0.02, -1.539]} scale={[5.911, 10, 5.911]}>
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8543439.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2392607"]}
        />
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8543439_1.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2392610"]}
        />
      </group>
      <group position={[0.282, 0.941, 0.078]} rotation={[3.008, -0.053, -1.536]} scale={[5.911, 10, 5.911]}>
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8552714.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2392607"]}
        />
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8552714_1.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2392610"]}
        />
      </group>
      <group position={[0.283, 0.953, 0.073]} rotation={[3.01, -0.077, -1.541]} scale={[5.911, 10, 5.911]}>
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8552781.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2392607"]}
        />
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8552781_1.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2392610"]}
        />
      </group>
      <group position={[0.283, 0.964, 0.069]} rotation={[3.01, -0.118, -1.552]} scale={[5.911, 10, 5.911]}>
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8552837.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2392607"]}
        />
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8552837_1.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2392610"]}
        />
      </group>
      <group position={[-0.283, 0.964, 0.069]} rotation={[3.009, 0.121, 1.547]} scale={[5.911, 10, 5.911]}>
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8553420.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2392607"]}
        />
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8553420_1.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2392610"]}
        />
      </group>
      <group position={[-0.283, 0.953, 0.073]} rotation={[3.008, 0.077, 1.542]} scale={[5.911, 10, 5.911]}>
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8553464.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2392607"]}
        />
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8553464_1.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2392610"]}
        />
      </group>
      <group position={[-0.282, 0.942, 0.078]} rotation={[3.008, 0.052, 1.534]} scale={[5.911, 10, 5.911]}>
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8553509.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2392607"]}
        />
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8553509_1.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2392610"]}
        />
      </group>
      <group position={[-0.282, 0.93, 0.082]} rotation={[3.008, 0.022, 1.538]} scale={[5.911, 10, 5.911]}>
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8553557.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2392607"]}
        />
        <mesh
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={handlePointerOut}
          geometry={nodes.Button_8553557_1.geometry}
          material={materials["SAB-BP-four-hole button-32L-Cross-ID46764B_2392610"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/CER.glb");
