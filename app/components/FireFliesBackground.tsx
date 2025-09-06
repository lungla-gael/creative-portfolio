"use client"
import React, {useEffect, useState} from 'react'

type Firefly = {
  id: number;
  top: string;
  left: string;
  animationDuration: string;
};

const createFireFly = () => ({
    id: Math.random(),
    top: `${Math.random()*100}%`,
    left: `${Math.random()*100}%`,
    animationDuration: `${Math.random()*5 + 5}s`
})

const FireFliesBackground = () => {

  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  useEffect(() => {
    const addFireflyPeriodically = () => {
        const newFirefly = createFireFly();
        setFireflies(prev => [...prev.slice(-14), newFirefly])
    }
    const interval = setInterval(addFireflyPeriodically, 10000);
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>
        {
            fireflies.map((firefly) => {
                return( 
                    <div 
                        key={firefly.id}
                        className='absolute rounded-full bg-[rgb(var(--accent))] w-[10px] h-[10px]'
                        style={{
                            background: "radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217, 217, 217, 0) 100%)",
                            top: firefly.top,
                            left: firefly.left,
                            animation: `move ${firefly.animationDuration} infinite alternate`
                        }}> 
                    </div>
                )
            })
        }
    </div>
  )
}

export default FireFliesBackground

