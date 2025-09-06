import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

const item = {
  hidden:{scale: 0, y: 100},
  show: {scale: 1, y: 0}
}
const NavLink = motion(Link)

const ProjectLayout = ({name, description, date, demoLink}:any) => {
  const [hovered, setHovered] = useState(false)

  const baseShadow = 'inset 0 17px 5px -9px rgba(254,254,91,0.05)'
  const hoverShadow = '5px 5px 20px 0px rgba(254,254,91,0.3)'

  return (
    <NavLink 
    variants={item}
    
        href={demoLink}
        target={'_blank'}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className='flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6
                    bg-[rgb(var(--background))]/20 border border-[rgb(var(--accent))]/30 border-solid backdrop-blur-[6px]'
        style={{
          boxShadow: hovered
            ? `${baseShadow}, ${hoverShadow}`
            : baseShadow,
          transition: 'box-shadow 0.3s ease',
        }}
        >
        <div className='flex items-center justify-center space-x-2'>
            <h2 className='text-[rgb(var(--foreground))]'>{name}</h2>
            <p className='text-[rgb(var(--muted))]'>{description}</p>
        </div>
        <div className='self-end flex-1 mx-2 mb-1 bg-[rgb(var(--transparent))] border-b border-dashed border-muted'/>
        <p className='text-[rgb(var(--foreground))]'>
            {new Date(date).toDateString()}
        </p>
    </NavLink>
  )
}

export default ProjectLayout