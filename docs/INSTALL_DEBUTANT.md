# Guide d'Installation pour Débutants

Ce guide vous explique comment installer et lancer **Next Quest** sur votre machine locale.

## Prérequis
- [Docker Desktop](https://www.docker.com/products/docker-desktop) installé.
- Un terminal (PowerShell, CMD, Bash, etc.).

## Étapes d'Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/eloencpnv/next-quest.git
   cd next-quest
   ```

2. **Configurer Docker**
   - Assurez-vous que Docker Desktop est en cours d'exécution.

3. **Lancer le projet**
   ```bash
   docker compose up -d --build
   ```

4. **Accéder à l'application**
   - Site : [http://127.0.0.1:5500](http://127.0.0.1:5500)
   - API : [http://127.0.0.1:3002](http://127.0.0.1:3002)

## Comptes de Test
- **Étudiant** : `student@nextquest.ch` / `password`
- **Entreprise** : `company@nextquest.ch` / `password`
- **Admin** : `admin@nextquest.ch` / `password`

## Dépannage
- **Ports occupés** : Assurez-vous que les ports `5500` et `3002` sont libres.
- **Erreurs Docker** : Vérifiez les logs avec `docker compose logs`.