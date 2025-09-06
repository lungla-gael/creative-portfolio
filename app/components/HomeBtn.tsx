"use client"
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const NavLink = motion(Link)

const HomeBtn = () => {
  const [hovered, setHovered] = useState(false)

  const baseShadow = 'inset 0 17px 5px -9px rgba(254,254,91,0.05)'
  const hoverShadow = '5px 5px 20px 0px rgba(254,254,91,0.3)'
  return (
    <NavLink
    initial={{scale: 0}}
    animate={{scale: 1}}
    transition={{delay: 1}}

    href={"/"}
    target={'_self'}
    aria-label={"home"}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    className={clsx(
        'text-[rgb(var(--foreground))] group rounded-full flex items-center justify-center',
        'bg-[rgb(var(--background))]/20 border border-[rgb(var(--accent))]/30 border-solid backdrop-blur-[6px]',
        'fixed top-4'
    )}
    style={{
        boxShadow: hovered
        ? `${baseShadow}, ${hoverShadow}`
        : baseShadow,
        transition: 'box-shadow 0.3s ease',
    }}
    >
    <span className="relative w-14 h-14 p-4 hover:text-[rgb(var(--accent))]">
        <Home className='w-full h-auto' strokeWidth={1.5}/>

        <span className='peer bg-[rgb(var(--transparent))] absolute top-0 w-full h-full'/>
        
        <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2
        top-1/2 -translate-y-1/2 bg-[rgb(var(--background))] text-[rgb(var(--foreground))]
        text-sm rounded-md shadow-lg whitespace-nowrap'>
        Home
        </span>
    </span>
    </NavLink>
  )
}

export default HomeBtn