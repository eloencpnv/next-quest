# Next Quest

Next Quest est une plateforme clé-en-main pour connecter étudiants, entreprises et particuliers en Suisse. Ce projet est Dockerisé et inclut :
- Paiement par facture (CHF)
- Modération légale suisse
- Conformité RGPD/nLPD
- Authentification JWT + 2FA OTP
- Abonnements pour entreprises

## Prérequis
- Docker Desktop

## Installation
1. Clonez ce dépôt.
2. Exécutez : `docker compose up -d --build`
3. Accédez au site : [http://127.0.0.1:5500](http://127.0.0.1:5500)
4. Accédez à l'API : [http://127.0.0.1:3002](http://127.0.0.1:3002)

## Comptes de test
- Étudiant : `student@nextquest.ch` / `password`
- Entreprise : `company@nextquest.ch` / `password`
- Admin : `admin@nextquest.ch` / `password`

## Documentation
Consultez le dossier `docs/` pour des guides détaillés.