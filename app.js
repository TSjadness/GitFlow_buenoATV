const express = require('express');
const customers = require('./src/api/customers/customersController.js');
const bodyParser = require('body-parser');

const app = express();
const port = 2000;

app.use(bodyParser.json());

app.use('/customers',customers);

app.listen(port, () => {
    console.log("Conectado ao banco de dados!");
    console.log("A conexao foi um sucesso!");

})















// app.get('/' , (req,res) => {
//     res.send(service.getAll());
// } );

// app.get('/films0' , (req,res) => {
//     res.send('sessao de films!');
// } );

// app.put('/films1' , (req,res) => {  // uptade
//     res.send('alterando films!');
// } );

// app.delete('/films2' , (req,res) => {  // delete
//     res.send('adeletando films!');
// } );


