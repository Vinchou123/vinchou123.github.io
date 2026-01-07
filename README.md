# Portfolio — Vincent

Petit portfolio animé en React pour présenter ton profil Data & IA et permettre l'envoi de messages vers `vincent.luu@ynov.com`.

## Tech
- React (Vite)
- Framer Motion (animations)
- EmailJS (envoi d'emails depuis le frontend)

## Installer & lancer
1. Installer les dépendances

```powershell
cd c:\Users\vince\Desktop\Portofolio; npm install
```

2. Lancer en développement

```powershell
npm run dev
```

## Configurer le formulaire de contact (EmailJS)
Le code utilise EmailJS pour envoyer le formulaire côté client. Procédure :

1. Crée un compte sur https://www.emailjs.com
2. Crée un service (par ex. SMTP) et un template d'email.
3. Récupère : SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
4. Remplace les valeurs dans `src/components/Contact.jsx` (constantes) par les identifiants fournis.

Option (recommandée) : crée un fichier `.env` à la racine et ajoute :

```
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=public_xxx
```

Puis relance le serveur `npm run dev`.

## Déploiement rapide

1. Vercel : connecte ton dépôt GitHub et importe le projet, la commande de build est `npm run build` et le dossier de sortie est `dist`.
2. Netlify : idem, configure la commande `npm run build` et le dossier `dist`.

Assure-toi d'ajouter les variables d'environnement (VITE_EMAILJS_*) dans les réglages du site sur la plateforme de déploiement.

## Nouvelle organisation — pages séparées

J'ai ajouté des routes et des pages séparées (React Router) :

- `/` : page d'accueil (Hero + Aperçu)
- `/about` : page À propos
- `/projects` : page Projets (liste complète)
- `/contact` : page Contact (formulaire)

Après avoir ajouté la dépendance `react-router-dom` (déjà ajoutée au `package.json`), lance `npm install` pour récupérer le package.

### Déploiement Vercel (pratique)

J'ai ajouté un fichier `vercel.json` pour que Vercel construise le site en utilisant `@vercel/static-build` et le dossier `dist`. Procédure rapide :

1. Pousse ton repo sur GitHub.
2. Depuis vercel.com, "Import Project" → choisis ton repo.
3. Dans les Settings du projet Vercel, ajoute les variables d'environnement : `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.
4. Déploie : Vercel fera automatiquement la build et te donnera une URL de preview.

> Je peux préparer le commit et créer un dépôt GitHub pour toi si tu veux (tu devras me donner un Personal Access Token `repo` ou m'ajouter en tant que collaborateur). Si tu préfères, je prépare le repo local et je te donne les commandes pour push (plus simple et sûr).

## Ajout de ta photo et liens sociaux
- Place ton image dans `src/assets/profile.jpg` (un README est fourni en `src/assets/README.txt`) — je l'utiliserai automatiquement dans la page d'accueil.
- Tes liens GitHub et LinkedIn ont été ajoutés au header et au footer.

## Prochaine étape - GitHub
- Si tu veux que je crée le repo GitHub à ta place, fournis un Personal Access Token (scopes: repo) ou ajoute-moi en tant que collaborateur; sinon, copie/colle ces commandes pour créer & pousser le repo depuis ta machine :

```powershell
cd c:\Users\vince\Desktop\Portofolio
git init
git add .
git commit -m "Initial portfolio"
# Crée un repo sur GitHub (manuellement via UI) puis :
git remote add origin https://github.com/<ton-username>/<nom-du-repo>.git
git branch -M main
git push -u origin main
```

> Tu m'as demandé de ne pas lancer de test Vercel — je m'en tiendrai donc à préparer le repo et la doc, c'est toi qui feras le push final, sauf si tu me fournis un token.

## Options avancées
- Si tu préfères ne pas exposer une clé côté client, je peux ajouter une petite API Express + Nodemailer qui reçoit le formulaire et envoie le mail côté serveur (nécessite un hébergement backend).
- Je peux aussi ajouter des animations supplémentaires, des tests unitaires, ou préparer un déploiement continu.
- **Note :** J'ai modernisé le design du projet (centré, glassmorphism, animations, formes de fond) — dis-moi si tu veux un thème clair ou d'autres couleurs.

Exemple de template email :
- from_name -> {{from_name}}
- reply_to  -> {{reply_to}}
- phone     -> {{phone}}
- message   -> {{message}}

> Si tu préfères ne pas utiliser EmailJS, on peut ajouter une petite API Node + Nodemailer pour envoyer les mails depuis un backend.

## Personnalisation
- Modifie `src/components/Hero.jsx` et `About.jsx` pour ajuster le texte
- Ajoute des projets dans `src/components/Projects.jsx`
- Remplace les couleurs et polices dans `src/styles.css`

---

Si tu veux, je peux aussi :
- Ajouter une animation d'entrée plus élaborée
- Mettre en place un backend Express/Nodemailer au cas où tu préfères ne pas exposer de clés côté client
- Préparer un déploiement (Netlify / Vercel)
