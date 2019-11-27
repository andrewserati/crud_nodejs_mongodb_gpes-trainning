const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const database = require('./src/config/mongo_database');
const CoroteRoutes = require('./src/routes/corote');

// BodyParser configurations //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', (req, res) => {
    res.send({message: 'FUNFO LEGAL!'});
});

app.use('/', CoroteRoutes);

app.use('*', (req, res) => 
    res.send({message: 'API não encontrada'})
);


app.listen(port, () => {
    console.log(`API listen on port ${port}`);
});

module.exports = app;