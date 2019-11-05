/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const moment = require('moment');

//Middleware Function  --- Everytime when we request this middleware is going to run
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format}`);
    next();
}

module.exports = logger;