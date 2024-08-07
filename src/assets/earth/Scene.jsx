import React from 'react'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'


export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Sphere_Material002_0.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
