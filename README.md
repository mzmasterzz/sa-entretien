# S&A Entretien - Service de Nettoyage Professionnel

Un site web moderne et responsive pour une entreprise de nettoyage professionnel à Québec.

## 🚀 Fonctionnalités

### ✅ **SEO Optimisé**
- Meta tags complets pour les moteurs de recherche
- Schema.org markup pour les entreprises locales
- Sitemap.xml et robots.txt
- Open Graph tags pour les réseaux sociaux
- Structure HTML sémantique

### ✅ **Performance**
- Images optimisées et lazy loading
- CSS et JavaScript minifiés
- Preconnect pour les ressources externes
- Animations fluides et optimisées

### ✅ **Accessibilité**
- Navigation au clavier
- Skip links
- ARIA labels
- Contraste des couleurs optimisé
- Compatible avec les lecteurs d'écran

### ✅ **Analytics & Tracking**
- Google Analytics 4
- Google Tag Manager
- Tracking des événements utilisateur
- Conversion tracking

### ✅ **Responsive Design**
- Mobile-first approach
- Breakpoints optimisés
- Navigation mobile intuitive
- Images adaptatives

## 📁 Structure du Projet

```
h-media/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript
├── sitemap.xml         # Sitemap pour SEO
├── robots.txt          # Instructions pour les crawlers
├── README.md           # Documentation
└── images/             # Dossier des images (à créer)
```

## 🛠️ Installation

### Prérequis
- Serveur web (Apache, Nginx, ou serveur local)
- Navigateur moderne

### Installation Locale

1. **Cloner ou télécharger le projet**
```bash
git clone [url-du-repo]
cd h-media
```

2. **Démarrer un serveur local**
```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx http-server

# Avec PHP
php -S localhost:8000
```

3. **Ouvrir dans le navigateur**
```
http://localhost:8000
```

## 🌐 Déploiement

### GitHub Pages
1. Créer un repository GitHub
2. Uploader les fichiers
3. Aller dans Settings → Pages
4. Sélectionner "Deploy from a branch"
5. Choisir la branche "main"

### Autres Options
- **Netlify**: Drag & drop des fichiers
- **Vercel**: Connecter le repository GitHub
- **Hébergement traditionnel**: Upload via FTP

## ⚙️ Configuration

### Google Analytics
1. Créer un compte Google Analytics
2. Remplacer `GA_MEASUREMENT_ID` dans `index.html`
3. Remplacer `GTM-XXXXXXX` avec votre ID GTM

### Informations de Contact
Modifier les informations dans `index.html`:
- Numéro de téléphone
- Adresse email
- Adresse physique
- Heures d'ouverture

### Services et Prix
Mettre à jour les services et forfaits dans `index.html`

## 🎨 Personnalisation

### Couleurs
Modifier les variables CSS dans `styles.css`:
```css
:root {
    --primary-color: #fbbf24;    /* Couleur principale */
    --secondary-color: #1f2937;  /* Couleur secondaire */
    --bg-color: #111827;         /* Arrière-plan */
    --text-color: #f9fafb;       /* Texte */
}
```

### Images
- Remplacer les images placeholder par vos propres images
- Optimiser les images pour le web (format WebP recommandé)
- Ajouter des images pour les réseaux sociaux (1200x630px)

## 📱 Fonctionnalités Mobile

- Navigation hamburger responsive
- Formulaires optimisés pour mobile
- Boutons tactiles de taille appropriée
- Performance optimisée pour les connexions lentes

## 🔍 SEO

### Mots-clés Ciblés
- nettoyage Québec
- service de nettoyage
- nettoyage résidentiel
- nettoyage commercial
- nettoyage après rénovation
- entretien ménager

### Optimisations Incluses
- Meta descriptions optimisées
- Balises H1-H6 structurées
- URLs propres
- Schema.org markup
- Sitemap XML

## 📊 Analytics

### Événements Trackés
- Soumissions de formulaire
- Clics sur les services
- Navigation entre sections
- Utilisation du menu mobile
- Temps passé sur le site

## 🔧 Maintenance

### Mises à Jour Régulières
- Vérifier les liens externes
- Mettre à jour les informations de contact
- Optimiser les images
- Vérifier la performance

### Sécurité
- HTTPS obligatoire
- Headers de sécurité
- Validation des formulaires
- Protection contre les injections

## 📞 Support

Pour toute question ou support technique, contactez-nous :
- Email: contact@saentretien.com
- Téléphone: (514) 555-0123

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

---

**Développé avec ❤️ pour S&A Entretien** 