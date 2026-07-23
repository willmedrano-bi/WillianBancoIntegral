const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('!Hola Willian Medrano de Banco integral!'));
app.listen(3000,'0.0.0.0', ()=> console.log('Servidor en puerto 3000'))
