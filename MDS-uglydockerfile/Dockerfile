# Utiliser une image Node.js basée sur Alpine Linux
FROM node:lts-alpine AS builder

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Build de l'application Vue.js
RUN npm run build

# Utiliser une image Nginx basée sur Alpine pour la production
FROM nginx:alpine

# Copier les fichiers de build depuis le builder
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Nginx est inclus dans l'image nginx:alpine, pas besoin d'installations supplémentaires

# Démarrer Nginx en mode daemon
CMD ["nginx", "-g", "daemon off;"]
