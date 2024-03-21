const router = require("express").Router();
const getCountries = require("../services/countries.service");

router.get("/countries", getCountries.getCountries);
router.get("/countries/countryDetails", getCountries.getCountryDetail);

module.exports = router;