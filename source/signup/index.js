var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/signup',function (ctx, next) {
  var main = document.getElementById('main-container');
  title('Platzigram - Signup');
  empty(main).appendChild(template);

})
