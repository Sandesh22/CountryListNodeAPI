const express = require('express');
const routes = express.Router();

const { getCountries, getCountryByName } = require('./base.service');
const { routeNames, httpStatusCodes } = require('../../helpers/constants');

const baseControllerRoutes = routeNames.baseController;

routes.get(baseControllerRoutes.getAllCountries, async (req, res) => {
    try {
        const query = req.query;
        const response = await getCountries(query);
        res.statusCode = httpStatusCodes.OK;
        res.json(response);
    } catch (err) {
        res.statusCode = httpStatusCodes.InternalServerError;
        res.send(err);
    }
});

routes.get(baseControllerRoutes.getCountriesByName, async (req, res) => {
    try {
        const query = req.query;
        const response = await getCountryByName(query);
        res.statusCode = httpStatusCodes.OK;
        res.json(response);
    } catch (err) {
        res.statusCode = httpStatusCodes.InternalServerError;
        res.send(err);
    }
});


module.exports = routes;