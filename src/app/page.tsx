"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion"

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function ImageSection({ id, src, scrollYProgress }: { id: number; src: string; scrollYProgress: MotionValue<number> }) {
  const y = useParallax(scrollYProgress, 50)
  const x = useTransform(
    scrollYProgress,
    [0.1 * (id - 1), 0.1 * id],
    ["100%", "0%"]
  )
  const opacity = useTransform(
    scrollYProgress,
    [0.1 * (id - 1), 0.1 * (id - 1) + 0.05],
    [0, 1]
  )

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '50%',
        left: `${(id - 1) * 20}%`,
        transform: 'translateY(-50%)',
        x,
        opacity
      }}
    >
      <img src={src} alt={`Dummy image ${id}`} style={{ width: '200px', height: '300px', objectFit: 'cover' }} />
      <motion.h2 style={{ y, position: 'absolute', left: '100%', marginLeft: '20px', whiteSpace: 'nowrap' }}>{`#00${id}`}</motion.h2>
    </motion.div>
  )
}

export default function ScrollAnimation() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const images = [
    "https://dummyimage.com/600x400/000/fff&text=1",
    "https://dummyimage.com/600x400/000/fff&text=2",
    "https://dummyimage.com/600x400/000/fff&text=3",
    "https://dummyimage.com/600x400/000/fff&text=4",
    "https://dummyimage.com/600x400/000/fff&text=5",
  ]

  return (
<>
<div ref={containerRef} style={{ height: '300vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        {images.map((src, index) => (
          <ImageSection key={index} id={index + 1} src={src} scrollYProgress={scrollYProgress} />
        ))}
      </div>
      <motion.div className="progress" style={{ scaleX }} />

    </div>
          <div className="min-h-[1280px] border-2 border-blue-500"></div></>

  )
}