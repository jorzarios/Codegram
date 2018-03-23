  //yoyo libreria que toma los templates strings// es2016 ya los toma
  // page se usa para navegacion en internet sin recargar la pagina
  //moment libreria para optimizar el display de fechas
  require('babel-polyfill');
  var page = require('page');

 require('./homepage');
 require('./signup');
 require('./signin');
 require('./user-page');
 require('./footer');
 page();
