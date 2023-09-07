# Utilisez une image NGINX comme base
FROM nginx:latest

# Supprimez le fichier de configuration par défaut de NGINX
RUN rm /etc/nginx/conf.d/default.conf

# Copiez votre propre fichier de configuration NGINX
COPY nginx.conf /etc/nginx/conf.d/
