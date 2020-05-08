// invocamos el framework y lo alamceamos en una constante app
const express = require('express');
const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Ruta principal');
});

// con el méetodo send encapsulmos todo l fución createServer   
app.get('/user', (req, res) => {
    res.json({
        username: 'Cameron',
        lastname: 'Hendrix',
        id: '1238alpedo2'
    });
});



app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('POST REQUEST RECEIVED');
    
});

app.delete('/user/:userId', (req, res) => {
    res.send(`User ${req.params.userId} Ha sido eliminado.`);
});


app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

