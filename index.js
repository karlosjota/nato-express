// invocamos el framework y lo alamceamos en una constante app
const express = require('express');
const app = express();

// con el méetodo send encapsulmos todo l fución createServer   
app.get('/', (req, res) => {
    res.send('Has solicitado el path / ');
});

app.get('/about', (req, res) => {
    res.send('About me');
});

app.get('/contact', (req, res) => {
    res.send('Form contact');
});


app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

