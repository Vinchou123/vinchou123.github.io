import React from 'react'
import { motion } from 'framer-motion'

export default function Footer(){
  return (
    <footer className="site-footer">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="container footer-inner"
      >
        <p>© {new Date().getFullYear()} Vincent — 3e année Informatique, Ynov Bordeaux</p>
        <p>Mail: <a href="mailto:vincent.luu@ynov.com">vincent.luu@ynov.com</a> • Tel: <a href="tel:+33621849346">06 21 84 93 46</a></p>
        <div className="socials">
          <a href="https://github.com/Vinchou123" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/vincent-luu-6b8287319/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </motion.div>
    </footer>
  )
}
