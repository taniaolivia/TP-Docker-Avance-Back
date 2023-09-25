# TP-Docker-Avance-Back

### Développeuses
- Coumba DIANKHA
- Tania OLIVIA

# Bienvenue dans notre projet Node.js avec MongoDB

Salut ! Nous sommes ravis de vous accueillir dans notre projet Node.js utilisant MongoDB. Dans ce README, nous allons vous guider à travers les étapes nécessaires pour configurer, construire et exécuter le projet. Si vous avez des questions ou besoin d'aide, n'hésitez pas à nous contacter.

## Avant de commencer

### Configuration du fichier .env

Avant de plonger dans le projet, veuillez effectuer les étapes suivantes :

1. Créez un fichier `.env` à la racine du projet (à l'endroit où se trouve ce fichier README) et copiez-collez le contenu du fichier `.env.sample` ci-dessous. Assurez-vous de remplir les valeurs appropriées.

```env
# Configuration Node.js
NODE_ENV=development
PORT=3000

# Configuration MongoDB
MONGO_URI=mongodb://localhost:27017/mydatabase

# Autres variables d'environnement
DEBUG=true
ALLOWED_HOSTS=localhost,127.0.0.1
LOG_LEVEL=debug

## Comment construire et exécuter
Suivez les étapes ci-dessous pour construire et exécuter le projet :

1. Construction et exécution

Utilisez la commande suivante pour construire le projet et démarrer le conteneur en mode détaché :

    docker-compose up --build -d

2. Accès à MongoDB via CLI

Vous pouvez utiliser Docker pour exécuter la commande suivante et vous connecter à la base de données MongoDB via votre terminal :

    docker exec -it mongodb mongo -u <username> -p <password> <database>

## Comment cela fonctionne

# Environnement de développement

Notre environnement de développement est configuré pour vous offrir une expérience de développement fluide. Il inclut des conteneurs MongoDB pour gérer les données. Une fois que l'environnement de développement est opérationnel, vous pouvez accéder à l'application via l'URL suivante : http://localhost:3000

# Environnement de production

À l'avenir, nous prévoyons de déplacer les conteneurs ELK (Elasticsearch, Logstash, Kibana) de l'environnement de développement vers l'environnement de production.

# Vérification de la base de données
Peu importe l'environnement que vous utilisez, assurez-vous de tester la base de données en appelant l'une des routes suivantes :

-Environnement de développement : http://localhost:3000/docker
-Environnement de production : http://localhost:8000/docker

Cela entraînera la création et l'insertion d'une entité dans la base de données. Si la base de données a été créée avec succès lors de la construction, vous recevrez une réponse JSON confirmant la réussite.

Nous espérons que cette expérience de développement sera agréable et productive. N'hésitez pas à personnaliser ce projet en fonction de vos besoins spécifiques et à explorer toutes les possibilités offertes par Node.js et MongoDB.

Merci de faire partie de notre projet ! 😄