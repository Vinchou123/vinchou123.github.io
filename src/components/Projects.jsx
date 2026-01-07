import React from 'react'
import { motion } from 'framer-motion'

const sampleProjects = [
  { id: 1, title: 'Analyse de sentiments NLP', desc: 'Pipeline complet en Python (BERT, Transformers). Dashboard React avec Plotly pour visualisation et analyse en temps réel.' },
  { id: 2, title: 'Prévision séries temporelles', desc: 'Modèles ARIMA, Prophet et LSTM pour données financières. Évaluation RMSE/MAE avec validation croisée.' },
  { id: 3, title: 'Clustering & Segmentation', desc: 'K-means, DBSCAN, clustering hiérarchique. Segmentation clients pour optimisation marketing.' },
  { id: 4, title: 'Computer Vision - Classification', desc: 'CNN TensorFlow/Keras pour classification d\'images. Fine-tuning ResNet, EfficientNet.' },
  { id: 5, title: 'Data Pipeline AWS', desc: 'ETL avec Lambda, S3, RDS. Automatisation nettoyage et transformation données volumineuses.' },
  { id: 6, title: 'Dashboard Analytics Interactif', desc: 'Plotly & Streamlit pour visualisation KPIs temps réel. Filtres dynamiques, rapports automatisés.' },
]

export default function Projects(){
  const list = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  }
  const item = {
    hidden: { opacity: 0, y: 12, rotateX: 8 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }
  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >Projets</motion.h3>

        <motion.div className="project-list" variants={list} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {sampleProjects.map((p, i) => (
            <motion.article key={p.id} className="project-card" variants={item} whileHover={{ translateY: -8, scale: 1.03, rotateX: 4 }} transition={{ type: 'spring', stiffness: 260 }}>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
