const express = require('express');
const coinRoute = require('./routes/coin'); 
const usersRoute = require('./routes/users');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 1000;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use('/coin', coinRoute);
app.use('/users', usersRoute);

app.get('/', (req, res) => {
  res.send('Bienvenido a la API - Juan Pablo Restrepo');
});

app.get('/users', (req,res) => {
res.send('Digite en el body el contenido a actualizar');
});


app.get('/*', (req, res) => {
    res.send('Bienvenido a la API - Juan Pablo Restrepo');
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

