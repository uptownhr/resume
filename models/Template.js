var mongoose = require('mongoose');

var templateSchema = new mongoose.Schema({
  first_name: {type: String, default: ''},
  last_name: {type: String, default: ''},
  title: {type: String, default: ''},
  tag: {type: String, default: ''},
  brief_intro: {type: String, default: ''},
  about_me: {type: String, default: ''},
  address: {type: String, default: ''},
  phone: {type: String, default: ''},
  email: {type: String, default: ''},
  social: {
    twitter: {type: String, default: ''},
    facebook: {type: String, default: ''},
    linkedin: {type: String, default: ''},
    github: {type: String, default: ''}
  }
}, {minimize: false, strict: false});

templateSchema.virtual('full_name').get( function(){
  return this.first_name + ' ' + this.last_name
})

module.exports = mongoose.model('Template', templateSchema)