import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Mesh, Material, Group } from "three";
import type { ThreeElements } from "@react-three/fiber"; // ✅ Correct import

type GLTFResult = {
  nodes: {
    Object_2: Mesh;
  };
  materials: {
    initialShadingGroup: Material;
  };
};

// ✅ Use ThreeElements['group'] instead of GroupProps
export function Hat(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF("/models/hat-transformed.glb") as unknown as GLTFResult;

  const modelRef = useRef<Group | null>(null);
  const ROTATION_SPEED = 0.5;

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * ROTATION_SPEED;
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      scale={[1.4, 1.4, 1.4]}
      rotation={[0.4, -1, 0]}
      position={[0, 0.7, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.initialShadingGroup}
        position={[0, -3.867, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/hat-transformed.glb");