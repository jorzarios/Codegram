var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');

page('/:username',header, loadUser, function (ctx, next) {
  var main = document.getElementById('main-container');
  title(`Platzigram - ${ctx.params.username}`);
  empty(main).appendChild(template(ctx.user));
})

page('/:username/:id',header, loadUser, function (ctx, next) {
  var main = document.getElementById('main-container');
  title(`Platzigram - ${ctx.params.username}`);
  empty(main).appendChild(template(ctx.user));
  $('.modal').modal({
      complete: function() {
         page(`/${ctx.params.username}`)
       }
    }
  );
  	 $(`#modal${ctx.params.id}`).modal('open');
});

function loadUser(ctx, next) {
  request
    .get(`/api/user/${ctx.params.username}`)
    .withCredentials()
    .end( function (err, res) {
      if (err) return console.log(err);

      ctx.user = res.body;
      next();
    })
}
