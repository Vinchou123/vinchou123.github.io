import React from 'react'
import { motion } from 'framer-motion'

export default function Timeline({ items = [] }){
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  }
  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.ul className="timeline" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {items.map((it, i) => (
        <motion.li key={i} className="timeline-item" variants={item}>
          <div className="timeline-dot" aria-hidden>{it.icon || '•'}</div>
          <div className="timeline-body">
            <div className="timeline-meta">
              <strong>{it.title}</strong>
              <span className="muted"> — {it.subtitle}</span>
            </div>
            <div className="timeline-year">{it.year}</div>
            <p className="timeline-desc">{it.desc}</p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  )
}
