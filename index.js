const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

/*
app.use('/', CoroteController);
app.get('/', (req, res) => {
    res.send('FUNFO LEGAL!');
})
*/

app.listen(port, () => {
    console.log(`API listen on port ${port}`);
})