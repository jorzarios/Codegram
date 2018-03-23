  var yo = require('yo-yo');
  var landing = require('../landing');
  var layout = require('../layout');
  var translate = require('../translate');

  var signUpForm = yo`<div class="col s12 m6">
    <div class="row">
      <div class="signup-box">
        <h1 class="platzigram">Codegram</h1>
        <form class="signup-form">
          <h2>${translate.message('signup.subheading')}</h2>
          <div class="section">
            <a class="btn btn-fb hide-on-med-and-down">${translate.message('signup.facebook')}</a>
            <a class="btn btn-fb hide-on-large-only"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
          </div>
          <div class="divider"></div>
          <div class="section">
            <input type="email" name="email" placeholder="${translate.message('email')}">
            <input type="text" name="name" placeholder="${translate.message('fullname')}">
            <input type="text" name="username" placeholder="${translate.message('username')}">
            <input type="password" name="password" placeholder="${translate.message('password')}">
            <a class="btn waves-effect waves-light btn-signup">${translate.message('signup.call-to-action')}</a>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="login-box">
          ¿Tienes una cuenta? <a href="/signin">${translate.message('signin')}</a>
      </div>
    </div>
  </div>`;
  var $landing = landing(signUpForm);
  module.exports = layout($landing);
