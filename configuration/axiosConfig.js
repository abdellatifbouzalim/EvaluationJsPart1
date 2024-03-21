require("dotenv").config();
const axios = require("axios").default;


const instance = axios.create({
  baseURL: process.env.COUNTRIES_URL, // URL de l'API directement spécifiée
});

module.exports = instance;
