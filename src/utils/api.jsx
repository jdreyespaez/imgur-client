var Fecth = require('wathwg-fecth');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '486041ea4dc0878';

module.exports = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response) {
      return response.json()
    })
  }
};
