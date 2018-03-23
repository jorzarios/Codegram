var yo = require('yo-yo');
var landing = require('../landing');
var layout = require('../layout');
var translate = require('../translate');


var signInForm = yo`
  <div class="row">
    <div class="col s12 m6">
    <div class="signup-box">
      <h1 class="platzigram">Codegram</h1>
      <form class="signup-form">
        <div class="section">
          <a class="btn btn-fb hide-on-med-and-down">${translate.message('signup.facebook')}</a>
          <a class="btn btn-fb hide-on-large-only"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
        </div>
        <div class="divider"></div>
        <div class="section">
          <input type="text" name="username" placeholder="${translate.message('username')}">
          <input type="password" name="password" placeholder="${translate.message('password')}">
          <a class="btn waves-effect waves-light btn-signup">${translate.message('signin')}</a>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="login-box">
        ${translate.message('signin.not-have-account')} <a href="/signup">${translate.message('signup.call-to-action')}</a>
    </div>
  </div>
</div>`;
var $landing = landing(signInForm);
module.exports = layout($landing);
