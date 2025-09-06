"use client"
import {motion} from "framer-motion"
import { BtnList } from '../../data'
import React from 'react'
import NavButton from './NavButton';
import useScreenSize from '../hooks/useScreenSize';
import ResponsiveComponent from '../ResponsiveComponent';

const container = {
  hidden: {opacity: 0},
  show:{
    opacity: 1,
    transition:{
      staggerChildren: 0.3
    }
  }
}

const Navigation = () => {

  const angleIncrement = 360/BtnList.length;
  const size:any = useScreenSize();
  const isLarge = size > 1024;
  const isMedium = size > 768;

  return (
    <>
      <ResponsiveComponent>
        {({size}:any) => { 
          return size && size >= 480 ?     
      <motion.div 
      
      variants={container}
      initial="hidden"
      animate="show"

      className='animate-spin w-full h-screen flex items-center justify-center fixed'
        style={{
          animation: 'spin 100s linear infinite',
        }}
      >
        {
            BtnList.map((btn, index) => {
                const angleRad = (index*angleIncrement*Math.PI)/180
                const radius = isLarge ? `calc(20vw - 1rem)` :  isMedium ? `calc(30vw - 1rem)` : `calc(40vw - 1rem)` 
                const x = `calc(${radius}*${Math.cos(angleRad)})`
                const y = `calc(${radius}*${Math.sin(angleRad)})`

                return <NavButton key={btn.label} x={x} y={y} {...btn}/>
            })    
        }
      </motion.div>
      : (<>
        
      <motion.div 
      
      variants={container}
      initial="hidden"
      animate="show"
       className='animate-spin w-full h-screen flex items-center justify-center fixed'>
        {
            BtnList.slice(0, BtnList.length/2).map((btn, index) => {
                const angleRad = (index*angleIncrement*Math.PI)/180
                const radius = isLarge ? `calc(20vw - 1rem)` :  isMedium ? `calc(30vw - 1rem)` : `calc(40vw - 1rem)` 
                const x = `calc(${radius}*${Math.cos(angleRad)})`
                const y = `calc(${radius}*${Math.sin(angleRad)})`

                return <NavButton key={btn.label} x={x} y={y} {...btn}/>
            })    
        }
      </motion.div>
      
      <motion.div 
      
      variants={container}
      initial="hidden"
      animate="show"
        className='animate-spin w-full h-screen flex items-center justify-center fixed'
        style={{
          animation: 'spin 100s linear infinite',
        }}
      >
        {
            BtnList.slice(BtnList.length/2, BtnList.length).map((btn, index) => {
                const angleRad = (index*angleIncrement*Math.PI)/180
                const radius = isLarge ? `calc(20vw - 1rem)` :  isMedium ? `calc(30vw - 1rem)` : `calc(40vw - 1rem)` 
                const x = `calc(${radius}*${Math.cos(angleRad)})`
                const y = `calc(${radius}*${Math.sin(angleRad)})`

                return <NavButton key={btn.label} x={x} y={y} {...btn}/>
            })    
        }
      </motion.div>
      </>)
        }}
      </ResponsiveComponent>
    </>
  )
}

export default Navigation