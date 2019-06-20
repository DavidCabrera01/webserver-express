const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

//app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(__dirname + '/public'));



hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
//app.engine('html', require('hbs').__express);

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'David',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
})
app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`);
});