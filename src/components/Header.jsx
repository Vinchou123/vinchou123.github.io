import React from 'react'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'
import { Link } from 'react-router-dom'
const MotionLink = motion(Link)

export default function Header(){
  return (
    <header className="site-header">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="header-inner"
      >
        <h1 className="logo">VL</h1>
        <nav className="nav">
          <MotionLink whileHover={{ y: -3 }} to="/">Accueil</MotionLink>
          <MotionLink whileHover={{ y: -3 }} to="/about">À propos</MotionLink>
          <MotionLink whileHover={{ y: -3 }} to="/projects">Projets</MotionLink>
          <MotionLink whileHover={{ y: -3 }} to="/contact">Contact</MotionLink>
        </nav>
        <ThemeToggle />
      </motion.div>
    </header>
  )
}

function ThemeToggle(){
  const { theme, toggle } = useContext(ThemeContext)
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Basculer thème">
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
