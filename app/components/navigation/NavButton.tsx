import Link from 'next/link'
import {
  Github,
  Home,
  Linkedin,
  Notebook,
  Palette,
  Phone,
  User,
  X,
} from 'lucide-react'
import React, { useState } from 'react'
import clsx from 'clsx'
import {motion} from "framer-motion"
import ResponsiveComponent from '../ResponsiveComponent'

const getIcon = (icon: string) => {
  const commonClasses = 'w-full h-auto'
  const stroke = 1.5

  switch (icon) {
    case 'home':
      return <Home className={commonClasses} strokeWidth={stroke} />
    case 'about':
      return <User className={commonClasses} strokeWidth={stroke} />
    case 'projects':
      return <Palette className={commonClasses} strokeWidth={stroke} />
    case 'contact':
      return <Phone className={commonClasses} strokeWidth={stroke} />
    case 'github':
      return <Github className={commonClasses} strokeWidth={stroke} />
    case 'linkedin':
      return <Linkedin className={commonClasses} strokeWidth={stroke} />
    case 'twitter':
      return <X className={commonClasses} strokeWidth={stroke} />
    case 'resume':
      return <Notebook className={commonClasses} strokeWidth={stroke} />
    default:
      return <Home className={commonClasses} strokeWidth={stroke} />
  }
}

const item = {
  hidden:{scale: 0},
  show: {scale: 1}
}
const NavLink = motion(Link)

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
}: {
  x: string
  y: string
  label: string
  link: string
  icon: string
  newTab?: boolean
}) => {
  const [hovered, setHovered] = useState(false)

  const baseShadow = 'inset 0 17px 5px -9px rgba(254,254,91,0.05)'
  const hoverShadow = '5px 5px 20px 0px rgba(254,254,91,0.3)'

  return (
    <ResponsiveComponent>
      {({size}:any) => {
        return size && size >= 480 ? 
        <div
          className="absolute z-50 cursor-pointer"
          style={{ transform: `translate(${x}, ${y})` }}
        >
          <NavLink
            variants={item}
            href={link}
            target={newTab ? '_blank' : '_self'}
            aria-label={label}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={clsx(
              'text-[rgb(var(--foreground))] group rounded-full flex items-center justify-center',
              'bg-[rgb(var(--background))]/20 border border-accent/30 border-solid backdrop-blur-[6px]'
            )}
            style={{
              boxShadow: hovered
                ? `${baseShadow}, ${hoverShadow}`
                : baseShadow,
              transition: 'box-shadow 0.3s ease',
            }}
          >
            <span className="relative w-14 h-14 p-4 hover:text-[rgb(var(--accent))]"
              style={{
                  animation: 'spin-reverse 100s linear infinite',
                }}>
              {getIcon(icon)}

              <span className='peer bg-[rgb(var(--transparent))] absolute top-0 w-full h-full'/>
              
              <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2
              top-1/2 -translate-y-1/2 bg-[rgb(var(--background))] text-[rgb(var(--foreground))]
              text-sm rounded-md shadow-lg whitespace-nowrap'>
                {label}
              </span>
            </span>
          </NavLink>
        </div>
      :
        <div
          className="z-50 cursor-pointer"
        >
          <NavLink
            variants={item}
            href={link}
            target={newTab ? '_blank' : '_self'}
            aria-label={label}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={clsx(
              'text-[rgb(var(--foreground))] group rounded-full flex items-center justify-center',
              'bg-[rgb(var(--background))]/20 border border-accent/30 border-solid backdrop-blur-[6px]'
            )}
            style={{
              boxShadow: hovered
                ? `${baseShadow}, ${hoverShadow}`
                : baseShadow,
              transition: 'box-shadow 0.3s ease',
            }}
          >
            <span className="relative w-14 h-14 p-4 hover:text-[rgb(var(--accent))]">
              {getIcon(icon)}

              <span className='peer bg-[rgb(var(--transparent))] absolute top-0 w-full h-full'/>
              
              <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2
              top-1/2 -translate-y-1/2 bg-[rgb(var(--background))] text-[rgb(var(--foreground))]
              text-sm rounded-md shadow-lg whitespace-nowrap'>
                {label}
              </span>
            </span>
          </NavLink>
        </div>
      }}

      
    </ResponsiveComponent>
  )
}

export default NavButton