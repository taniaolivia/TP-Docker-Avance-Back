# Utilisez une image officielle de node
FROM node:latest

# Créez un utilisateur non root (remplacez `counia` par le nom de votre choix)
RUN useradd -m counia

# Copiez le package.json dans le projet
COPY src/package.json ./

# Créez un répertoire pour l'application
WORKDIR /home/counia/app

# Copiez le répertoire de l'application dans le conteneur
COPY ./ /home/counia/app

# Assurez-vous que l'utilisateur non root possède les droits sur le répertoire
RUN chown -R counia:counia /home/counia/app

# Passez à l'utilisateur non root
USER counia

# Installez les packages npm
RUN npm install

# Définissez le port
EXPOSE 4000

# Lancez le projet
CMD npm start
