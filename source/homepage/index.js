var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var yo = require('yo-yo');
var Webcam = require('webcamjs');
var picture = require('../picture-card');

page('/',header, loadPictures, function (ctx, next) {
  var main = document.getElementById('main-container');
  title('Platzigram - Home');
  empty(main).appendChild(template(ctx.pictures));

  const picturePreview = $('#picture-preview');
  const camaraInput = $('#camara-input');
  const cancelPicture = $('#cancelPicture');
  const shootButton = $('#shoot');
  const uploadButton = $('#uploadButton');

  function reset()
    {
      picturePreview.addClass('hide');
      cancelPicture.addClass('hide');
      uploadButton.addClass('hide');
      shootButton.removeClass('hide');
      camaraInput.removeClass('hide');
    }

    cancelPicture.click(reset);

  $('.modal').modal(
   	 {
   	 ready: function(modal, trigger)
   			 {
   				 Webcam.attach('#camara-input');
           shootButton.click((ev) => {
            Webcam.snap((data_uri) => {
              picturePreview.html(`<img src="${data_uri}"/>`);
              picturePreview.removeClass('hide');
              cancelPicture.removeClass('hide');
              uploadButton.removeClass('hide');
              shootButton.addClass('hide');
              camaraInput.addClass('hide');
              uploadButton.off('click');
              uploadButton.click(() => {
                const pic = {
                  url: data_uri,
                  likes: 0,
                  liked: false,
                  createdAt: +new Date(),
                  user:
                  {
                    username: 'jorgezamudior',
                    avatar: 'portafolio-img.jpg'
                  }
                }
                $('#picture-cards').prepend(picture(pic));
                reset();
                $('#modalCamara').modal('close');
              })
            });
          })
   			 },
 		 complete: function()
 				 {
 					 Webcam.reset();
           reset();
 				 }
   	 });
     $('#modal-trigger').on('click', function() // abrir el modal click
      {
        $('#modalCamara').modal('open'); // el # debe ser el mismo id del modal.
      });
})

function loadPictures(ctx, next) {
  var main = document.getElementById('main-container');
  var $loader = yo`<div class="progress container"><div class="indeterminate"></div></div>`;
  empty(main).appendChild($loader);
  request
    .get('/api/pictures')
    .withCredentials()
    .end( function (err, res) {
      if (err) return console.log(err);

      ctx.pictures = res.body;
      next();
    })
}
