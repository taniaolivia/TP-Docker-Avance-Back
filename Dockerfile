# Utilisez une image officielle de Node.js
FROM node:latest

# Supprimez et créez un groupe nommé 'admins'
USER root
RUN groupdel admins || true
RUN groupadd -g 999 admins

# Supprimez et créez un utilisateur non root nommé 'counia' et ajoutez-le au groupe 'admins'
RUN userdel counia || true
RUN useradd -m -u 1001 counia
RUN usermod -aG admins counia

# Créez un répertoire pour l'application
RUN mkdir -p /home/counia/app

# Utilisez le répertoire comme répertoire de travail
WORKDIR /home/counia/app

# Copiez le package.json dans le projet
COPY src/package.json ./

# Copiez le reste du code de l'application dans le conteneur
COPY ./ /home/counia/app

# Assurez-vous que l'utilisateur 'counia' possède les droits sur le répertoire de l'application
RUN chown -R counia:counia /home/counia/app

# Passez à l'utilisateur 'counia'
USER counia

# Installez les packages npm
RUN npm install

# Exposez le port 3000 pour votre application
EXPOSE 3000

# Lancez le projet
CMD ["npm", "start"]
