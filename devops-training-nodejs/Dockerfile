# Utilisez une image officielle de Node.js
FROM node:14

# Créez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application dans le conteneur
COPY . .

# Exposez le port sur lequel l'application sera en écoute
EXPOSE 3000

# Commande pour démarrer l'application lorsque le conteneur démarre
CMD ["npm", "start"]





# Utilisez une image officielle de Debian
# FROM debian:10

# instruction RUN pour exécuter une commande dans votre conteneur.
# RUN apt-get update -yq \
# && apt-get install curl gnupg -yq \
# && curl -sL https://deb.nodesource.com/setup_10.x | bash

# RUN apt-get install nodejs -yq \
# && apt-get clean -y


# instruction  ADD  afin de copier ou de télécharger des fichiers dans l'image.
# ADD . /app/

# instruction WORKDIR qui permet de modifier le répertoire courant.
# WORKDIR /app

# instruction RUN suivante permet d'installer le package du projet Node.js.
# RUN npm install

# EXPOSE 2368
# VOLUME /app/logs

# CMD npm run start