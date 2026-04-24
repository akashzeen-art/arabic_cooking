import { useEffect, useRef } from 'react'

const EMOJIS = ['🌶️', '🧄', '🫒', '🌿', '🧅', '🍋', '🥄', '🫙', '🧂', '✨', '🔥', '🫕', '🥕', '🍃', '🫚', '🪴']

export default function CookingParticles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const particles = []

    function spawn() {
      const el = document.createElement('span')
      el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
      const size = 14 + Math.random() * 20
      const left = Math.random() * 100
      const duration = 10 + Math.random() * 12
      const delay = Math.random() * 8

      el.style.cssText = `
        position: fixed;
        left: ${left}vw;
        top: -60px;
        font-size: ${size}px;
        opacity: 0;
        pointer-events: none;
        z-index: 1;
        animation: spice-fall ${duration}s ${delay}s linear infinite;
        filter: blur(0.2px);
      `
      container.appendChild(el)
      particles.push(el)
    }

    for (let i = 0; i < 18; i++) spawn()
    return () => particles.forEach((p) => p.remove())
  }, [])

  return <div ref={containerRef} aria-hidden className="pointer-events-none" />
}
