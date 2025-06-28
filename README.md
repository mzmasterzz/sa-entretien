# SA Entretien - Service de Nettoyage Professionnel

Un site web moderne et responsive pour une entreprise de nettoyage professionnel, conçu avec une interface utilisateur améliorée et une expérience utilisateur optimisée.

## 🚀 Fonctionnalités

### Design & Interface
- **Design moderne et professionnel** avec une palette de couleurs cohérente
- **Interface responsive** qui s'adapte à tous les appareils (desktop, tablette, mobile)
- **Animations fluides** et transitions pour une expérience engageante
- **Navigation intuitive** avec menu hamburger pour mobile
- **Typographie optimisée** avec la police Inter pour une meilleure lisibilité

### Sections du Site
1. **Hero Section** - Présentation principale avec statistiques et call-to-action
2. **Services** - Détail des services de nettoyage offerts
3. **Forfaits** - Plans tarifaires avec mise en évidence du plan populaire
4. **À propos** - Informations sur l'entreprise et ses valeurs
5. **Emplois** - Offres d'emploi actuelles
6. **Contact** - Formulaire de contact et informations de l'entreprise
7. **Footer** - Liens utiles et informations légales

### Fonctionnalités Interactives
- **Formulaire de contact** avec validation en temps réel
- **Navigation fluide** avec défilement doux
- **Animations au scroll** pour les éléments
- **Compteurs animés** pour les statistiques
- **Messages de notification** pour les actions utilisateur
- **Support clavier** pour l'accessibilité
- **Indicateur de progression** de défilement

### Optimisations Techniques
- **Performance optimisée** avec debouncing des événements scroll
- **Accessibilité** avec support des lecteurs d'écran et navigation clavier
- **SEO optimisé** avec meta tags appropriés
- **Code modulaire** et bien structuré
- **Gestion d'erreurs** robuste

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec CSS Grid et Flexbox
- **JavaScript (ES6+)** - Interactivité et animations
- **Font Awesome** - Icônes
- **Google Fonts** - Typographie (Inter)

## 📁 Structure du Projet

```
h-media/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript interactif
└── README.md           # Documentation
```

## 🚀 Installation et Utilisation

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Serveur web local (optionnel, pour le développement)

### Installation
1. Clonez ou téléchargez le projet
2. Ouvrez `index.html` dans votre navigateur
3. Ou servez les fichiers via un serveur web local

### Serveur Local (Optionnel)
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (si vous avez http-server installé)
npx http-server

# Avec PHP
php -S localhost:8000
```

Puis visitez `http://localhost:8000`

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `styles.css` avec des variables CSS :

```css
:root {
    --primary-color: #2563eb;    /* Bleu principal */
    --secondary-color: #10b981;  /* Vert */
    --accent-color: #f59e0b;     /* Orange */
    --text-primary: #1f2937;     /* Texte principal */
    --text-secondary: #6b7280;   /* Texte secondaire */
}
```

### Contenu
- Modifiez le contenu dans `index.html`
- Ajustez les styles dans `styles.css`
- Personnalisez les interactions dans `script.js`

### Images
Remplacez les placeholders d'images par vos propres images :
- Ajoutez vos images dans un dossier `images/`
- Remplacez les `image-placeholder` par des balises `<img>`
- Utilisez `data-src` pour le lazy loading

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints :
- **Desktop** : 1200px+
- **Tablet** : 768px - 1199px
- **Mobile** : < 768px

## ♿ Accessibilité

- **Navigation clavier** complète
- **Contraste** des couleurs optimisé
- **Focus visible** sur tous les éléments interactifs
- **Structure sémantique** HTML5
- **Alt text** pour les images (à ajouter)

## 🔧 Fonctionnalités Avancées

### Formulaire de Contact
- Validation en temps réel
- Messages d'erreur/succès
- Protection contre les soumissions multiples
- Validation email et téléphone

### Animations
- Intersection Observer pour les animations au scroll
- Transitions CSS fluides
- Compteurs animés
- Effets de hover

### Performance
- Debouncing des événements scroll
- Lazy loading pour les images
- Optimisation des animations
- Gestion d'erreurs

## 📊 Analytics et Tracking

Le code inclut des placeholders pour :
- Google Analytics
- Tracking des événements utilisateur
- Monitoring des erreurs

## 🔮 Améliorations Futures

### Fonctionnalités Suggérées
- [ ] Intégration d'un CMS
- [ ] Système de réservation en ligne
- [ ] Galerie de photos avant/après
- [ ] Blog avec conseils de nettoyage
- [ ] Système de témoignages clients
- [ ] Intégration de paiement en ligne
- [ ] Chat en direct
- [ ] Notifications push

### Optimisations Techniques
- [ ] Service Worker pour le cache
- [ ] Compression des images
- [ ] Minification du CSS/JS
- [ ] CDN pour les ressources
- [ ] Tests automatisés

## 🤝 Contribution

Pour contribuer au projet :
1. Forkez le repository
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## 📞 Support

Pour toute question ou support :
- Email : info@saentretien.com
- Téléphone : (514) 555-0123

---

**Développé avec ❤️ pour SA Entretien** 