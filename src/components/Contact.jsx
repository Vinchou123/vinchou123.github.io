import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Contact(){
  const form = useRef()
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Utilise les variables d'environnement Vite si présentes, sinon remplacez par vos identifiants EmailJS
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

    setSending(true)
    setStatus(null)
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus({ ok: true, msg: 'Message envoyé, merci !' })
        form.current.reset()
      }, (error) => {
        console.error(error)
        setStatus({ ok: false, msg: "Erreur lors de l'envoi. Vérifiez la configuration." })
      })
      .finally(() => setSending(false))
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >Contact</motion.h3>

        <div className="contact-grid">
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:vincent.luu@ynov.com">vincent.luu@ynov.com</a></p>
            <p><strong>Téléphone:</strong> <a href="tel:+33621849346">06 21 84 93 46</a></p>
            <p>Envoyez-moi un message via le formulaire — il arrivera sur mon adresse mail.</p>
          </div>

          <motion.form ref={form} onSubmit={handleSubmit} className="contact-form" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <input name="from_name" placeholder="Votre nom" required />
            <input name="reply_to" placeholder="Votre email" type="email" required />
            <input name="phone" placeholder="Téléphone" />
            <textarea name="message" placeholder="Votre message" rows="6" required></textarea>
            <button type="submit" className="btn" disabled={sending}>{sending ? 'Envoi...' : 'Envoyer'}</button>
            {status && (
              <p className={`status ${status.ok ? 'success' : 'error'}`}>{status.msg}</p>
            )}
          </motion.form>
        </div>

      </div>
    </section>
  )
}
