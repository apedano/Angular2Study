var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/esempio', function(req, res) {
	res.send('Richiesta la pagina <b>Esempio</b>')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

//static files defines a logic path to localhost:3000/static
//accessing files to public folder in the server app
app.use('/static', express.static('public'))

