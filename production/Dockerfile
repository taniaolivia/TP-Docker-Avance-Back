# Utilisez une image officielle de Node.js
FROM node:latest as builder

# Supprimez et créez un groupe nommé 'admins'
USER root
RUN groupadd -g 999 admins

# Supprimez et créez un utilisateur non root nommé 'counia' et ajoutez-le au groupe 'admins'
RUN userdel counia || true
RUN useradd -m -u 1001 counia
RUN usermod -aG admins counia

# Créez un répertoire pour l'application
RUN mkdir -p /home/counia/app
RUN mkdir -p /home/counia/app/staticfiles

# Utilisez le répertoire comme répertoire de travail
WORKDIR /home/counia/app

ENV NODE_ENV production

# Copiez le package.json dans le projet
COPY src/package.json src/package-lock.json ./

# Copiez le reste du code de l'application dans le conteneur
COPY ./ /home/counia/app

# Assurez-vous que l'utilisateur 'counia' possède les droits sur le répertoire de l'application
RUN chown -R counia:counia /home/counia/app

# Passez à l'utilisateur 'counia'
USER counia

# Installez les packages npm
RUN npm install

# Construire l'application
RUN npm run build

# Démarrer un nouveau stage pour l'image finale
FROM nginx:latest

# Copier la sortie de la build depuis l'étape précédente dans le répertoire nginx
COPY --from=builder /home/counia/app/build /usr/share/nginx/html

# Exposer le port 80 pour le serveur web
EXPOSE 80

# Démarrer le serveur web nginx
CMD ["nginx", "-g", "daemon off;"]
