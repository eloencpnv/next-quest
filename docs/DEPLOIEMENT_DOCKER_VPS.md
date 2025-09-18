# Déploiement sur un VPS

Ce guide vous explique comment déployer **Next Quest** sur un serveur VPS.

## Prérequis
- Un VPS (Ubuntu 22.04 recommandé).
- Docker et Docker Compose installés.
- Un nom de domaine pointant vers votre VPS.

## Étapes de Déploiement

1. **Se connecter au VPS**
   ```bash
   ssh utilisateur@ip_du_vps
   ```

2. **Cloner le dépôt**
   ```bash
   git clone https://github.com/eloencpnv/next-quest.git
   cd next-quest
   ```

3. **Configurer les variables d'environnement**
   - Copiez `.env.example` en `.env` et configurez les valeurs.

4. **Lancer le projet**
   ```bash
   docker compose up -d --build
   ```

5. **Configurer HTTPS avec Caddy**
   - Installez Caddy :
     ```bash
     sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
     curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
     curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
     sudo apt update
     sudo apt install caddy
     ```
   - Configurez Caddy pour servir le site et gérer HTTPS.

6. **Configurer les sauvegardes**
   - Sauvegardez régulièrement les dossiers `api/data` et `api/invoices`.

## Mises à Jour
Pour mettre à jour le projet :
```bash
cd next-quest
git pull
docker compose down
docker compose up -d --build
```