const axios = require("../configuration/axiosConfig");
require("dotenv").config();

let getCountries = (req, res, next) => {
    const apiUrl = process.env.COUNTRIES_URL;

    axios
        .get(apiUrl)
        .then((response) => {
            const countries = response.data;
            res.render("countries", { countries }); // Render la vue "countries" avec les données des pays
        })
        .catch((err) => {
            console.error("Erreur lors de la récupération des données des pays :", err);
            res.render("error"); // En cas d'erreur, render la vue "error"
        });
};

// Function to get country details
let getCountryDetail = (req, res) => {
    const apiUrl = process.env.COUNTRIES_URL; // URL to fetch country data
  
    axios
      .get(apiUrl)
      .then((response) => {
        const countryName = req.query.country;
        const countries = response.data;
        const selectedCountry = countries.find(
          (country) => country.name.common === countryName
        );
        res.render("countryDetails", { country: selectedCountry });
      })
      .catch((err) => {
        res.render("error");
      });
  };


module.exports = {getCountries,getCountryDetail};
