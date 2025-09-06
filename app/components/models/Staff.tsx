"use client"
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, ThreeElements } from "@react-three/fiber";
import * as THREE from "three";
import { Group } from "three";

// Define the structure of your GLTF model
type GLTFResult = {
  nodes: {
    Wizard_Staff3_Wizard_Staff3_0: THREE.Mesh;
    Wizard_Staff3_Wizard_Staff3_0_1: THREE.Mesh;
    Wizard_Staff3_Wizard_Staff3_0_2: THREE.Mesh;
    Wizard_Staff3_Wizard_Staff3_0_3: THREE.Mesh;
    Wizard_Staff2_Wizard_Staff2_0: THREE.Mesh;
  };
  materials: {
    Wizard_Staff3: THREE.Material;
    Wizard_Staff2: THREE.Material;
  };
};

export function Staff(props: ThreeElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/staff-transformed.glb"
  ) as unknown as GLTFResult;

  const modelRef = useRef<Group | null>(null);
  const ROTATION_SPEED = 0.5;

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * ROTATION_SPEED;
    }
  });

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
        geometry={nodes.Wizard_Staff3_Wizard_Staff3_0.geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff3_Wizard_Staff3_0_1.geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff3_Wizard_Staff3_0_2.geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff3_Wizard_Staff3_0_3.geometry}
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
  );
}

useGLTF.preload("/models/staff-transformed.glb");
