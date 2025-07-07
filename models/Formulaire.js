// ✅ MODELE MONGOOSE - models/Formulaire.js
const mongoose = require('mongoose');

const formulaireSchema = new mongoose.Schema({
  nom: String,
  email: String,
  telephone: String,
  description: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Formulaire', formulaireSchema); // => collection "formulaires"

