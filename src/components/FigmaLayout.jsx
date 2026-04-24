/**
 * Desktop: max content 1200px; horizontal inset max(20px, (100vw − 1200px) / 2) — matches 1440 frame with 120px margins.
 * Mobile: 375 frame uses 20px padding (matches spec).
 */
export function FigmaSection({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-16 py-[60px] lg:scroll-mt-20 lg:py-[100px] ${className}`.trim()}
    >
      <div className="px-5 lg:px-[max(20px,calc((100vw-1200px)/2))]">
        <div className="mx-auto w-full max-w-[1200px]">{children}</div>
      </div>
    </section>
  )
}
