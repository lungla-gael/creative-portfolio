"use client"
import React from 'react'
import useScreenSize from './hooks/useScreenSize';

const ResponsiveComponent = ({
  children,
}:any) => {
    const size = useScreenSize();
    console.log(size)
  return (
    <>
       {children({size})} 
    </>
  )
}

export default ResponsiveComponent