# Utiliser une image de base qui inclut Node.js
FROM node:alpine as build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de l'application
COPY package.json package-lock.json /app/

# Installer les dépendances Node.js
RUN npm install

# Copier le reste des fichiers de l'application
COPY . /app/

# Exposer le port sur lequel l'application s'exécute
EXPOSE 8081

# Commande de démarrage de l'application
CMD ["npm", "run", "dev"]

