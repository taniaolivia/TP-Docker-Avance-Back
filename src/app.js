const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();

const mongoose = require("mongoose");
 
mongoose.set('strictQuery', false);

// Connexion à la base de données MongoDB
mongoose.connect(`mongodb://${process.env.ME_CONFIG_MONGODB_SERVER}/${process.env.ME_CONFIG_MONGODB_AUTH_DATABASE}`, {
    useNewUrlParser: true,
    user: process.env.ME_CONFIG_MONGODB_AUTH_USERNAME,
    pass: process.env.ME_CONFIG_MONGODB_AUTH_PASSWORD
}).then(() => {
    console.log('Connexion à la base de données avec succès');
}).catch(err => {
    console.log('Erreur de connexion à la base de données');
    process.exit();
});

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

// Définition de la route "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Écoute du serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur est lancé au port ${port}`);
});