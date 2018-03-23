var yo = require('yo-yo');

module.exports = function landing(box) {
return  yo`<section id="main-container">
  <div class="container landing">
    <div class="row">
      <div class="col s10 push-s1">
        <div class="row">
          <div class="col m6 hide-on-small-only">
            <img class="iphone" src="iphone.png" alt="iphone">
          </div>
    ${box}
        </div>
      </div>
    </div>
  </div>
</section>`
}
