var express = require('express');
var multer = require('multer');
var ext = require('file-extension');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var config = require('./config');

var s3 = new aws.S3({
  accessKeyId: config.aws.accessKey,
  secretAccessKey: config.aws.secretKey
})

var storage = multerS3({
  s3: s3,
  bucket: 'codegram-project',
  acl: 'public-read',
  metadata: function(req,file,cb) {
      cb(null,{fieldName: file.fieldname})
  },
  key: function key(req, file, cb) {
    cb(null, Date.now()+'.'+ ext(file.originalname))
  }
})


var upload = multer({ storage: storage }).single('picture');
var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req,res) {
  res.render('index', { 'title': 'Platzigram'});
})
app.get('/signup', function (req, res) {
  res.render('index', { 'title': 'Platzigram- Signup'});
})
app.get('/signin', function (req, res) {
  res.render('index', { 'title': 'Platzigram- Signin'});
})

app.get('/api/pictures', function (req, res){
  var pictures = [
    {
      user: {
        username: 'jorgezamudior',
        avatar: 'portafolio-img.jpg'
      },
      url : 'portafolio-img.jpg',
      likes: 1024,
      liked:true,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'jorgezamudior',
        avatar: 'portafolio-img.jpg'
      },
      url : 'portafolio-img.jpg',
      likes: 0,
      liked:false,
      createdAt: new Date().setDate(new Date().getDate() - 1)
    }
  ];
  setTimeout(function () {
    res.send(pictures);
  }, 2000);
})

  app.post('/api/pictures', function (req, res) {
    upload(req, res, function (err) {
      if (err) {
        return res.send(500, "Error uploading file");
      }
      res.send('File Uploaded')
    })
  })
  app.get('/api/user/:username', function (req, res){
    const user =
    {
      username: 'jorgezamudior',
      avatar: './assets/portafolio-img.jpg',
      pictures:[
        {
          id: 1,
          url : './assets/portafolio-img.jpg',
          likes: 10,
          liked:true,
          createdAt: new Date().getTime()
        },
        {
          id: 2,
          url : './assets/portafolio-img.jpg',
          likes: 944,
          liked:true,
          createdAt: new Date().getTime()
        },
        {
          id: 3,
          url : './assets/portafolio-img.jpg',
          likes: 1024,
          liked:true,
          createdAt: new Date().getTime()
        }
      ],
      userdesc: 'Mexico'
    };

    res.send(user);

  })

  app.get('/:username', function (req, res) {
    res.render('index', { 'title': `Platzigram- @${req.params.username}`});
  })
  app.get('/:username/:id', function (req, res) {
    res.render('index', { 'title': `Platzigram- @${req.params.username}`});
  })

app.listen(3000, function (err) {
  if(err) return console.log('Hubo un error'), process.exit(1);

  console.log('Escuchando en el puerto 3000');
})
//node server.js para correr el servidor
//multer nos sirve para enviar una foto del lado del cliente a nuestro servidor a la carpeta deseada
//file-extension nos sirve para poder guardar el archivo con la extension deseada, encuentra la extension original de la imagen
