import { useState } from 'react'
import { motion } from 'framer-motion'
import { FigmaSection } from './FigmaLayout.jsx'

export default function Newsletter() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    window.setTimeout(() => setSent(false), 3200)
    e.currentTarget.reset()
  }

  return (
    <FigmaSection id="newsletter">
      <motion.div
        className="mx-auto w-full max-w-[600px]"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-12%' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="glass-panel-strong relative flex min-h-[180px] flex-col justify-center overflow-hidden px-[30px] py-[30px]">
          <div className="pointer-events-none absolute -right-20 top-0 h-48 w-48 rounded-full bg-amber-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />

          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-amber-200/85">
            Stay in the loop
          </p>
          <h2 className="mt-3 text-center font-display text-2xl font-bold text-white lg:text-3xl">
            Newsletter
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-sm text-white/70">
            New drops, seasonal menus, and technique deep-dives — no spam, ever.
          </p>

          <form
            className="relative mx-auto mt-6 flex w-full flex-col gap-3 lg:mt-8 lg:flex-row lg:items-stretch"
            onSubmit={handleSubmit}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email
            </label>
            <motion.input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="newsletter-input h-[50px] w-full rounded-[14px] border border-white/12 bg-black/35 px-4 text-[15px] text-white placeholder:text-white/35 outline-none backdrop-blur-md lg:w-[65%] lg:rounded-2xl lg:px-5"
              whileFocus={{
                scale: 1.01,
                borderColor: 'rgba(251, 191, 36, 0.45)',
                boxShadow: '0 0 0 3px rgba(251, 191, 36, 0.18), 0 0 28px -6px rgba(251, 191, 36, 0.35)',
              }}
              transition={{ duration: 0.25 }}
            />
            <motion.button
              type="submit"
              className="h-[50px] w-full shrink-0 rounded-[14px] bg-gradient-to-r from-amber-400 to-orange-500 text-[14px] font-semibold text-stone-900 shadow-lg shadow-amber-900/25 lg:w-[35%] lg:rounded-2xl"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe
            </motion.button>
          </form>

          <motion.p
            className="mt-4 text-center text-sm font-medium text-amber-200/90"
            initial={false}
            animate={{ opacity: sent ? 1 : 0, y: sent ? 0 : 6 }}
            transition={{ duration: 0.35 }}
          >
            {sent ? 'Thanks — you are on the list.' : '\u00a0'}
          </motion.p>
        </div>
      </motion.div>
    </FigmaSection>
  )
}
