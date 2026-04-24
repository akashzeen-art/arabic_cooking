import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const MotionVideo = motion.video

const VideoBackground = forwardRef(function VideoBackground(
  { src, loop, introZoom },
  ref,
) {
  return (
    <MotionVideo
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full object-cover"
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      loop={loop}
      aria-hidden
      initial={false}
      animate={{ scale: introZoom ? 1.08 : 1 }}
      transition={{
        duration: introZoom ? 5.4 : 1.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  )
})

export default VideoBackground
