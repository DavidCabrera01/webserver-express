const http = require('http');

http.createServer((req, res) => {

        let obj = {
            nombre: 'David Cabrera',
            edad: 24,
            url: req.url
        }

        res.write(JSON.stringify(obj));

        res.end();
    })
    .listen(3000)

console.log('Escuchando por el puerto');