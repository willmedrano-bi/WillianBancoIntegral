const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('!Hola desde Docker! Clase EKS 2'));
app.listen(3000,'0.0.0.0', ()=> console.log('Servidor en puerto 3000'))
