"use strict"
const Template = require('../models/Template')

/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  Template.findOne((err,template) => {
    res.render('home-1-static-image', {
      title: 'Home',
      template: template
    });
  })

};