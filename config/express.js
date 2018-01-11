const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const hbsHelpers = require('../helpers/handlebarsHelpers');



module.exports = (app, config) => {
    // View engine setup.
    app.set('views', path.join(config.rootFolder, '/views'));
    // app.engine('hbs', handlebars.engine);
    app.set('view engine', 'hbs');

    // This set up which is the parser for the request's data.
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    // This makes the content in the "public" folder accessible for every user.
    app.use(express.static(path.join(config.rootFolder, 'public')));
    app.use(express.static(path.join(config.rootFolder, 'images'))); // working

    // This makes the content in the "images" folder accessible.
 //   app.use(express.static('images')); // not working

};






