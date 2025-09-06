"use client"
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import React, { Suspense } from 'react'

interface RenderModelProps {
  children: React.ReactNode
  className?: string
}

const RenderModel = ({ children, className }: RenderModelProps) => {
  return (
    <div className="h-screen w-screen">   
      <Canvas className={clsx('absolute inset-0 -z-10', className)}>
        <Suspense fallback={null}>
          {children}
        </Suspense>
        <Environment preset="dawn" />
      </Canvas>
    </div>
  )
}

export default RenderModel