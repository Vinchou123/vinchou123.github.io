import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import profileImg from '../../photoDeProfil.jpg'

const MotionLink = motion(Link)

export default function Hero(){
  return (
    <section className="hero" id="home">
      <div className="bg-shape" aria-hidden></div>
      <div className="bg-shape left" aria-hidden></div>
      <div className="container hero-grid">
        <motion.div className="hero-photo" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
          <img src={profileImg} alt="Photo de Vincent" className="profile-img" />
        </motion.div>

        <div className="hero-content">
          <motion.h2
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >Bonjour — je suis <span className="accent">Vincent</span></motion.h2>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="hero-sub"
          >Étudiant en 3e année à <strong>Ynov Bordeaux</strong>, spécialisé en <strong>Data & Intelligence Artificielle</strong>. Je crée des solutions basées sur le machine learning et l'analyse de données. Passionné par Python, AWS et l'optimisation de pipelines data.</motion.p>

          <motion.div className="hero-actions" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <MotionLink to="/projects" className="cta" whileHover={{ scale: 1.04, y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>Voir mes projets</MotionLink>
            <MotionLink to="/contact" className="cta outline" whileHover={{ scale: 1.02 }}>Me contacter</MotionLink>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
