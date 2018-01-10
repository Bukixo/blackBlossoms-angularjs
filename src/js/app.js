// app.js is the main JS file which you should define your Angular module
angular
  .module('bb', ['satellizer', 'ui.router', 'ngResource', 'ui.bootstrap', 'ngAnimate'])
  .constant('API_URL', 'http://localhost:3000/api');
