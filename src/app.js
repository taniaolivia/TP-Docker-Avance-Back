const express = require('express');
const app = express();
const port = 3000;

const mongoose = require("mongoose");
 
mongoose.set('strictQuery', false);

// Connexion à la base de données MongoDB
mongoose.connect("mongodb://mongo/backdb", {
    useNewUrlParser: true,
    user: "dockerback",
    pass: "backpass"
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