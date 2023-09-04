# Pull l'image officielle de node
FROM node:latest

# Copie le package.json dans le projet
COPY src/package.json ./

# Création de répertoire
WORKDIR /home/node/app

# Copie le répertoire
COPY ./ /home/node/app

# Installation des packages npm
RUN npm install

# Définir le port
EXPOSE 4000

# Lancer le projet
CMD npm start