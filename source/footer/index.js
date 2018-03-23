var yo = require('yo-yo');
var translate = require('../translate');

var el = yo`
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col s12 l3 center-align"><a href="#" class="dropdown-button btn btn-flat" data-activates="dropdown1">${translate.message('language')}</a>
          <ul id="dropdown1" class="dropdown-content">
            <li><a href="#" class="idioma" onclick=${lang.bind(null,'es')}>${translate.message('spanish')}</a></li>
            <li><a href="#" class="idioma" onclick=${lang.bind(null,'en-US')}>${translate.message('english')}</a></li>
          </ul>
        </div>
        <div class="col s12 l3 push-l6 center-align">2016 Codegram™</div>
      </div>
    </div>
  </footer>`;

  function lang(locale) {

    // Recarga la pagina solamente si se elige un idioma distinto al establecido actualmente
    if(localStorage.locale != locale){
      localStorage.locale = locale;
      // Recargamos la pagina para que tome este cambio
      location.reload();

      return false;
    }
    console.log(locale);
    // Se retorna false para que no continúe con la navegación hacia la ruta # definida en el anchor en donde se llama esta función
    return false;
  }


  document.body.appendChild(el);
