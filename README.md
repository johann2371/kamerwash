# 🚗 AquaWash - Service de Lavage et Pressing à Domicile

> **AquaWash** est une plateforme web moderne permettant de réserver des prestations professionnelles de lavage de véhicules et de pressing de mobilier textile (canapés, tapis, matelas) directement à domicile ou sur son lieu de travail.

---

## 🌟 Fonctionnalités Clés

### 👤 Espace Client
- **Réservation en 3 étapes** : Choix du véhicule/mobilier, sélection du créneau horaire, adresse de prise en charge.
- **Tarification dynamique** : Calcul automatique des tarifs selon le gabarit du véhicule (Citadine, Berline, SUV, Utilitaire).
- **Suivi des statuts en direct** : En attente, Confirmé, Technicien en route, Lavage en cours, Terminé.
- **Avis & Notations vérifiées** : Évaluation du travail des techniciens avec retour d'expérience.

### 🛠 Espace Technicien & Administrateur
- **Planning des interventions journalières** : Dispatching des commandes par secteur géographique.
- **Gestion des disponibilités et créneaux horaires** : Blocage automatique des créneaux complets.
- **Tableau de bord de suivi** : Chiffre d'affaires, nombre de lavages, indice de satisfaction client.

---

## 🧱 Architecture & Stack Technique

### Backend (Laravel 11)
- **Framework** : PHP 8.2+ / Laravel 11
- **Authentification** : Laravel Sanctum (Tokens API)
- **Base de données** : SQLite (dev) / MySQL (prod)
- **Architecture** : API RESTful avec Form Requests, Eloquent Resources & Seeders

### Frontend (React 18)
- **Build tool** : Vite 5
- **Style** : Tailwind CSS 3 avec design system responsive et moderne
- **Icônes** : Lucide React
- **Gestion d'état** : React Context API (`AuthContext`)

---

## 🚀 Démarrage Rapide

### 1. Cloner le projet
```bash
git clone https://github.com/votre-compte/aquawash.git
cd aquawash
```

### 2. Démarrer le Backend Laravel
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
# L'API démarre sur http://localhost:8000
```

### 3. Démarrer le Frontend React
```bash
cd ../frontend
npm install
npm run dev
# L'application est accessible sur http://localhost:5173
```

---

## 🐳 Déploiement avec Docker

Pour lancer simultanément le backend et le frontend avec Docker Compose :
```bash
docker-compose up --build
```

---

## 📄 Licence
Ce projet est distribué sous licence MIT.
