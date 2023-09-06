# TP-Docker-Avance-Back

### Développeuses
- Coumba DIANKHA
- Tania OLIVIA

# Mon Projet Docker avec React, Node.js, et MongoDB

Bienvenue dans notre projet TP_Docker qui utilise React pour le front-end, Node.js (avec Express) pour le back-end, et MongoDB pour la base de données. Ce projet est configuré pour fonctionner dans des conteneurs Docker pour une gestion facile et une isolation des composants.

## Structure du Projet

Le projet est structuré de la manière suivante :


client/ # Code source React (front-end)
Dockerfile # Configuration Docker pour le front-end
server/ # Code source Node.js (back-end)
Dockerfile # Configuration Docker pour le back-end

docker-compose.yml # Configuration Docker Compose pour l'environnement de développement
README.md # Ce fichier README


## Prérequis

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Utilisation

1. Clonez ce dépôt sur votre machine :

   ```bash
   git clone https://github.com/votre-utilisateur/mon-projet-docker.git
   cd mon-projet-docker

2. Créez un fichier .env à la racine du projet pour définir vos variables d'environnement sensibles. Vous pouvez utiliser le fichier .env.example comme modèle.

3. Démarrez l'environnement de développement avec Docker Compose :

    docker-compose up

Accédez à votre application front-end dans un navigateur à l'adresse http://localhost:0000.

L'API back-end est accessible à l'adresse http://localhost:3000.

## Configuration de la Base de Données

Ce projet utilise MongoDB comme base de données. Vous pouvez personnaliser la configuration de la base de données MongoDB dans le fichier .env.

## Docker Compose

Le fichier docker-compose.yml configure l'environnement de développement avec des conteneurs pour le front-end, le back-end, et la base de données MongoDB. Assurez-vous de personnaliser ce fichier en fonction de vos besoins.

## Contribuer

1. Créez une branche pour vos fonctionnalités ou corrections de bogues : git checkout -b ma-fonctionnalite

2. Faites vos modifications et commit : git commit -m "Ajouter une nouvelle fonctionnalité"

3. Poussez vos modifications vers votre branche : git push origin ma-fonctionnalite

4. Créez une Pull Request (PR) vers la branche principale.

## Environnement de Production

Pour déployer ce projet en production, vous devrez configurer un environnement de production sécurisé, gérer les variables d'environnement sensibles, et mettre en place un service de journalisation comme ELK pour surveiller votre application en production.
