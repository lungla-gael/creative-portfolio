"use client"
import React from 'react'
import ProjectLayout from './ProjectLayout'
import { motion } from 'framer-motion'


const container = {
  hidden: {opacity: 0},
  show:{
    opacity: 1,
    transition:{
      staggerChildren: 0.3,
      delayChildren: 1.5
    }
  }
}

const ProjectList = ({ projects }: any) => {
  return (
    <motion.div 
    variants={container}
    initial="hidden"
    animate="show"

    className='w-full max-w-4xl px-16 space-y-8 flex flex-col items-center'>
        {projects.map((project: any, index: any) => {
            return <ProjectLayout key={index} {...project}/>
        })}
    </motion.div>
  )
}

export default ProjectList