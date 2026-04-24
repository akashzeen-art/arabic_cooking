import { motion } from 'framer-motion'

const SPICES = ['🌶️', '🧂', '🫚', '🌿', '✨', '🧄']

export default function SpiceSprinkle() {
  return (
    <div className="relative flex items-center justify-center py-6 overflow-hidden" aria-hidden>

      {/* raining spices */}
      {SPICES.map((s, i) => (
        <motion.span key={s} className="pointer-events-none absolute text-base"
          style={{ left: `${8 + i * 16}%`, top: -10 }}
          animate={{ y: [0, 50], opacity: [0, 0.7, 0], rotate: [0, 360] }}
          transition={{ duration: 2, delay: i * 0.35, repeat: Infinity, ease: 'linear' }}>
          {s}
        </motion.span>
      ))}

      {/* lines + fire */}
      <motion.div className="h-px flex-1 bg-gradient-to-r from-transparent to-orange-400/40"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 1 }} style={{ originX: 0 }} />

      <div className="mx-4 flex items-center gap-2">
        <motion.span className="text-2xl"
          animate={{ scale: [1, 1.3, 1], rotate: [-5, 5, -5] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}>🔥</motion.span>
        <motion.span className="text-xl"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}>🫙</motion.span>
        <motion.span className="text-2xl"
          animate={{ scale: [1, 1.3, 1], rotate: [5, -5, 5] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}>🔥</motion.span>
      </div>

      <motion.div className="h-px flex-1 bg-gradient-to-l from-transparent to-orange-400/40"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 1 }} style={{ originX: 1 }} />
    </div>
  )
}
