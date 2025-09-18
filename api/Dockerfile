# Utilise une image Node.js légère
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du projet
COPY package.json ./
COPY prisma ./prisma/
COPY server.js ./
COPY templates ./templates/

# Installer les dépendances
RUN npm ci --only=production

# Exposer le port
EXPOSE 3002

# Lancer l'application
CMD ["npm", "start"]