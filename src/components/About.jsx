import React from 'react'
import { motion } from 'framer-motion'
import Timeline from './Timeline'

export default function About(){
  const timelineItems = [
    {
      title: 'Expert Informatique & IA (RNCP 35078)',
      subtitle: 'Ynov Bordeaux Campus',
      year: '2023 - 2028',
      desc: "Spécialisation Data & Intelligence Artificielle. Machine Learning, Deep Learning, NLP, vision par ordinateur et pipelines de données.",
      icon: '🤖'
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      subtitle: 'Amazon Web Services',
      year: '2024',
      desc: 'Maîtrise des services AWS pour le ML et l\'analyse de données : SageMaker, Lambda, S3, RDS, CloudWatch.',
      icon: '☁️'
    },
    {
      title: 'Formation spécialisée Data & ML',
      subtitle: 'Ynov Bordeaux',
      year: '2023 - 2024',
      desc: 'Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch. Statistiques avancées, feature engineering et optimisation de modèles.',
      icon: '📊'
    }
  ]
  return (
    <section className="about" id="about">
      <div className="container">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >À propos</motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >Je suis Vincent Luu, étudiant en 3e année à Ynov Bordeaux spécialisé en <strong>Data & Intelligence Artificielle</strong>. Mon expertise couvre l'analyse de données, le machine learning, et l'optimisation de modèles prédictifs. Je combine les technologies modernes (Python, AWS, TensorFlow) avec une approche data-driven pour résoudre des problèmes complexes.</motion.p>

        <div className="about-timeline">
          <h4>Formation & Certifications</h4>
          <Timeline items={timelineItems} />
        </div>
      </div>
    </section>
  )
}
