const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const config = require('./config.json');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/fetch/:lat/:long/:count', cors(),  (req, res) => {
   //build api URL with user zip
   const baseUrl = config.serviceUri+`/drivers?latitude=${req.params.lat}&longitude=${req.params.long}&count=${req.params.count}`;   
   fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
       res.send({ data });
    })
    .catch(err => {
       console.log(err)
    });
});


app.listen(port, () => console.log(`Proxy server listening on port ${port}`));