"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Group } from 'three'

export function Staff(props:any) {
  const gltf: any = useGLTF('/models/staff-transformed.glb')
  const { nodes, materials } = gltf

  const modelRef = useRef<Group | null>(null)
  const ROTATION_SPEED = 0.5

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * ROTATION_SPEED
    }
  })

  // helper to cast node -> mesh
  const mesh = (nodeName: string) => nodes[nodeName] as THREE.Mesh

  return (
    <group
      ref={modelRef}
      {...props}
      dispose={null}
      position={[0, -3.5, 0]}
      scale={[3, 3, 3]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={mesh('Wizard_Staff3_Wizard_Staff3_0').geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={mesh('Wizard_Staff3_Wizard_Staff3_0_1').geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={mesh('Wizard_Staff3_Wizard_Staff3_0_2').geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={mesh('Wizard_Staff3_Wizard_Staff3_0_3').geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff2_Wizard_Staff2_0.geometry}
        material={materials.Wizard_Staff2}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
    </group>
  )
}

useGLTF.preload('/models/staff-transformed.glb')
